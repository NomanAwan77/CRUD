import React, { useState } from "react";
import "./style.scss";

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    grade: "",
    parentEmail: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Information:", studentData);
    // You can add more logic here to handle the form submission.
  };

  return (
    <div className="form-container">
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={studentData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={studentData.grade}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="parentEmail">Parent's Email:</label>
          <input
            type="email"
            id="parentEmail"
            name="parentEmail"
            value={studentData.parentEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={studentData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
