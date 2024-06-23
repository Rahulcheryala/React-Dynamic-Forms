import React from "react";
import { IoClose } from "react-icons/io5";

const Toast = ({ warning, setWarning }) => {
  return (
    <div
      className={`flex max-w-md gap-2 absolute top-2 right-2 items-center py-2 px-4 mb-4 text-sm rounded-lg bg-gray-800 text-yellow-300 shadow-md transition-all duration-500 ease-in-out transform ${
        warning ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div className="w-fit">{warning}</div>
      <button
        onClick={() => setWarning("")}
        className="w-auto border-2 border-transparent hover:border-gray-400 rounded-full p-1 items-center justify-center text-sm font-medium text-yellow-300 focus:outline-none"
      >
        <IoClose size={18} />
      </button>
    </div>
  );
};

export default Toast;
