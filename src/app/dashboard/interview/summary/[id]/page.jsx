"use client";
import SummaryPageComponent from "@/components/pages/SummaryPageComponent";
import { handleSummaryFeedbackById } from "@/helpers/interviewHelper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SummaryReportId({ params }) {
  const router = useRouter();
  const [summaryData, setSummaryData] = useState(null);

  const getSummaryData = async () => {
    const response = await handleSummaryFeedbackById(params.id);
    setSummaryData(response.data.data);
  };

  const handleSubmit = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    getSummaryData();
  }, []);

  if (!summaryData) {
    return <p>Loading...</p>;
  }

  const { job_title, total_score, feedbacks } = summaryData;

  const totalscore = total_score;

  const formatDate = () => {
    const date = new Date();

    return `${date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })} `;
  };

  const date = formatDate();

  return (
    <>
      <SummaryPageComponent feedbacks={feedbacks} totalscore={totalscore} date={date} job_title={job_title} handleSubmit={handleSubmit} />
    </>
  );
}
