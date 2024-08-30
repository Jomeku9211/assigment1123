import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddEmployeeForm from "../component/AddEmployeeForm";
import { Provider } from "react-redux";
import store from "./../store/store";

test("renders Add Employee Form", () => {
  render(
    <Provider store={store}>
      <AddEmployeeForm />
    </Provider>
  );
  const addemployeeform = screen.getByTestId("AddEmployeeFormId");
  expect(addemployeeform).toBeInTheDocument();
});
