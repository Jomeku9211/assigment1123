import React, { useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import "../../src/styles/AddEmployeeForm.css";

const AddEmployee = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div data-testid="AddEmployeeId">
      <div className="border">
        <button onClick={handleButtonClick}>Add Employee</button>
      </div>

      {showForm && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowForm(false)}>
              &times;
            </span>
            <AddEmployeeForm setShowForm={setShowForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEmployee;
