import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import "./App.css";
import Form1 from "./components/Level-1/Form-1";
import Form2 from "./components/Level-2/Form-2";
import Form3 from "./components/Level-3/Form-3";

export default function App() {
  const [currentForm, setCurrentForm] = useState(1);
  const forms = ["Form-1", "Form-2", "Form-3"];

  const handleNext = () => {
    setCurrentForm((prevForm) => (prevForm < 3 ? prevForm + 1 : prevForm));
  };

  const handlePrev = () => {
    setCurrentForm((prevForm) => (prevForm > 1 ? prevForm - 1 : prevForm));
  };

  return (
    <>
      <main className="min-h-screen w-full grid bg-gray-50">
        <div className="h-full w-full grid grid-flow-row grid-rows-[min-content_1fr]">
          <nav className="w-1/2 max-w-screen-2xl mx-auto pt-8 pb-4">
            <ol className="flex items-center justify-between w-full relative isolate">
              <div className="h-1 bg-gray-300 w-[95%] absolute left-1/2 transform -translate-x-1/2 top-6 -z-10"></div>
              {forms.map((form, index) => (
                <li
                  key={index}
                  onClick={() => setCurrentForm(index + 1)}
                  className={`flex flex-col w-fit items-center cursor-pointer transition-colors duration-200 active:text-indigo-600 ${
                    currentForm === index + 1
                      ? "text-indigo-400"
                      : "text-gray-300"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 transition-colors duration-200 active:bg-indigo-600 ${
                      currentForm === index + 1
                        ? "bg-indigo-400"
                        : "bg-gray-300"
                    }`}
                  >
                    <FaWpforms className="text-white" />
                  </span>
                  <span className="font-bold text-xs">{form}</span>
                </li>
              ))}
            </ol>
          </nav>

          <section className="h-auto max-h-[40rem] w-fit max-w-screen-2xl mx-auto py-8 grid grid-flow-col grid-cols-[12rem_1fr_12rem] justify-between items-center gap-8 overflow-hidden isolate">
            <button
              onClick={handlePrev}
              className="w-fit bg-gray-200 p-2 rounded-full z-10 ms-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <FaChevronLeft />
            </button>
            <div
              className={`flex h-full w-full transition-all duration-700 ease-in-out`}
              style={{
                transform: `translateX(${-(currentForm - 1) * 100}%)`,
              }}
            >
              <div
                className={`h-full w-full flex-shrink-0 flex justify-center items-center transition-opacity duration-300 ${
                  currentForm === 1 ? "opacity-100" : "opacity-0"
                } `}
              >
                <Form1 />
              </div>
              <div
                className={`h-full w-full flex-shrink-0 flex justify-center items-center transition-opacity duration-300 ${
                  currentForm === 2 ? "opacity-100" : "opacity-0"
                } `}
              >
                <Form2 />
              </div>
              <div
                className={`h-full w-full flex-shrink-0 flex justify-center items-center transition-opacity duration-300 ${
                  currentForm === 3 ? "opacity-100" : "opacity-0"
                } `}
              >
                <Form3 />
              </div>
            </div>
            <button
              onClick={handleNext}
              className="w-fit bg-gray-200 p-2 rounded-full z-10 me-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <FaChevronRight />
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
