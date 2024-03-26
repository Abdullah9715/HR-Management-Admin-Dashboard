import instance from "@/utils/Instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  employeeData: [],
  isLoading: false,
};
export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    try {
      const res = await instance.get("employee");

      return res.data.data;
    } catch (error) {}
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeeData = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default employeeSlice.reducer;
