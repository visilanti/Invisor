"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { RxTriangleDown } from "react-icons/rx";

export default function SummaryReportCard({ summaryFeedBack }) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const summaryFeedBackData = summaryFeedBack.feedbacks;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < summaryFeedBackData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitAnswers();
    }
  };

  const submitAnswers = () => {
    router.back();
  };

  if (!summaryFeedBackData || summaryFeedBackData.length === 0) {
    return <div>Loading...</div>;
  }

  const currentFeedback = summaryFeedBackData[currentQuestionIndex];

  return (
    <>
      <div className="pt-5 lg:pt-12 px-5 lg:pl-64 lg:px-32">
        <div className="flex justify-between items-cente border-b-[1px] pb-4">
          <div>
            <p className="text-varians-vr06">{summaryFeedBack.job_title}</p>
          </div>
          <div className="flex items-center gap-5 hover:scale-105 cursor-pointer" onClick={handleNextQuestion}>
            <p className="text-[#E9E4E3]">{currentQuestionIndex < summaryFeedBackData.length - 1 ? "Next" : "Done"}</p>
            <HiArrowLongRight className="text-[#FA5F47] text-3xl" />
          </div>
        </div>
      </div>
      <div className="pt-4 px-5 lg:pl-64 lg:px-32">
        <div className="flex flex-col gap-7 md:justify-between md:flex-row">
          <div className="bg-[#E2E8F0] w-full h-fit rounded-3xl flex flex-col justify-between">
            <div className="px-10 py-10 lg:px-14 lg:py-14">
              <div>
                <p className="font-bold text-center">{currentFeedback.question}</p>
                <p className="pt-5 text-center font-extralight">{currentFeedback.answer}</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#A68C89] p-0.5 h-full">
              <div className="w-full h-full bg-[#504E5A] rounded-3xl px-4 py-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#E0E0E0]">Feedback</p>
                  <RxTriangleDown className="text-6xl text-[#999999]" />
                </div>
                <div className="text-center pb-2 text-[#E2E8F0] font-extralight">{currentFeedback.feedback}</div>
              </div>
            </div>
            {/* <div className="rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#A68C89] p-0.5 h-full">
              <div className="w-full h-full bg-[#504E5A] rounded-3xl px-4 py-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#E0E0E0]">Sample Response</p>
                  <RxTriangleDown className="text-6xl text-[#999999]" />
                </div>
                <div className="text-center pb-2 text-[#E2E8F0] font-extralight">{currentFeedback.answer_text}</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-20 hidden lg:block">
        <div className="flex justify-center items-center gap-3">
          {summaryFeedBackData.map((_, index) => (
            <div key={index} className={`w-5 h-5 rounded-full ${currentQuestionIndex === index ? "bg-[#FA5F47]" : "bg-[#999999]"}`}></div>
          ))}
        </div>
      </div>
      <div className="lg:hidden pb-32"></div>
    </>
  );
}
