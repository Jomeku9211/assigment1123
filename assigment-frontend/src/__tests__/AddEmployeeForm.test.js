import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddEmployeeForm from "../component/AddEmployeeForm";

test("renders Add Employee Form", () => {
  render(<AddEmployeeForm />);
  const addemployeeform = screen.getByTestId("AddEmployeeFormId");
  expect(addemployeeform).toBeInTheDocument();
});
