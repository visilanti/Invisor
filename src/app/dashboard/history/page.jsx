"use client";
import HistoryPageComponent from "@/components/pages/HistoryPageComponent";
import { handleGetAllFeedbackSummary } from "@/helpers/interviewHelper";
import { useEffect, useState } from "react";

export default function History() {
  const [allSummaryFeedback, setIsAllSummaryFeedback] = useState(null);

  const getAlSummaryFeedback = async () => {
    const response = await handleGetAllFeedbackSummary();
    // console.log(response);
    setIsAllSummaryFeedback(response);
  };

  useEffect(() => {
    getAlSummaryFeedback();
  }, []);

  return (
    <>
      <HistoryPageComponent summaryData={allSummaryFeedback} />
    </>
  );
}
