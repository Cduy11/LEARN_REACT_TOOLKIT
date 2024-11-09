import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../apis/featcher";

const userLocal = JSON.parse(localStorage.getItem("user"));

const initialState = {
  currentUser: userLocal,
  isLoading: false,
  error: null,
  data: null,
};

// Call API management
export const fetchUserManagementApi = createAsyncThunk(
  "user/fetchUserManagement",
  async ({page =1, pageSize = 20}) => {
    try {
      const res = await fetcher.get(
        `/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`
      );
      return res.data.content;
    } catch (error) {
      throw new Error(error.response?.data?.content || "Error fetching user data");
    }
  }
);




const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.currentUser = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserManagementApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserManagementApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserManagementApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
