import React, { useState } from "react";
import { IoAlert } from "react-icons/io5";

const FormInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    props.errorMessage.length > 0 ? setIsValid(false) : setIsValid(true);
  };
  return (
    <div className="relative w-full group">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <input
        id={props.name}
        tabIndex={props.tabIndex}
        type={props.type}
        name={props.name}
        minLength={props.minLength}
        maxLength={props.maxLength}
        pattern={props.pattern}
        value={props.value}
        onChange={props.onChange}
        className="mt-0 pt-1 outline-none block w-full border-b-2 border-b-gray-300 focus:border-b-indigo-500 focus:outline-none transition-colors duration-150 peer bg-transparent"
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      {props.name === "Age" && (
        <span
          className={`absolute text-md text-gray-900 bottom-0.5 transition-all duration-300 pointer-events-none ${
            props.value.length === 1 ? "left-3" : "left-[1.375rem]"
          } ${
            isFocused && !isValid
              ? "opacity-100 transform translate-x-0"
              : isValid
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-full"
          }`}
        >
          {props.value === "1" ? "year" : "years"}
        </span>
      )}

      <div className="absolute left-0 top-full mt-1 w-full px-2 py-1 grid grid-cols-[2ch,1fr] grid-flow-col gap-x-0.5 bg-white text-red-500 text-[10px] font-semibold rounded-md shadow-md z-10 opacity-0 invisible transition-all duration-300 ease-in-out -translate-y-full peer-invalid:opacity-100 peer-invalid:visible peer-invalid:translate-y-0">
        <IoAlert className="inline text-lg w-fit mt-0.5" size={12} />
        <span className="text-left w-full">{props.errorMessage}</span>
      </div>
    </div>
  );
};

export default FormInput;
