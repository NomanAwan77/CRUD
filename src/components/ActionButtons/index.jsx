import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const StudentActionButtons = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/view-details");
  };

  const handleAddNewStudent = () => {
    navigate("/add-student");
  };
  return (
    <div className="action-buttons">
      <button className="btn view-btn" onClick={handleViewDetails}>
        View Student Details
      </button>
      <button className="btn add-btn" onClick={handleAddNewStudent}>
        Add New Student
      </button>
    </div>
  );
};

export default StudentActionButtons;
