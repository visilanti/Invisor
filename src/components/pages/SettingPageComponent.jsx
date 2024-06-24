import { IoIosArrowForward } from "react-icons/io";
import { TbLogout } from "react-icons/tb";

export default function SettingPageComponent({ props }) {
  const handleSubmit = props.handleSubmit;

  return (
    <>
      <div className="flex flex-col gap-10 px-10 py-10 lg:px-64 lg:py-72">
        <div className="w-full bg-[#EADBC8] rounded-lg">
          <div className="px-5 py-3 text-varians-[#000]">
            <p className="mb-5 font-bold text-xl lg:text-2xl">Account</p>
            <div className="flex flex-col gap-5">
              {/* <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <FaRegUser className="text-2xl" />
                  <p>Nickname</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div>
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <FaRegUserCircle className="text-2xl" />
                  <p>Avatar</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div>
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <MdOutlinePrivacyTip className="text-2xl" />
                  <p>Security</p>
                </div>
                <label className="relative cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FA5F47]"></div>
                </label>
              </div>
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <IoMdNotificationsOutline className="text-2xl" />
                  <p>Notifications</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div> */}
              <button onClick={handleSubmit} className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-6">
                  <TbLogout className="ml-1 text-2xl" />
                  <p>Log out</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-full bg-[#36343C] rounded-lg">
          <div className="px-5 py-3 text-varians-vr06">
            <p className="mb-5 font-bold text-xl lg:text-2xl">About</p>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <FaClockRotateLeft className="text-2xl" />
                  <p>Version</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div>
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <RiFileEditLine className="text-2xl" />
                  <p>Feedback</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div>
              <div className="flex justify-between items-center lg:px-5 cursor-pointer">
                <div className="flex gap-7">
                  <MdOutlinePrivacyTip className="text-2xl" />
                  <p>Privacy</p>
                </div>
                <IoIosArrowForward className="text-xl" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
