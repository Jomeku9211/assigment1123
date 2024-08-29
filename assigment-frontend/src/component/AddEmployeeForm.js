import { useState } from "react";
import "../../src/styles/AddEmployeeForm.css"
const AddEmployeeForm = () => {

      const [showPopup, setShowPopup] = useState(false);
      const [employeeImage, setEmployeeImage] = useState(null);

      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 1048576) {
          alert("File size exceeds 1MB");
          e.target.value = "";
        } else {
          setEmployeeImage(URL.createObjectURL(file));
        }
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
      };

  return (
    <form>
      <div className="image-upload">
        {employeeImage ? (
          <img src={employeeImage} alt="Employee" className="employee-image" />
        ) : (
          <input
            type="file"
            name="employeeImage"
            accept=".png,.jpg,.jpeg"
            onChange={handleImageChange}
          />
        )}
      </div>

      <input type="text" name="name" placeholder="Name" required />
      <input
        type="text"
        name="designation"
        placeholder="Designation"
        required
      />
      <input type="date" name="dob" required />
      <input
        type="number"
        name="experience"
        placeholder="Years of Experience"
        required
      />
      <select name="managerId" required>
        <option value="">Select Manager</option>
      </select>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
