import React from "react";
import toast from "react-hot-toast";
import { IoIosWarning } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Toast = ({ toastId, missingFields }) => {
  return (
    <div
      className={`${
        toastId.visible ? "animate-enter" : "animate-leave"
      } max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 pt-0.5">
            <IoIosWarning className="text-[#E3A008]" size={18} />
          </div>
          <div className="ml-3 flex-1">
            <div className="text-sm font-medium text-[#E3A008]">
              Please fill
              <p className="capitalize inline mx-1">
                {missingFields.join(", ")}
              </p>
              {missingFields.length === 1 ? "field" : "fields"}
            </div>
          </div>
          <button
            onClick={() => toast.dismiss(toastId.id)}
            className="w-auto border-2 border-transparent hover:border-gray-400 rounded-full p-1 items-center justify-center text-sm font-medium text-[#E3A008] focus:outline-none "
          >
            <IoClose size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
