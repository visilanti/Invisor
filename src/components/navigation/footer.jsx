import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#F9E0AE] py-8 md:px-28">
      <div className="flex items-center justify-center flex-col gap-3 md:flex-row md:justify-between">
        <div>
          <div className="flex gap-4">
            <div className="py-2 px-2 rounded-full bg-[#FA5F47] hover:text-primary-white cursor-pointer">
              <FaFacebook />
            </div>
            <div className="py-2 px-2 rounded-full bg-[#FA5F47] hover:text-primary-white cursor-pointer">
              <FaTwitter />
            </div>
            <div className="py-2 px-2 rounded-full bg-[#FA5F47] hover:text-primary-white cursor-pointer">
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#000] text-xs">Kelompok 3 All Rights Reserved</p>
        </div>
        <div>
          <p className="text-[#000] text-xs">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
