import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Illustration from "../../assets/Form-1.png";
import FormInputType1 from "./FormInputType1";
import Modal1 from "./Modal-1";
import Checkbox from "./Checkbox";
import Toast from "./Toast";

const Form1 = () => {
  const [values, setValues] = useState({
    Name: "",
    Age: "",
    Email: "",
    "Guest Name": "",
  });
  const inputs = Object.keys(values);
  const [attendingWithGuest, setAttendingWithGuest] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!attendingWithGuest) {
      setValues({ ...values, "Guest Name": "" });
    }
  }, [attendingWithGuest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !values.Name ||
      !values.Age ||
      !values.Email ||
      (attendingWithGuest && !values["Guest Name"])
    ) {
      const requiredFields = ["Name", "Age", "Email"];
      if (attendingWithGuest) {
        requiredFields.push("Guest Name");
      }
      const missingFields = requiredFields.filter((field) => !values[field]);

      if (missingFields.length > 0) {
        toast.custom((t) => (
          <Toast toastId={t} missingFields={missingFields} />
        ));
      }
      return;
    }
    setIsModalOpen(true);
    console.log(values);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <section className="w-full h-full rounded-xl shadow-lg bg-[#ba5e8f] flex items-center justify-between">
        {/* Illustration on the left */}
        <div className="p-4 rounded-xl w-full">
          <img
            src={Illustration}
            alt="Illustration"
            className="object-cover block mx-auto"
          />
        </div>

        {/* Form section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 px-16 rounded-xl h-full w-full"
        >
          <h2 className="text-3xl font-bold mb-8 font-montserrat">
            Event Registration
          </h2>

          {/* Name and Age fields */}
          <div className="grid grid-cols-2 gap-x-4 mb-4">
            <FormInputType1
              label="Name"
              type="text"
              name="Name"
              minLength="3"
              maxLength="24"
              pattern="^[A-Za-z][A-Za-z\s]{1,23}$"
              value={values.Name}
              onChange={onChange}
              errorMessage={
                (values.Name.length < 3 &&
                  "Name must be at least 3 characters") ||
                (/\d/.test(values.Name) && "Name shouldn't contain digits") ||
                (/[^a-zA-Z0-9\s]/.test(values.Name) &&
                  "Name shouldn't contain any special characters")
              }
            />
            <FormInputType1
              label="Age"
              type="tel"
              name="Age"
              minLength="1"
              maxLength="2"
              value={values.Age}
              onChange={onChange}
              pattern="^(?!0+$)\d{1,2}$"
              errorMessage={
                !/^(?!0+$)\d{1,2}$/.test(values.Age) &&
                "Age must be a positive number"
              }
            />
          </div>

          {/* Email field */}
          <div className="mb-4">
            <FormInputType1
              label="Email"
              type="email"
              name="Email"
              minLength="6"
              maxLength="40"
              value={values.Email}
              onChange={onChange}
              errorMessage="Email must be a valid email address"
            />
          </div>

          {/* Conditional guest fields */}
          <div
            className={`transition-all duration-300 ease-in-out transform ${
              attendingWithGuest
                ? "translate-y-0 opacity-100 max-h-12"
                : "-translate-y-full opacity-0 pointer-events-none max-h-0 overflow-hidden"
            }`}
          >
            <FormInputType1
              tabIndex={attendingWithGuest ? 0 : -1}
              label="Guest Name"
              type="text"
              name="Guest Name"
              minLength="3"
              maxLength="24"
              pattern="^[A-Za-z][A-Za-z\s]{1,23}$"
              value={values["Guest Name"]}
              onChange={onChange}
              errorMessage={
                (values["Guest Name"].length < 3 &&
                  "Name must be at least 3 characters") ||
                (/\d/.test(values["Guest Name"]) &&
                  "Name shouldn't contain digits") ||
                (/[^a-zA-Z0-9\s]/.test(values["Guest Name"]) &&
                  "Name shouldn't contain any special characters")
              }
            />
          </div>

          {/* Checkbox for attending with guest */}
          <div className={`my-2 flex items-center accent-indigo-500`}>
            <Checkbox
              attendingWithGuest={attendingWithGuest}
              setAttendingWithGuest={setAttendingWithGuest}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className={`bg-indigo-500 text-white py-2 px-4 mt-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 `}
          >
            Register
          </button>
        </form>

        {/* Modal */}
        {isModalOpen && (
          <Modal1 closeModal={closeModal} inputs={inputs} values={values} />
        )}
      </section>
    </>
  );
};

export default Form1;
