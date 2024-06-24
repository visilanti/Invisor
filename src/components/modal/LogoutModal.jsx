import { useEffect } from "react";
import { PiWarningBold } from "react-icons/pi";

export default function LogoutModal({ props }) {
  const isLoading = props.isLoading;
  const isOpen = props.isOpen;
  const onClose = props.onClose;

  const onClickLogout = props.onClickLogout;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".modal-content")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg modal-content">
        <div className="flex items-center gap-5">
          <div className="py-3 px-3 rounded-full bg-red-100">
            <PiWarningBold className="text-red-600 text-3xl" />
          </div>
          <div className="pt-5">
            <p className="font-bold text-xl text-gray-700">Logging Out</p>
            <p className="text-sm md:text-base text-gray-500">Are you sure you want to log out?</p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="px-4 py-2 mr-2 bg-gray-300 rounded-lg">
            Cancel
          </button>
          <button onClick={onClickLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg">
            {isLoading ? "Loading..." : "Log out"}
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
