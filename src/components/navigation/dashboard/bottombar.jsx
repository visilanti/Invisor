"use client";
import { useState } from "react";
import { MdOutlineDashboard, MdOutlineSettings, MdOutlinePeopleAlt } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Bottombar() {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden">
      <div className="w-full h-20 bg-[#40351E] text-[#FA5F47] text-4xl rounded-tl-3xl rounded-tr-3xl flex justify-center ">
        <div className="flex gap-10 justify-center items-center">
          <MenuItem icon="home" active={activeMenu === "home"} href="/dashboard" onClick={() => handleMenuClick("home")} />
          <MenuItem icon="inbox" active={activeMenu === "inbox"} href="/dashboard/interview" onClick={() => handleMenuClick("inbox")} />
          <MenuItem icon="settings" active={activeMenu === "settings"} href="/dashboard/setting" onClick={() => handleMenuClick("settings")} />
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, active, href, onClick }) {
  const pathname = usePathname();
  const getIcon = (iconName) => {
    switch (iconName) {
      case "home":
        return <MdOutlineDashboard />;
      case "inbox":
        return <MdOutlinePeopleAlt />;
      case "settings":
        return <MdOutlineSettings />;
      default:
        return null;
    }
  };
  const IconComponent = getIcon(icon);
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <div className={`flex items-center justify-center py-2 px-2 rounded-2xl  cursor-pointer ${isActive ? "bg-gradient-to-r from-[#F85C47] to-[#FA8575] text-varians-vr06" : ""}`} onClick={onClick}>
        <span>{IconComponent}</span>
      </div>
    </Link>
  );
}
