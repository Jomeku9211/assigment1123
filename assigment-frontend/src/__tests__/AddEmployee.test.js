import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddEmployee from "../component/AddEmployee";

test("renders Add Employee", () => {
  render(<AddEmployee />);
  const addemployee = screen.getByTestId("AddEmployeeId");
  expect(addemployee).toBeInTheDocument();
});
