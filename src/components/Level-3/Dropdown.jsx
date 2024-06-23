import React, { useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Dropdown = ({
  topic,
  name,
  value,
  Items,
  isFocused,
  setIsFocused,
  handleTopicChange,
  handleDropdownChange,
}) => {
  const containerRef = useRef(null);

  const handleBlur = (e) => {
    if (!containerRef.current.contains(e.relatedTarget)) {
      setIsFocused(false);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setIsFocused(false)}>
      <div className="relative w-full group mb-2" ref={containerRef}>
        <label htmlFor={name} className="relative">
          <input
            name={name}
            className="px-4 py-2 w-full text-sm font-medium outline-none border-2 border-gray-400 rounded-lg hover:border-gray-600 duration-150 peer focus:border-indigo-600 bg-inherit focus:outline-none focus:ring-0"
            onFocus={() => setIsFocused(true)}
            onClick={() => setIsFocused(true)}
            value={value}
            onChange={(e) => {}}
            placeholder=" "
          />
          <span className="absolute left-1 -top-0.5 px-1 text-xs font-medium tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-300 -translate-y-4 bg-white ml-2">
            {name}
          </span>
        </label>

        {isFocused && (
          <div className="flex flex-col gap-0.5 absolute z-10 top-10 left-0 w-full bg-white border rounded-md shadow-md p-2">
            {Items.map((item) => (
              <button
                key={item}
                type="button"
                className="w-full text-left px-3 py-1 border-2 border-transparent hover:bg-gray-100 rounded-md focus:bg-gray-100 focus:outline-none focus:ring-2 focus:rounded-sm focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200 ease-in-out"
                onClick={() => {
                  if (name === "Survey Topic") {
                    handleTopicChange(item);
                  } else {
                    handleDropdownChange(item, topic, name);
                  }
                  setIsFocused(false);
                }}
                onBlur={handleBlur}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
