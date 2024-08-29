import { useState, useEffect } from "react";
import "../../src/styles/AddEmployeeForm.css";

const AddEmployeeForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [employeeImage, setEmployeeImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    dob: "",
    experience: "",
    managerId: "",
  });
  const [managers, setManagers] = useState([]);

  // Fetch the managers when the component mounts
  // useEffect(() => {
  //   fetch("/api/employees") // adjust the endpoint as per your API route
  //     .then((response) => response.json())
  //     .then((data) => setManagers(data.data))
  //     .catch((error) => console.error("Error fetching managers:", error));
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 1048576) {
      alert("File size exceeds 1MB");
      e.target.value = "";
    } else {
      setEmployeeImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("designation", formData.designation);
    formDataToSend.append("dateOfBirth", formData.dob);
    formDataToSend.append("yearsOfExperience", formData.experience);
    formDataToSend.append("reportingManager", formData.managerId);
    formDataToSend.append("image", employeeImage);

    try {
      const response = await fetch("/api/v1/Employee", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        alert("Employee added successfully!");
        // Clear the form or handle the response as needed
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("There was an error adding the employee.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="image-upload">
        {employeeImage ? (
          <img
            src={URL.createObjectURL(employeeImage)}
            alt="Employee"
            className="employee-image"
          />
        ) : (
          <input
            type="file"
            name="employeeImage"
            accept=".png,.jpg,.jpeg"
            onChange={handleImageChange}
          />
        )}
      </div>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="designation"
        placeholder="Designation"
        value={formData.designation}
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="experience"
        placeholder="Years of Experience"
        value={formData.experience}
        onChange={handleInputChange}
        required
      />
      <select
        name="managerId"
        value={formData.managerId}
        onChange={handleInputChange}
        required
      >
        <option value="">Select Employee</option>
        <option>sdsdsds</option>
        {/* {managers.map((manager) => (
          <option key={manager._id} value={manager._id}>
            {manager.name}
          </option>
        ))} */}
      </select>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
