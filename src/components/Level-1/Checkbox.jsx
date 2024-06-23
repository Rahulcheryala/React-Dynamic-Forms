import React from "react";

const Checkbox = ({ attendingWithGuest, setAttendingWithGuest }) => {
  return (
    <>
      <input
        type="checkbox"
        role="checkbox"
        id="attendingWithGuest"
        name="attendingWithGuest"
        className="h-4 w-4 appearance-none text-indigo-600 focus:ring-indigo-500 border-gray-300 border-2 rounded-full checked:bg-indigo-600 checked:border-2 focus:outline-none focus:border-2 focus:border-indigo-500 transition-colors duration-300"
        checked={attendingWithGuest}
        aria-checked={attendingWithGuest}
        onChange={(e) => setAttendingWithGuest(e.target.checked)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setAttendingWithGuest(!attendingWithGuest);
          }
        }}
      />
      <label
        htmlFor="attendingWithGuest"
        className="ml-2 block text-sm font-semibold text-gray-600"
      >
        Are you attending with a guest?
      </label>
    </>
  );
};

export default Checkbox;
