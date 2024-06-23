import React, { useState } from "react";
import { IoAlert } from "react-icons/io5";

const FormInputType2 = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    setIsValid(!props.errorMessage);
  };

  return (
    <div className="relative w-full group">
      <input
        tabIndex={props.tabIndex}
        type={props.type}
        name={props.name}
        minLength={props.minLength}
        maxLength={props.maxLength}
        value={props.value}
        onChange={props.onChange}
        pattern={props.pattern}
        className="block pt-2.5 pb-1.5 px-1 w-full text-sm font-medium font-montserrat text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none focus:border-orange-500 focus:outline-none focus:ring-0 peer"
        placeholder=" "
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <label className="absolute text-sm font-medium font-palanquin text-gray-500 duration-300 scale-75 top-3 origin-left -translate-y-7 peer-focus:start-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 pointer-events-none">
        <div className="w-full">{props.label}</div>
      </label>

      {props.name === "Experience" && (
        <span
          className={`absolute text-sm font-medium text-gray-900 top-[10px] transition-all duration-300 -z-10 ${
            props.value.length === 1 ? "left-4" : "left-6"
          } ${
            isFocused && !isValid
              ? "opacity-100 transform translate-x-0"
              : isValid
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-full"
          }`}
        >
          years
        </span>
      )}

      <div className="absolute left-0 top-full w-full px-2 py-1 flex items-start gap-x-0.5 bg-white text-red-500 text-[10px] font-semibold rounded-md shadow-md z-10 opacity-0 invisible transition-all duration-200 ease-in-out peer-invalid:opacity-100 peer-invalid:visible">
        <IoAlert className="inline text-lg w-fit mt-0.5" size={12} />
        <span className="text-left w-full">{props.errorMessage}</span>
      </div>
    </div>
  );
};

export default FormInputType2;
