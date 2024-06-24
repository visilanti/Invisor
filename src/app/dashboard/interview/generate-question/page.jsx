"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GenerateQuestionRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/interview");
  }, []);

  return null;
}
