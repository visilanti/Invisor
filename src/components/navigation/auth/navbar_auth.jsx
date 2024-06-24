import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";

export default function NavbarAuth({ text, link }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-10 px-7 flex justify-end gap-6 items-center bg-white text-varians-vr06 md:px-14 shadow-lg">
      <Link href={link} className="flex gap-6 items-center cursor-pointer">
        <CiGlobe className="text-xl" />
        <p className="font-bold">{text}</p>
      </Link>
      <Link href="/" className="text-sm font-bold py-3 px-5 rounded-md bg-[#FA5F47] flex items-center gap-1 hover:scale-105">
        Home
        <span>
          <MdArrowOutward className="font-bold" />
        </span>
      </Link>
    </div>
  );
}
