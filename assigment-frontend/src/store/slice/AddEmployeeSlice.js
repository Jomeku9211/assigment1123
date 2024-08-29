// src/yourSlice.js
import { createSlice } from "@reduxjs/toolkit";

const AddEmployee = createSlice({
	name: "addEmployee",
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

export const { increment, decrement } = AddEmployee.actions;
export default AddEmployee.reducer;
