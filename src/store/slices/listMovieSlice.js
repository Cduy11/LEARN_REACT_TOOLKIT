import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../apis/featcher";

// fetch list movie
export const fetchListMovieApi = createAsyncThunk(
  "listMovie/fetchListMovie",
  async () => {
    try {
      const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
      return response.data.content;
      
    } catch (error) {
      return (error.response?.data || 'Có lỗi xảy ra');
    }
  }
);

const listMovieSlice = createSlice({
  name: "listMovie",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListMovieApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchListMovieApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchListMovieApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Có lỗi xảy ra';
      });
  },
});

export default listMovieSlice.reducer;