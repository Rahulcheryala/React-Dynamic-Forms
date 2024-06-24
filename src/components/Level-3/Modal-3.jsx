import React from "react";

const Modal3 = ({ inputs, values, closeModal, questions }) => {
  return (
    <div className="fixed inset-1 flex items-center justify-center bg-black bg-opacity-50 z-50 transform translate-x-[201.5%] rounded-xl">
      <div className="bg-white p-6 rounded shadow-lg w-auto min-w-[30rem] mx-auto">
        <h2 className="text-lg font-semibold mb-4">Submission Details</h2>
        <div className="grid grid-cols-[fit,20rem] grid-flow-col gap-2">
          <div className="grid grid-cols-[10rem,25rem] gap-1 border-r-2 px-4">
            {inputs.flatMap((input, index) => {
              const value = values[input];
              if (typeof value === "object") {
                // Handle nested objects
                return Object.entries(value)
                  .filter(([_, v]) => v !== "")
                  .map(([subKey, subValue], subIndex) => (
                    <React.Fragment key={`${index}-${subIndex}`}>
                      <p className="text-sm font-semibold inline-flex justify-between items-center">
                        <span className="capitalize">{subKey}</span>
                        <span>:</span>
                      </p>
                      <p className="text-sm ps-4 inline-flex justify-start items-center">
                        {subValue}
                      </p>
                    </React.Fragment>
                  ));
              } else if (value !== "") {
                // Handle top-level fields
                return (
                  <React.Fragment key={index}>
                    <p className="text-sm font-semibold inline-flex justify-between items-center">
                      <span className="capitalize">{input}</span>
                      <span>:</span>
                    </p>
                    <p className="text-sm ps-4 inline-flex justify-start items-center">
                      {value}
                    </p>
                  </React.Fragment>
                );
              }
              return []; // Return empty array for empty fields to work with flatMap
            })}
          </div>

          <div className="w-72 px-4">
            <h1 className="text-xl font-semibold mb-4">Questions</h1>
            {questions.map((question, index) => (
              <React.Fragment key={index}>
                <p className="text-xs font-normal pb-2">
                  <span className="capitalize pe-2 text-sm font-semibold">
                    Question {index + 1}:
                  </span>
                  {question}
                </p>
              </React.Fragment>
            ))}
          </div>
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

export default Modal3;
