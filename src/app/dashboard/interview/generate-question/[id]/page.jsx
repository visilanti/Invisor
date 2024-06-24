"use client";
import GenerateQuestionCard from "@/components/card/GenerateQuestionCard";
import { handleGetQuestionById } from "@/helpers/interviewHelper";
import { useEffect, useState } from "react";

function GenerateQuestionPage({ params }) {
  const [questions, setQuestions] = useState([]);

  const getQuestion = async () => {
    const response = await handleGetQuestionById(params.id);
    setQuestions(response);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return <GenerateQuestionCard questions={questions} questionId={params.id} />;
}

export default GenerateQuestionPage;
