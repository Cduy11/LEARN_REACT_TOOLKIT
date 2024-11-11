import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../apis/featcher";

export const RegisterUser = createAsyncThunk(
  "register/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await fetcher.post("/QuanLyNguoiDung/DangKy", data);
      return res.data;
    } catch (error) {
      console.log("Error details:", error.response?.content);
      return rejectWithValue(error.response?.content);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    error: null,
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default registerSlice.reducer;
