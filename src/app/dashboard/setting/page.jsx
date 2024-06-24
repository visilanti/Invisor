"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { handleLogout } from "@/helpers/authHelper";
import SettingPageComponent from "@/components/pages/SettingPageComponent";
import LogoutModal from "@/components/modal/LogoutModal";

export default function Setting() {
  const router = useRouter();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLogoutModalOpen(true);
  };

  const onClickLogout = async () => {
    setIsLoading(true);
    if (await handleLogout()) {
      router.push("/");
    }
    setIsLoading(false);
    setIsLogoutModalOpen(false);
  };
  return (
    <>
      <SettingPageComponent props={{ handleSubmit: handleSubmit }} />
      <LogoutModal props={{ isOpen: isLogoutModalOpen, onClose: () => setIsLogoutModalOpen(false), isLoading: isLoading, onClickLogout: onClickLogout }} />
    </>
  );
}
