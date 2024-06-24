# React Dynamic Forms &nbsp;&nbsp; [Website Link](https://dynamic-heliotrope-441807.netlify.app/)

## Tasks Accomplished

### Form 1 : Basic Dynamic Form with Conditional Fields

**Objective:** Build an Event Registration Form with basic dynamic fields and conditional logic.

**Tasks Completed:**
- Implemented fields for Name, Email, Age, and "Are you attending with a guest?" with conditional display of Guest Name.
- Validation rules include:
  - Name is required.
  - Email is required and must be a valid email format.
  - Age is required and must be a number greater than 0.
  - Guest Name is required if attending with a guest.
- On form submission, a summary of the entered data is displayed.

---

### Form 2 : Intermediate Dynamic Form with Nested Conditional Logic and Multiple Field Types

**Objective:** Develop a Job Application Form with nested conditional logic and multiple field types.

**Tasks Completed:**
- Designed fields for Full Name, Email, Phone Number, Applying for Position (Developer, Designer, Manager), Relevant Experience, Portfolio URL, Management Experience, Additional Skills, and Preferred Interview Time.
- Implemented nested conditional logic to show/hide fields based on the selected position:
  - Relevant Experience for Developer or Designer.
  - Portfolio URL for Designer.
  - Management Experience for Manager.
- Validation rules include:
  - Full Name is required.
  - Email is required and must be a valid email format.
  - Phone Number is required and must be a valid number.
  - Relevant Experience is required if applying for Developer or Designer and must be a number greater than 0.
  - Portfolio URL is required for Designers and must be a valid URL.
  - Management Experience is required for Managers.
  - At least one Additional Skill must be selected.
  - Preferred Interview Time is required and must be a valid date and time.
- On form submission, a summary of the entered data is displayed.

---

### Form 3 : Advanced Dynamic Form with Complex Conditional Logic, Dynamic Sections, and Integration with an API

**Objective:** Create a Survey Form with advanced conditional logic, dynamic sections, and API integration.

**Tasks Completed:**
- Developed fields for Full Name, Email, Survey Topic, and conditional sections for Technology (Favorite Programming Language, Years of Experience), Health (Exercise Frequency, Diet Preference), Education (Highest Qualification, Field of Study), and Feedback.
- Implemented complex conditional logic to dynamically show sections based on the selected Survey Topic (Technology, Health, Education).
- Integrated with an external API to fetch and display additional questions based on the selected Survey Topic.
- Validation rules include:
  - Full Name is required.
  - Email is required and must be a valid email format.
  - Survey Topic is required.
  - Technology Section fields are required if Technology is selected as the Survey Topic.
  - Health Section fields are required if Health is selected as the Survey Topic.
  - Education Section fields are required if Education is selected as the Survey Topic.
  - Feedback is required and must be at least 50 characters.
- On form submission, data is validated, additional questions are fetched from the API based on the Survey Topic, and a summary of the entered data along with additional questions is displayed.
