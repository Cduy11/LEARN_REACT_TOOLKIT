import { useDispatch, useSelector } from "react-redux";
import { fetchListMovieApi } from "../store/slices/listMovieSlice";
import { useEffect } from "react";

const useListMovie = () => {
 //gửi action lên store
 const dispatch = useDispatch();
 //lấy data từ store
 const { data, isLoading, error } = useSelector((state) => state.listMovie);
 

 useEffect(() => {
   dispatch(fetchListMovieApi());
 }, [dispatch]);

 return { data, isLoading, error };
}

export default useListMovie;
