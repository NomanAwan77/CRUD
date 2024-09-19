import React from "react";
import "./style.scss";

const StudentDisplay = () => {
  const studentInfo = {
    name: "John Doe",
    age: 14,
    grade: "8th Grade",
    parentEmail: "parent.email@example.com",
    address: "123 Main St, Springfield, USA",
  };

  return (
    <div className="student-display">
      <h2>Student Information</h2>
      <ul>
        <li>
          <strong>Name:</strong> {studentInfo.name}
        </li>
        <li>
          <strong>Age:</strong> {studentInfo.age}
        </li>
        <li>
          <strong>Grade:</strong> {studentInfo.grade}
        </li>
        <li>
          <strong>Parent's Email:</strong> {studentInfo.parentEmail}
        </li>
        <li>
          <strong>Address:</strong> {studentInfo.address}
        </li>
      </ul>
      <div className="buttons">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default StudentDisplay;
