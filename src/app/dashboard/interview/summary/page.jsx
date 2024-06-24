"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function SummaryReportRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/interview");
  }, []);

  return null;
}
