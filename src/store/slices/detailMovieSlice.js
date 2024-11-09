import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../apis/featcher";

export const fetchDetailMovieApi = createAsyncThunk(
  "detailMovie/fetchDetailMovie",
  async (maPhim) => {
    const response = await fetcher.get(
      `/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
    );
    return response.data.content;
  }
);

const detailMovieSlice = createSlice({
  name: "detailMovie",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailMovieApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDetailMovieApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchDetailMovieApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default detailMovieSlice.reducer;