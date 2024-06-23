import React, { useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const PositionPicker = ({
  PositionSelected,
  Positions,
  positionFocus,
  setPositionFocus,
  handlePositionChange,
}) => {
  const containerRef = useRef(null);

  const handleBlur = (e) => {
    if (!containerRef.current.contains(e.relatedTarget)) {
      setPositionFocus(false);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setPositionFocus(false)}>
      <div className="relative w-full group z-[1]" ref={containerRef}>
        <input
          type="text"
          name="Position"
          className="block pt-2.5 pb-1.5 px-2 w-full text-sm font-medium font-palanquin text-gray-900 bg-transparent border-b-2 border-gray-400 appearance-none focus:border-orange-500 focus:outline-none focus:ring-0 peer"
          onFocus={() => setPositionFocus(true)}
          onClick={() => setPositionFocus(true)}
          value={PositionSelected}
          onChange={(e) => {}}
          placeholder=" "
        />
        <label className="absolute text-sm font-medium font-palanquin text-gray-500 duration-300 scale-75 top-3 origin-left -translate-y-7 peer-focus:start-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 pointer-events-none">
          <div className="flex justify-start items-center gap-1.5">
            Applying for Position
          </div>
        </label>

        {positionFocus && (
          <div className="flex flex-col gap-0.5 absolute z-10 top-10 left-0 w-full bg-white border rounded-md shadow-md p-2">
            {Positions.map((item) => (
              <button
                key={item}
                className="w-full text-left px-3 py-1 border-2 border-transparent hover:bg-gray-100 rounded-md focus:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-opacity-50 transition-colors duration-200 ease-in-out"
                onClick={() => {
                  handlePositionChange(item);
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

export default PositionPicker;
