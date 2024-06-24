import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
export default function ModalNavbarMobile({ isOpen, onClose }) {
  return (
    <Transition
      as={Fragment}
      show={isOpen}
      enter="transform transition duration-[400ms]"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transform duration-[400ms] transition ease-in-out"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full">
      <div className="fixed inset-0">
        <div className="bg-[#F5764E] w-full h-full px-10 py-10 overflow-auto text-varians-vr06" onClick={(e) => e.stopPropagation()}>
          <RxCross2 onClick={onClose} className="text-4xl" />
          <nav className="flex flex-col mt-14 gap-14 text-2xl">
            <Image src="/logo.png" width={500} height={500} alt="logo" className="w-72 mb-5" priority />
            <ul className="cursor-pointer">
              <li>
                <Link href="#home">Home</Link>
              </li>
            </ul>
            <ul className="cursor-pointer">
              <li>
                <Link href="#features">Features</Link>
              </li>
            </ul>
            <ul className="cursor-pointer">
              <li>
                <Link href="#tutorials">Tutorials</Link>
              </li>
            </ul>
            <ul className="cursor-pointer">
              <li>Reviews</li>
            </ul>
            <div className="flex gap-5 text-sm">
              <Link href="/auth/signup" className="py-2 px-4 border-4 border-varians-vr06 rounded-full shadow-xl hover:scale-105">
                Get Started
              </Link>
              <Link href="/auth" className="py-2 px-10 bg-gradient-to-b from-[#F27C45] to-[#FF5049] rounded-full shadow-xl hover:scale-105">
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </Transition>
  );
}
