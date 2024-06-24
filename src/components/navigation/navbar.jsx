"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import ModalNavbarMobile from "./ModalNavbarMobile";
export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="py-2 px-24 text-varians-pr00 hidden lg:block bg-[#F9E0AE]">
        <div className="flex justify-between items-center">
          <Image src="/logo.png" width={300} height={300} alt="logo" className="w-auto" priority />
          <div className="flex items-center gap-7">
            <p className="cursor-pointer text-lg">
              <Link href="#home">Home</Link>
            </p>
            <p className="cursor-pointer text-lg">
              <Link href="#features">Features</Link>
            </p>
            <p className="cursor-pointer text-lg">
              <Link href="#tutorials">Tutorials</Link>
            </p>
            <div className="flex gap-5">
              <Link href="/auth/signup" className="py-3 px-5 rounded-xl border-2 border-[#F37845] text-xs font-bold hover:bg-[#F37845]">
                Get Started
              </Link>
              <Link href="/auth" className="py-3 px-8 rounded-xl bg-gradient-to-b from-[#F5A179] to-[#FF5049] text-xs font-bold hover:scale-105">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 px-5 lg:hidden">
        <div className="flex justify-between items-center">
          <div>
            <Image src="/logo.png" width={150} height={150} alt="logo" priority />
          </div>
          <div>
            <button onClick={() => setIsModalOpen(true)} className="bg-secondary-sc04 py-2 px-2 rounded-full absolute top-5 right-5">
              <IoMdMenu className="text-varians-vr06 text-xl" />
            </button>
          </div>
        </div>
      </div>
      <ModalNavbarMobile isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
