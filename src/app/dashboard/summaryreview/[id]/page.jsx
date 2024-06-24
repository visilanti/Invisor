"use client";
import SummaryReportCard from "@/components/card/SummaryReportCard";
import { handleSummaryFeedbackById } from "@/helpers/interviewHelper";
import { useEffect, useState } from "react";

export default function SummaryReviewQuestion({ params }) {
  const [summaryData, setSummaryData] = useState(null);

  const getSummaryData = async () => {
    const response = await handleSummaryFeedbackById(params.id);
    setSummaryData(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getSummaryData();
  }, [params.id]);

  return <>{summaryData ? <SummaryReportCard summaryFeedBack={summaryData.data} /> : <div>Loading...</div>}</>;
}
