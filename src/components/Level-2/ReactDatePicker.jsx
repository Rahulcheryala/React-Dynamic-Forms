import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = ({
  DateSelected,
  isDateFocused,
  setIsDateFocused,
  handleDateChange,
}) => {
  const today = new Date();
  return (
    <>
      <div className="relative">
        <label
          className={`absolute font-medium font-palanquin transition-all duration-300 ease-in-out transform origin-left ${
            isDateFocused || DateSelected
              ? DateSelected
                ? "text-gray-500 -translate-y-3 opacity-100 text-[10px] max-h-6"
                : "text-orange-500 -translate-y-3 opacity-100 text-[10px] max-h-6"
              : "text-gray-500 translate-y-3 opacity-0 text-sm max-h-0 overflow-hidden"
          }`}
        >
          Preferred Date
        </label>
      </div>
      <div
        className={`border-b-2 focus:outline-none focus:ring-0 transition-colors duration-300  
              ${isDateFocused ? "border-orange-500" : "border-gray-400"}`}
        onFocus={() => setIsDateFocused(true)}
        onBlur={() => setIsDateFocused(false)}
      >
        <DatePicker
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          className="block pt-2.5 pb-1.5 w-full text-sm font-medium text-gray-900 bg-transparent appearance-none focus:border-orange-500 focus:outline-none "
          placeholderText={isDateFocused ? "" : "Preferred Date"}
          selected={DateSelected}
          onChange={(date) => handleDateChange(date)}
          dateFormat="dd/MM/yyyy     hh:mm aa"
          minDate={new Date().setDate(new Date().getDate() + 1)}
          maxDate={new Date().setDate(new Date().getDate() + 30)}
          showTimeSelect
          timeIntervals={30}
          timeFormat="hh:mm aa"
          minTime={new Date(new Date().setHours(9, 0, 0))}
          maxTime={new Date(new Date().setHours(19, 0, 0))}
        />
      </div>
    </>
  );
};

export default ReactDatePicker;
