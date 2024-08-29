// src/slices/employeeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch employee data
export const fetchEmployeeData = createAsyncThunk(
	"employees/fetchEmployeeData",
	async (arg, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				"http://localhost:5000/api/v1/Employee/OrganizationTree"
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const employeeSlice = createSlice({
	name: "employees",
	initialState: {
		data: [],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchEmployeeData.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchEmployeeData.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchEmployeeData.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default employeeSlice.reducer;
