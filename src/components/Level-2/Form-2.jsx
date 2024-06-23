import React, { useEffect, useState } from "react";
import Illustration from "../../assets/Form-2.png";
import FormInputType2 from "./FormInputType2";
import PositionPicker from "./PositionPicker";
import ReactDatePicker from "./ReactDatePicker";
import Toast from "./Toast";
import Modal2 from "./Modal-2";

const Form2 = () => {
  const [values, setValues] = useState({
    "First Name": "",
    "Last Name": "",
    Email: "",
    "Phone Number": "",
    Position: "",
    Experience: "",
    "Portfolio Link": "",
    Skills: [],
    "Preferred Date": "",
  });
  const inputs = Object.keys(values);
  const Positions = ["Developer", "Designer", "Manager"];
  const Skills = ["React", "JavaScript", "CSS", "Python", "Next", "Express"];
  const [positionFocus, setPositionFocus] = useState(false);
  const [isExpVisible, setIsExpVisible] = useState(false);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isDateFocused, setIsDateFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handlePositionChange = (pos) => {
    setValues({
      ...values,
      Position: pos,
    });
    setPositionFocus(false);
  };

  const handleDateChange = (date) => {
    setValues({
      ...values,
      ["Preferred Date"]: date,
    });
    setIsDateFocused(false);
  };

  const handleSkillChange = (skill) => {
    if (values.Skills.includes(skill)) {
      setValues({
        ...values,
        Skills: values.Skills.filter((item) => item !== skill),
      });
    } else {
      setValues({
        ...values,
        Skills: [...values.Skills, skill],
      });
    }
  };

  useEffect(() => {
    setIsExpVisible(Positions.includes(values.Position));
    setIsPortfolioVisible(values.Position === Positions[1]);
  }, [values.Position]);

  useEffect(() => {
    if (warning) {
      const timer = setTimeout(() => {
        setWarning("");
      }, 4000); // Dismiss after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [warning]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWarning("");
    if (
      !values["First Name"] ||
      !values["Last Name"] ||
      !values.Email ||
      !values["Phone Number"] ||
      !values.Position ||
      !values["Preferred Date"] ||
      (isExpVisible && !values.Experience) ||
      (isPortfolioVisible && !values["Portfolio Link"])
    ) {
      const requiredFields = [
        "First Name",
        "Last Name",
        "Email",
        "Phone Number",
        "Position",
        "Preferred Date",
        "Skills",
      ];
      if (isExpVisible) {
        requiredFields.push("Experience");
      }
      if (isPortfolioVisible) {
        requiredFields.push("Portfolio Link");
      }
      const missingFields = requiredFields.filter((field) => !values[field]);
      console.log(missingFields);

      if (missingFields.length > 0) {
        setWarning(
          `Please fill ${missingFields.join(", ")} ${
            missingFields.length === 1 ? "field" : "fields"
          }`
        );
      }
      return;
    }
    if (!isPortfolioVisible) {
      delete values["Portfolio Link"];
    }
    setIsModalOpen(true);
    console.log(values);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="w-full h-full rounded-xl shadow-lg bg-[#ffb133] flex items-center justify-between relative">
        {/*Custom Warning Toast */}
        <Toast warning={warning} setWarning={setWarning} />

        {/* Form section */}
        <form
          className="bg-white py-8 px-16 rounded-xl h-full w-full"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6">Job Application Form</h2>

          {/* First Name and Last Name fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <FormInputType2
              label="First Name"
              type="text"
              name="First Name"
              minLength="3"
              maxLength="20"
              pattern="^[A-Za-z][A-Za-z\s]{1,19}$"
              value={values["First Name"]}
              onChange={handleChange}
              errorMessage={
                (values["First Name"].length < 3 &&
                  "Name must be at least 3 characters") ||
                (/\d/.test(values["First Name"]) &&
                  "Name shouldn't contain digits") ||
                (/[^a-zA-Z0-9\s]/.test(values["First Name"]) &&
                  "Name shouldn't contain any special characters")
              }
            />
            <FormInputType2
              label="Last Name"
              type="text"
              name="Last Name"
              minLength="3"
              maxLength="20"
              pattern="^[A-Za-z][A-Za-z\s]{1,19}$"
              value={values["Last Name"]}
              onChange={handleChange}
              errorMessage={
                (values["Last Name"].length < 3 &&
                  "Name must be at least 3 characters") ||
                (/\d/.test(values["Last Name"]) &&
                  "Name shouldn't contain digits") ||
                (/[^a-zA-Z0-9\s]/.test(values["Last Name"]) &&
                  "Name shouldn't contain any special characters")
              }
            />
          </div>

          {/* Email field */}
          <div className="mb-4">
            <FormInputType2
              label="Email"
              type="email"
              name="Email"
              minLength="6"
              maxLength="40"
              value={values.Email}
              onChange={handleChange}
              errorMessage="Email must be a valid email address"
            />
          </div>

          {/* Phone Number and Position fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <FormInputType2
              label="Phone Number"
              type="tel"
              name="Phone Number"
              minLength="10"
              maxLength="10"
              pattern="^\d{10}$"
              value={values["Phone Number"]}
              onChange={handleChange}
              errorMessage={
                /[a-zA-Z\s]/.test(values["Phone Number"])
                  ? "Shouldn't contain letters or spaces"
                  : "Phone number must be valid"
              }
            />

            <PositionPicker
              PositionSelected={values.Position}
              Positions={Positions}
              positionFocus={positionFocus}
              setPositionFocus={setPositionFocus}
              handlePositionChange={handlePositionChange}
            />
          </div>

          {/* Date Picker and Experience Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Date Picker */}
            <div className="w-full h-fit">
              <ReactDatePicker
                DateSelected={values["Preferred Date"]}
                isDateFocused={isDateFocused}
                setIsDateFocused={setIsDateFocused}
                handleDateChange={handleDateChange}
              />
            </div>

            {/* Experience Field */}
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isExpVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8 pointer-events-none"
              }`}
            >
              <FormInputType2
                tabIndex={isExpVisible ? 0 : -1}
                label={
                  values.Position === Positions[2]
                    ? "Management Experience"
                    : "Relevant Experience"
                }
                type="tel"
                name="Experience"
                minLength="1"
                maxLength="2"
                pattern="^(?!0+$)\d{1,2}$"
                value={values.Experience}
                onChange={handleChange}
                errorMessage={
                  !/^(?!0+$)\d{1,2}$/.test(values.Experience) && "Invalid Input"
                }
              />
            </div>
          </div>

          {/* Portfolio Link field */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              isPortfolioVisible
                ? "opacity-100 translate-y-0 max-h-24 mb-4"
                : "opacity-0 -translate-y-10 max-h-0 overflow-hidden mb-0"
            }`}
          >
            <FormInputType2
              tabIndex={isPortfolioVisible ? 0 : -1}
              label="Portfolio Link"
              type="url"
              name="Portfolio Link"
              value={values["Portfolio Link"]}
              onChange={handleChange}
              errorMessage="Please provide a valid link"
            />
          </div>

          {/* Skills field */}
          <div className="flex flex-wrap justify-start mb-4 gap-2">
            {Skills.map((skill) => (
              <button
                type="button"
                key={skill}
                className={`bg-gray-100 text-gray-700 font-semibold px-3 py-1.5 rounded-full text-xs transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-50 ${
                  values.Skills.includes(skill) && "bg-indigo-500 text-white"
                }`}
                onClick={() => handleSkillChange(skill)}
              >
                {skill}
              </button>
            ))}
          </div>

          {/* Submit button */}
          <div className="flex items-end justify-end">
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded w-full transition-all duration-500 ease-in-out transform hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Illustration on the right */}
        <div className="p-4 rounded-xl w-full">
          <img
            src={Illustration}
            alt="Illustration"
            className="scale-75 object-cover"
          />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <Modal2 inputs={inputs} values={values} closeModal={closeModal} />
        )}
      </section>
    </>
  );
};

export default Form2;
