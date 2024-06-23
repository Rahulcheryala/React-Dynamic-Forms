import React from "react";

const Modal2 = ({ inputs, values, closeModal }) => {
  return (
    <div className="fixed inset-1 flex items-center justify-center bg-black bg-opacity-50 z-50 transform translate-x-[100.75%] rounded-xl">
      <div className="bg-white p-6 rounded shadow-lg w-auto min-w-[30rem] mx-auto">
        <h2 className="text-lg font-semibold mb-4">Submission Details</h2>
        <div className="grid grid-cols-[8rem,1fr] gap-1 space-y-2">
          {inputs.map(
            (input, index) =>
              values[input] && (
                <React.Fragment key={index}>
                  <p className="text-sm font-semibold inline-flex justify-between items-end">
                    <span className="capitalize">{input}</span>
                    <span>:</span>
                  </p>
                  <p className="text-sm ps-4">
                    {input === "Preferred Date"
                      ? values["Preferred Date"].toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })
                      : input === "Skills"
                      ? values[input] && values[input].length > 0
                        ? values[input].join(", ")
                        : "None"
                      : input === "Experience"
                      ? values[input] + " years"
                      : values[input]}
                  </p>
                </React.Fragment>
              )
          )}
        </div>

        <div className="flex w-full">
          <button
            onClick={closeModal}
            className="mt-4 mx-auto bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
