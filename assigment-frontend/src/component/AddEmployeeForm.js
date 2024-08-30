import { useState, useEffect } from "react";
import axios from "axios";
import "../../src/styles/AddEmployeeForm.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeData } from "../store/slice/AllEmployeeSlice";
import { getUniqueDesignations } from "../helperFunction/getManager";
import { increment } from "../store/slice/AddEmployeeSlice";

const AddEmployeeForm = ({ setShowForm }) => {
  const [employeeImage, setEmployeeImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    dob: "",
    experience: "",
    managerId: "",
  });
  const [managers, setManagers] = useState([]);
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.employees.data);

  // Fetch the managers when the component mounts
  useEffect(() => {
    dispatch(fetchEmployeeData());
  }, [dispatch]);

  useEffect(() => {
    if (employeeData) {
      const fetchManagerData = getUniqueDesignations(employeeData);
      console.log(fetchManagerData);
      setManagers(fetchManagerData);
    }
  }, [employeeData]);

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
    // formDataToSend.append("reportingManager", formData.managerId);
    formDataToSend.append("image", employeeImage);
    if (formData.managerId) {
      formDataToSend.append("reportingManager", formData.managerId);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/Employee",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response);
      if (response.status === 200 || response.status === 201) {
        alert("Employee added successfully!");
        setFormData({
          name: "",
          designation: "",
          dob: "",
          experience: "",
          managerId: "",
        });
        setEmployeeImage(null);
        dispatch(increment());
        setShowForm(false);
      } else {
        alert(`Unexpected response status: ${response.status}`);
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
      >
        <option value="" disabled>
          Repoting Manager
        </option>
        {managers.map((manager) => (
          <option key={manager.id} value={manager.id}>
            {manager.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
