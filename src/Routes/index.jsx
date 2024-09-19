import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentActionButtons from "../components/ActionButtons";
import StudentForm from "../components/StudentForm";
import StudentDisplay from "../components/StudentDisplay";

function StudentRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentActionButtons />} />

        <Route path="/view-details" element={<StudentDisplay />} />

        <Route path="/add-student" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default StudentRoutes;
