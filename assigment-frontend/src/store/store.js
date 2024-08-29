import { configureStore } from "@reduxjs/toolkit";
import AddEmployee from "./slice/AddEmployeeSlice";
import employeeReducer from "./slice/AllEmployeeSlice";

const store = configureStore({
	reducer: {
		AddEmployee,
		employees: employeeReducer,
	},
});

export default store;
