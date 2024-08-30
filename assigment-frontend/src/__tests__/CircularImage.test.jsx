import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CircularImage from "../component/CircularImage";

test("renders Add Employee Card Component", () => {
  render(<CircularImage />);
  const image = screen.getByTestId("ImageId");
  expect(image).toBeInTheDocument();
});
