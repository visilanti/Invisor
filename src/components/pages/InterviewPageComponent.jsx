"use client";
import { handleGenerateQuestion } from "@/helpers/interviewHelper";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InterviewPageComponent() {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [customJob, setCustomJob] = useState(false);

  const handleJobSelect = (title) => {
    if (title === "Custom Jobdesc") {
      setJobTitle("");
      setCustomJob(true);
    } else {
      setJobTitle(title);
      setCustomJob(false);
    }
  };

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadFormData = {
      job_title: jobTitle,
      job_description: jobDescription,
    };

    const response = await handleGenerateQuestion(uploadFormData);
    router.push(`/dashboard/interview/generate-question/${response}`);
  };

  return (
    <>
      <div className="px-10 lg:px-72 py-10 text-varians-[#000]">
        <div className="flex justify-center flex-col">
          <p className="text-center text-2xl">Select Job Description</p>
          <div className="hidden lg:block">
            <div className="mt-14 mb-10 flex flex-wrap justify-center gap-5">
              {["Data Analyst", "Business Analyst", "Software Engineer", "Marketing Specialist", "UI/UX Designer", "Custom Jobdesc"].map((title) => (
                <button
                  key={title}
                  className={`border border-[#FFF] rounded-full py-1 px-4 hover:bg-[#FFF] flex-grow-0 flex-shrink-0 flex-basis-0 w-52 ${
                    jobTitle === title || (title === "Custom Jobdesc" && customJob) ? "bg-[#65372F] text-white" : ""
                  }`}
                  onClick={() => handleJobSelect(title)}>
                  {title}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <div className="mt-5 mb-8 flex flex-wrap justify-center gap-5 text-[10px]">
              {["Data Analyst", "Business Analyst", "Software Engineer", "Marketing Specialist", "UI/UX Designer", "Custom Jobdesc"].map((title) => (
                <button
                  key={title}
                  className={`border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-20 ${
                    jobTitle === title || (title === "Custom Jobdesc" && customJob) ? "bg-[#F37845] text-white" : ""
                  }`}
                  onClick={() => handleJobSelect(title)}>
                  {title}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 justify-center text-black">
              <input type="text" id="job_title" name="job_title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="w-full p-2 rounded-full border-4 border-[#65372F] lg:p-6" placeholder="Job Detail" />
              <textarea
                name="job_description"
                id="job_description"
                value={jobDescription}
                onChange={handleJobDescriptionChange}
                cols="1"
                rows="1"
                className="w-full pb-60 p-2 rounded-3xl border-4 border-[#65372F] lg:h-0 lg:pb-52 lg:p-6 overflow-y-hidden"
                placeholder="Detail Jobdesc"></textarea>
            </div>
            <div className="mt-5 mb-20 flex justify-center lg:mb-0">
              <button type="submit" className="py-3 px-7 rounded-full bg-gradient-to-b from-[#F27C45] to-[#FF5049] lg:border hover:scale-105">
                {" "}
                Generate Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
