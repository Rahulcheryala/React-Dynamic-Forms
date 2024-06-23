import React from "react";

const Modal1 = ({ inputs, values, closeModal }) => {
  return (
    <div className="fixed inset-1 flex items-center justify-center bg-black bg-opacity-40 z-50 rounded-xl">
      <div className="bg-white p-6 rounded shadow-lg w-auto min-w-[26rem] mx-auto">
        <h2 className="text-xl font-semibold mb-4">Submission Details</h2>
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
                    {input === "Age" ? values[input] + " years" : values[input]}
                  </p>
                </React.Fragment>
              )
          )}
        </div>

        <div className="flex w-full">
          <button
            tabIndex={-1}
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

export default Modal1;
