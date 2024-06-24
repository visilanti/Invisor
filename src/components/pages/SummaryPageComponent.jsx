import { GoClock } from "react-icons/go";

export default function SummaryPageComponent({ feedbacks, totalscore, job_title, date, handleSubmit }) {
  return (
    <>
      {/* Desktop Mode */}
      <div className="pt-5 px-5 lg:pt-8 lg:pl-64 lg:px-32 hidden lg:block">
        <p className="text-varians-[#000] text-xl">Summary Report</p>
        <div className="mt-5 w-full bg-[#E2E8F0] rounded-2xl">
          <div className="flex justify-between items-center gap-5 lg:px-14 lg:py-10">
            <div className="w-full flex flex-col gap-5">
              {feedbacks.map((feedback, index) => (
                <div key={feedback.id} className="flex flex-col gap-3 bg-[#3F3E47] px-4 py-5 rounded-xl text-varians-vr06">
                  {/* Question */}
                  <p className="text-center text-sm">{feedback.question}</p>
                  {/* Feedback */}
                  <p className="text-[11px] text-center font-extralight">{feedback.answer}</p>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-5 items-center">
              {/* Job Title */}
              <p className="font-bold text-2xl w-72 text-center">{job_title}</p>
              <div className="flex gap-3 text-varians-vr00 items-center">
                <GoClock className="text-lg" />
                {/* Date Time Now */}
                <p className="text-sm">{date}</p>
              </div>
              <div className="flex flex-col gap-4 items-center py-16 px-20 bg-[#FA5F47] rounded-[3rem] text-white">
                <p className="text-xl">Summary Score</p>
                {/* Total Score */}
                <p className="font-bold text-6xl">{totalscore ?? 0}</p>
              </div>
              <button className="py-2 px-6 bg-gradient-to-b from-[#F27C45] to-[#FF5049] text-varians-vr06 rounded-full hover:scale-105" onClick={handleSubmit}>
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Mode */}
      <div className="lg:hidden">
        <p className="pt-10 pb-5 text-center text-varians-vr06">Summary Report</p>
        <div className="bg-[#E2E8F0] mx-5 pt-6 pb-5 px-5 rounded-[3rem]">
          <div className="grid grid-cols-2 gap-1 items-center">
            <div className="flex flex-col gap-2">
              {/* Job Title */}
              <p className="text-center font-bold text-sm">{job_title}</p>
              <div className="flex gap-2 text-[#999999] items-center justify-center">
                <GoClock className="text-[10px]" />
                {/* Date Time Now */}
                <p className="text-[10px]">{date}</p>
              </div>
            </div>
            <div className="bg-[#FA5F47] rounded-[2rem] flex flex-col gap-2 py-8 justify-center items-center text-varians-vr06">
              <p>Summary Score</p>
              {/* Total Score */}
              <p className="text-2xl font-semibold">{totalscore}</p>
            </div>
          </div>
          <div className="py-4 flex flex-col gap-3">
            {feedbacks.map((feedback, index) => (
              <div key={feedback.id} className="flex flex-col gap-3 bg-[#3F3E47] py-4 px-4 rounded-3xl text-varians-vr06">
                {/* Question */}
                <p className="text-xs text-center">{feedback.question}</p>
                {/* Feedback */}
                <p className="text-[10px] font-extralight text-center">{feedback.answer}</p>
              </div>
            ))}
            <div className="flex justify-center py-3">
              <button className="py-2 px-8 bg-gradient-to-b from-[#F27C45] to-[#FF5049] text-varians-vr06 rounded-full hover:scale-105" onClick={handleSubmit}>
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-36 lg:hidden"></div>
    </>
  );
}
