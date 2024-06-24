"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import {
  BsClipboardCheck,
  BsClipboardData,
  BsPersonCheck,
  BsCalendar2Check,
} from "react-icons/bs";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import {
  handleGetFeedBackSummary1,
  handleGetStatistics,
} from "@/helpers/interviewHelper";
import DashboardHistoryCard from "../card/DashboardHistoryCard";

export default function DashboardPageComponent() {
  const router = useRouter();
  const [isEmail, setIsEmail] = useState("");
  const [historyFeedback, setIsHistoryFeedback] = useState([]);
  const [statistics, setStatistics] = useState({
    average_score: "Loading...",
    interview_count: "Loading...",
    interviews_with_answers_count: "Loading...",
  });

  const getEmail = () => {
    const email = Cookies.get("email");
    setIsEmail(email);
  };

  const getFeedback = async () => {
    const response = await handleGetFeedBackSummary1();
    // console.log(response);
    setIsHistoryFeedback(response);
  };

  const handleStartInterview = () => {
    router.push("/dashboard/interview");
  };

  useEffect(() => {
    getStatistics();
    getFeedback();
    getEmail();
  }, []);

  const getStatistics = async () => {
    const response = await handleGetStatistics();
    setStatistics(response);
  };

  return (
    <>
      {/* Topbar Dashboard */}
      <div className="px-10 lg:px-36 lg:pl-64 py-10">
        <div className="flex justify-between items-center border-b-[1px] px-3 pb-4">
          <p className="text-varians-vr06 text-sm lg:text-2xl font-semibold">
            User Dashboard
          </p>
          <div className="flex items-center gap-3">
            {/* <Image src="/avatar.png" width={50} height={50} className="w-10 lg:w-14" alt="avatar user" priority /> */}
            <p className="text-varians-vr06 text-xs lg:text-base ">{isEmail}</p>
          </div>
        </div>
        {/* Summary Score Dekstop*/}
        <div className="flex gap-20 py-10 lg:px-5">
          <div className="relative w-1/4 hidden lg:block">
            <Image
              src="/dashboard.png"
              width={300}
              height={300}
              alt="Interview"
              className="h-auto w-auto"
              priority
            />
            <div className="absolute left-0 top-1/3 w-full h-full flex items-center justify-center">
              <button
                className="flex items-center gap-2 bg-[#E2E8F0] text-[#C25F50] px-4 py-2 rounded-3xl font-semibold hover:scale-105"
                onClick={handleStartInterview}
              >
                {" "}
                <span className="text-2xl">+</span> Start Interview
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/4 bg-[#E2E8F0] px-3 py-10 rounded-3xl lg:rounded-2xl lg:px-14 lg:py-14">
            <div className="flex gap-2 items-center text-[#171717]">
              <BsClipboardCheck className="text-2xl" />
              <p className="font-semibold">Summary Score</p>
            </div>
            <div className="flex py-5 gap-2 lg:py-7 lg:gap-7">
              <div className="flex flex-col gap-3 items-center bg-primary-pr01 rounded-full py-10 text-white w-full md:rounded-2xl">
                <div className="rounded-full border border-white py-2 px-2">
                  <BsClipboardData className="text-xl lg:text-3xl" />
                </div>
                <p className="text-[10px] text-center lg:text-xl">
                  Average Score
                </p>
                <p className="text-[10px] font-semibold lg:text-base">
                  {statistics.average_score ?? "Loading..."}
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center bg-[#F5764E] rounded-full py-10 text-white w-full md:rounded-2xl">
                <div className="rounded-full border border-white py-2 px-2">
                  <BsPersonCheck className="text-xl lg:text-3xl" />
                </div>
                <p className="text-[10px] lg:text-xl">Interviews</p>
                <p className="text-[10px] font-semibold lg:text-base">
                  {statistics.interview_count ?? "Loading..."}
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center bg-[#F1F5F9] rounded-full py-10 text-[#171717] w-full md:rounded-2xl">
                <div className="rounded-full border border-[#171717] py-2 px-2">
                  <BsCalendar2Check className="text-xl lg:text-3xl" />
                </div>
                <p className="text-[10px] lg:text-xl">Answered</p>
                <p className="text-[10px] font-semibold lg:text-base">
                  {statistics.interviews_with_answers_count ?? "Loading..."}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* User History */}
        <div className="flex justify-between items-center text-varians-vr06 ">
          <p className="text-sm lg:text-2xl font-semibold">User History</p>
          <Link href="/dashboard/history">
            <div className="flex gap-1 items-center hover:scale-105 cursor-pointer">
              <p className="text-sm lg:text-base">See All History</p>
              <IoIosArrowForward className="text-base lg:text-lg" />
            </div>
          </Link>
        </div>
        <DashboardHistoryCard historyData={historyFeedback} />
        <div className="pb-20 lg:pb-0"></div>
      </div>
    </>
  );
}
