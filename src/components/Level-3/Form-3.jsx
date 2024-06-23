import React, { useState, useEffect } from "react";
import FormInputType3 from "./FormInputType3";
import Illustration from "../../assets/Form-3.png";
import Dropdown from "./Dropdown";
import DynamicSection from "./DynamicSection";
import { Accordion } from "./Accordion";
import { AccordionItem } from "./Accordion";
import Toast from "../Level-2/Toast";
import Modal3 from "./Modal-3";

const Form3 = () => {
  const [isTopicFocused, setIsTopicFocused] = useState(false);
  const [formData, setFormData] = useState({
    ["Full Name"]: "",
    Email: "",
    ["Survey Topic"]: "",
    ["Technology Section"]: {
      ["Favorite Language"]: "",
      Experience: "",
    },
    ["Health Section"]: {
      ["Exercise Frequency"]: "",
      ["Diet Preference"]: "",
    },
    ["Education Section"]: {
      ["Highest Qualification"]: "",
      ["Field Of Study"]: "",
    },
    Feedback: "",
  });
  const inputs = Object.keys(formData);
  const Topics = ["Technology", "Health", "Education"];
  const Languages = ["JavaScript", "Python", "Java", "C#"];
  const Frequency = ["Daily", "Weekly", "Monthly", "Rarely"];
  const Diet = ["Vegetarian", "Vegan", "Non-Vegetarian"];
  const Education = ["High School", "Bachelor's", "Master's", "PhD"];

  const [questions, setQuestions] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [warning, setWarning] = useState("");

  useEffect(() => {
    if (formData["Survey Topic"]) {
      // Fetch  questions based on the survey topic from an API
      setFetched(false);
      fetchQuestions(formData["Survey Topic"]);
    }
  }, [formData["Survey Topic"]]);

  const fetchQuestions = async (topic) => {
    const categoryMap = {
      Technology: 18, // Science: Computers
      Education: 25, // Art (closest match)
      Health: 17, // Science & Nature (closest match)
    };
    const categoryId = categoryMap[topic];
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=5&category=${categoryId}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.response_code === 0) {
          const questions = data.results.map((item) => item.question);
          console.log(questions);
          setFetched(true);
          setQuestions(questions);
        } else {
          console.error("API returned an error code:", data.response_code);
        }
      } else {
        console.error("Failed to fetch questions");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTopicChange = (topic) => {
    setFormData({
      ...formData,
      ["Survey Topic"]: topic,
    });
    setIsTopicFocused(false);
  };

  const handleDropdownChange = (value, section, field) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  useEffect(() => {
    if (warning) {
      const timer = setTimeout(() => {
        setWarning("");
      }, 4000); // Dismiss after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [warning]);

  useEffect(() => {
    if (formData["Survey Topic"]) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        "Technology Section": {
          "Favorite Language": "",
          Experience: "",
        },
        "Health Section": {
          "Exercise Frequency": "",
          "Diet Preference": "",
        },
        "Education Section": {
          "Highest Qualification": "",
          "Field Of Study": "",
        },
      }));
    }
  }, [formData["Survey Topic"]]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const missingFields = [];

    if (!formData["Full Name"]) missingFields.push("Full Name");
    if (!formData.Email) missingFields.push("Email");
    if (!formData["Survey Topic"]) missingFields.push("Survey Topic");
    if (!formData.Feedback) missingFields.push("Feedback");

    if (formData["Survey Topic"] === "Technology") {
      if (!formData["Technology Section"].Experience)
        missingFields.push("Experience");
      if (!formData["Technology Section"]["Favorite Language"])
        missingFields.push("Favorite Language");
    } else if (formData["Survey Topic"] === "Health") {
      if (!formData["Health Section"]["Exercise Frequency"])
        missingFields.push("Exercise Frequency");
      if (!formData["Health Section"]["Diet Preference"])
        missingFields.push("Diet Preference");
    } else if (formData["Survey Topic"] === "Education") {
      if (!formData["Education Section"]["Highest Qualification"])
        missingFields.push("Highest Qualification");
      if (!formData["Education Section"]["Field Of Study"])
        missingFields.push("Field Of Study");
    }

    console.log("Experience : " + formData["Technology Section"].Experience);
    console.log("Missing fields:", missingFields);
    if (missingFields.length > 0) {
      setWarning(
        `Please fill ${missingFields.join(", ")} ${
          missingFields.length === 1 ? "field" : "fields"
        }`
      );
      return;
    }

    console.log("Form data:", formData);
    console.log(" questions:", questions);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="w-full h-full rounded-xl shadow-lg bg-white flex items-center justify-between p-2 relative">
      <Toast warning={warning} setWarning={setWarning} />

      {/* Illustration on the right */}
      <div
        className={`p-4 rounded-xl bg-[#cc8fd6] ${
          fetched && "bg-gray-800 opacity-50"
        } w-1/3 h-full grid items-center relative transition-colors duration-300 ease-in-out`}
      >
        <img
          src={Illustration}
          alt="Illustration"
          className={`p-4 object-cover ${fetched && "opacity-20"} `}
        />

        {/* Questions */}
        {fetched && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <Accordion className="max-w-[95%] bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
              {questions.map((question, index) => (
                <AccordionItem
                  key={index}
                  value={index}
                  trigger={`Question ${index + 1}`}
                >
                  {question}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>

      {/* Form section */}
      <form
        onSubmit={handleSubmit}
        className="bg-white py-8 px-6 rounded-xl h-full w-2/3"
      >
        <h2 className="text-3xl font-bold mb-8">Survey Form</h2>

        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* Full Name */}
          <FormInputType3
            label="Full Name"
            name="Full Name"
            type="text"
            minLength="3"
            maxLength="18"
            onChange={handleInputChange}
            value={formData["Full Name"]}
            required
          />

          {/* Email */}
          <FormInputType3
            label="Email"
            name="Email"
            type="email"
            minLength="6"
            maxLength="40"
            onChange={handleInputChange}
            value={formData.Email}
            required
          />

          {/* Survey Topic */}
          <div className="mb-2 ">
            <Dropdown
              topic="Survey Topic"
              name="Survey Topic"
              value={formData["Survey Topic"]}
              Items={Topics}
              isFocused={isTopicFocused}
              setIsFocused={setIsTopicFocused}
              handleTopicChange={handleTopicChange}
              handleDropdownChange={handleDropdownChange}
            />
          </div>
        </div>

        {/* Dynamic Section */}
        <DynamicSection
          topic={formData["Survey Topic"]}
          formData={formData}
          setFormData={setFormData}
          handleTopicChange={handleTopicChange}
          handleDropdownChange={handleDropdownChange}
          options={{
            languages: Languages,
            frequency: Frequency,
            diet: Diet,
            education: Education,
          }}
        />

        {/* Feedback */}
        <div className="mb-4 relative group">
          <label className="absolute left-0 -top-3 px-1 text-xs font-medium tracking-wide rounded-md group-focus-within:text-indigo-600 pointer-events-none bg-white ml-3 transition-colors duration-200">
            Feedback
          </label>
          <textarea
            label="Feedback"
            name="Feedback"
            value={formData.Feedback}
            onChange={handleInputChange}
            className="px-4 py-2 w-full text-sm font-medium outline-none border-2 border-gray-400 rounded-lg hover:border-gray-600 transition-colors duration-200 focus:border-indigo-600 bg-white focus:outline-none focus:ring-0 resize-y max-h-32 min-h-14"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div className="flex">
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 mt-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <Modal3
          inputs={inputs}
          values={formData}
          closeModal={closeModal}
          questions={questions}
        />
      )}
    </section>
  );
};

export default Form3;
