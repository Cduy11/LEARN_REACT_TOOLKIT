import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailMovieApi } from "../store/slices/detailMovieSlice";

export const useDetailMovie = (maPhim) => {
  const { data, isLoading, error } = useSelector((state) => state.detailMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailMovieApi(maPhim));
  }, [dispatch, maPhim]);

  return { data, isLoading, error };
};

export default useDetailMovie;