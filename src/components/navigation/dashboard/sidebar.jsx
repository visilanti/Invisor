"use client";
import { useState } from "react";
import { MdOutlineDashboard, MdOutlineSettings, MdOutlinePeopleAlt } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="fixed w-32 h-full bg-[#40351E] text-[#FA5F47] text-4xl rounded-tr-3xl rounded-br-3xl hidden lg:block">
      {/* Logo */}
      <div className="py-20 p-4">
        <img src="/logo.png" alt="Logo" className="w-full" />
      </div>

      {/* Menu Items */}
      <div className="mt-16 flex flex-col justify-center items-center space-y-4 gap-5">
        <MenuItem icon="home" href="/dashboard" onClick={() => handleMenuClick("home")} />
        <MenuItem icon="inbox" href="/dashboard/interview" onClick={() => handleMenuClick("inbox")} />
        <MenuItem icon="settings" href="/dashboard/setting" onClick={() => handleMenuClick("settings")} />
      </div>
    </div>
  );
}

function MenuItem({ icon, href, onClick }) {
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
      <div className={`flex items-center justify-center p-4 rounded-xl cursor-pointer ${isActive ? "bg-gradient-to-r from-[#F85C47] to-[#FA8575] text-varians-vr06" : ""}`} onClick={onClick}>
        <span>{IconComponent}</span>
      </div>
    </Link>
  );
}
