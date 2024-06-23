import React, { useState } from "react";
import FormInputType3 from "./FormInputType3";
import Dropdown from "./Dropdown";

const DynamicSection = ({
  topic,
  formData,
  setFormData,
  handleTopicChange,
  handleDropdownChange,
  options,
}) => {
  const isVisible = topic !== "";
  const [isLanguageFocused, setIsLanguageFocused] = useState(false);
  const [isFrequencyFocused, setIsFrequencyFocused] = useState(false);
  const [isDietFocused, setIsDietFocused] = useState(false);
  const [isEducationFocused, setIsEducationFocused] = useState(false);

  return (
    <>
      <div
        className={`grid grid-cols-2 gap-4 transition-all duration-500 ease-in-out ${
          isVisible && topic === "Technology"
            ? "max-h-12 mb-6"
            : "h-0 opacity-0 -translate-y-10 transform pointer-events-none"
        }`}
      >
        <div>
          <Dropdown
            topic={topic + " Section"}
            name="Favorite Language"
            value={formData["Technology Section"]["Favorite Language"]}
            Items={options.languages}
            isFocused={isLanguageFocused}
            setIsFocused={setIsLanguageFocused}
            handleTopicChange={handleTopicChange}
            handleDropdownChange={handleDropdownChange}
          />
        </div>
        <FormInputType3
          label="Experience"
          type="tel"
          name="Experience"
          minLength="1"
          maxLength="2"
          pattern="^(?!0+$)\\d{1,2}$"
          value={formData["Technology Section"]["Experience"]}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              [topic + " Section"]: {
                ...prev[topic + " Section"],
                Experience: e.target.value,
              },
            }));
          }}
        />
      </div>

      <div
        className={`grid grid-cols-2 gap-4 transition-all duration-500 ease-in-out ${
          isVisible && topic === "Health"
            ? "max-h-12 mb-6"
            : "h-0 opacity-0 -translate-y-10 transform pointer-events-none"
        }`}
      >
        <Dropdown
          topic={topic + " Section"}
          name="Exercise Frequency"
          value={formData["Health Section"]["Exercise Frequency"]}
          Items={options.frequency}
          isFocused={isFrequencyFocused}
          setIsFocused={setIsFrequencyFocused}
          handleTopicChange={handleTopicChange}
          handleDropdownChange={handleDropdownChange}
        />
        <Dropdown
          topic={topic + " Section"}
          name="Diet Preference"
          value={formData["Health Section"]["Diet Preference"]}
          Items={options.diet}
          isFocused={isDietFocused}
          setIsFocused={setIsDietFocused}
          handleTopicChange={handleTopicChange}
          handleDropdownChange={handleDropdownChange}
        />
      </div>
      <div
        className={`grid grid-cols-2 gap-4 transition-all duration-500 ease-in-out ${
          isVisible && topic === "Education"
            ? "max-h-12 mb-6"
            : "h-0 opacity-0 -translate-y-10 transform pointer-events-none"
        }`}
      >
        <Dropdown
          topic={topic + " Section"}
          name="Highest Qualification"
          value={formData["Education Section"]["Highest Qualification"]}
          Items={options.education}
          isFocused={isEducationFocused}
          setIsFocused={setIsEducationFocused}
          handleTopicChange={handleTopicChange}
          handleDropdownChange={handleDropdownChange}
        />
        <FormInputType3
          label="Field Of Study"
          type="text"
          name="Field Of Study"
          minLength="2"
          maxLength="30"
          value={formData["Education Section"]["Field Of Study"]}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              [topic + " Section"]: {
                ...prev[topic + " Section"],
                "Field Of Study": e.target.value,
              },
            }));
          }}
        />
      </div>
    </>
  );
};

export default DynamicSection;
