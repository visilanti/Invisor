"use client";
import { HiArrowLongRight } from "react-icons/hi2";
import { FiMic } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { handlePostAnswer } from "@/helpers/interviewHelper";
import { MdRecordVoiceOver } from "react-icons/md";
import TimerComponent from "../TimerComponent";
import Link from 'next/link'

export default function GenerateQuestionCard({ questions, questionId }) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [timerTrigger, setTimerTrigger] = useState(false);
  const [nextBeforeAnswer, setNextBeforeAnswer] = useState(false);
  const [zeroTime, setZeroTime] = useState(false);

  const recognitionRef = useRef(null);

  const startRecording = () => {
    setIsRecording(true);

    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      const { transcript } = event.results[event.results.length - 1][0];
      setAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] = transcript;
        return updatedAnswers;
      });
    };

    recognitionRef.current.start();
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleToggleRecording = () => {
    if (!isRecording) {
      startRecording();
      setZeroTime(true);
      setTimerTrigger((prev) => !prev);
    } else {
      stopRecording();
      setTimerTrigger((prev) => !prev);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex >= answers.length) {
      setNextBeforeAnswer(true);
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setZeroTime(false);
    } else {
      submitAnswers();
    }
  };

  const handleCloseModal = () => {
    setNextBeforeAnswer(false);
  };

  const submitAnswers = async () => {
    const interviewData = {
      id: questionId,
      interviews: questions.map((question, index) => ({
        question: question.question,
        answer: answers[index],
      })),
    };

    const response = await handlePostAnswer(interviewData);
    const summaryID = response.data.data.summary_id;

    router.push(`/dashboard/interview/summary/${summaryID}`);
  };

  if (questions.length === 0) {
    return (
<>
      <p className="pl-24 flex justify-center items-center pt-36 text-varians-vr06">
        Loading Questions... Sistem kami lagi memproses pertanyaan mu, mohon bersabar yaa :)
      </p>
<Link
                  href={`/dashboard/interview/generate-question/${questionId}`}
                  className="pl-24 w-fit flex justify-center items-center rounded-full bg-[#FA5F47] animate-pulse"
                >
                 <span className="font-bold font-xl text-white">
                    Cek apakah pertanyaan sudah selesai diproses
                  </span>
                </Link>
</>
    );
  }

  const { question } = questions[currentQuestionIndex];

  const stopRecordAfterTwoMinutes = () => {
    stopRecording();
    setTimerTrigger(false);
  };

  return (
    <>
      <div className="pt-6 lg:pt-16 px-5 lg:pl-64 lg:px-32">
        <div className="flex justify-center items-center gap-3">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentQuestionIndex === index ? "bg-[#FA5F47]" : "bg-[#999999]"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="pt-5 px-5 lg:pl-64 lg:px-32 flex justify-between items-center">
        <div>
          <p className="text-[#FA5F47]">
            Question No {currentQuestionIndex + 1}
          </p>
        </div>
        <div
          className="flex items-center gap-5 hover:scale-105 cursor-pointer"
          onClick={handleNextQuestion}
        >
          <p className="text-[#E9E4E3]">
            {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
          </p>
          <HiArrowLongRight className="text-[#FA5F47] text-3xl" />
        </div>
      </div>
      <div className="pt-4 px-5 lg:pl-64 lg:px-32">
        <div className="flex flex-col gap-7 md:justify-between md:flex-row">
          <div className="bg-[#E2E8F0] w-full h-fit rounded-3xl flex flex-col justify-between">
            <div className="px-10 py-10 lg:px-14 lg:py-14">
              <div>
                <p className="font-bold text-center">{question}</p>
                {answers[currentQuestionIndex] && (
                  <p className="pt-5 text-center font-extralight">
                    {answers[currentQuestionIndex]}
                  </p>
                )}
              </div>
            </div>
            <div className="py-10 flex flex-col justify-end items-center gap-2">
              <TimerComponent
                trigger={timerTrigger}
                callbackFn={stopRecordAfterTwoMinutes}
                zeroTime={zeroTime}
              />
              {isRecording ? (
                <button
                  onClick={handleToggleRecording}
                  className="flex gap-2 py-3 px-3 rounded-full w-fit bg-[#FA5F47] animate-pulse"
                >
                  <MdRecordVoiceOver className="text-varians-vr06 text-2xl" />{" "}
                  <span className="font-bold font-xl text-white">
                    Stop Record
                  </span>
                </button>
              ) : (
                <button
                  onClick={handleToggleRecording}
                  className="flex gap-2 py-3 px-3 rounded-full w-fit bg-[#FA5F47]"
                >
                  <FiMic className="text-varians-vr06 text-2xl" />
                  <span className="font-bold font-xl text-white">
                    Start Record
                  </span>
                </button>
              )}
            </div>
          </div>
          {/* <div className="w-full flex flex-col gap-3">
            <div className="rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#A68C89] p-0.5 h-full">
              <div className="w-full h-full bg-[#504E5A] rounded-3xl px-4 py-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#E0E0E0]">Feedback</p>
                  <RxTriangleDown className="text-6xl text-[#999999]" />
                </div>
                <div className="text-center pb-2 text-[#E2E8F0] font-extralight">{feedback}</div>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#A68C89] p-0.5 h-full">
              <div className="w-full h-full bg-[#504E5A] rounded-3xl px-4 py-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#E0E0E0]">Sample Response</p>
                  <RxTriangleDown className="text-6xl text-[#999999]" />
                </div>
                <div className="text-center pb-2 text-[#E2E8F0] font-extralight">{sampleResponse}</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="lg:hidden pb-32"></div>
      {nextBeforeAnswer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-white p-6 rounded-md">
            <p className="text-center text-red-500 text-2xl">
              Please answer this question first before move to the next
              question!
            </p>
            <button
              className="block mx-auto mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
