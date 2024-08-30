import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmployeeCard from "../component/EmployeeCard";

test("renders Add Employee Card Component", () => {
  render(<EmployeeCard />);
  const employeecard = screen.getByTestId("EmployeeCardId");
  expect(employeecard).toBeInTheDocument();
});
