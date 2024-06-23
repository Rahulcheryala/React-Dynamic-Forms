import React from "react";

const FormInputType3 = (props) => {
  return (
    <div className="relative w-full mb-2">
      <label htmlFor={props.name} className="relative">
        <input
          tabIndex={props.tabIndex}
          type={props.type}
          name={props.name}
          minLength={props.minLength}
          maxLength={props.maxLength}
          onChange={props.onChange}
          className="px-4 py-2 w-full text-sm font-medium outline-none border-2 border-gray-400 rounded-lg hover:border-gray-600 transition-colors duration-200 focus:border-indigo-600 bg-inherit focus:outline-none focus:ring-0 peer"
        />
        <span className="absolute left-0 -top-0.5 px-1 text-xs font-medium tracking-wide rounded-md transition-colors duration-200 peer-focus:text-indigo-600 pointer-events-none -translate-y-4 bg-white ml-3">
          {props.label}
        </span>
      </label>
    </div>
  );
};

export default FormInputType3;
