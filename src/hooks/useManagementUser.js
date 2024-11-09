import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserManagementApi } from "../store/slices/user.slice";

export const useManagementUser = (page) => {
  const { data, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserManagementApi({ page }));
  }, [dispatch, page]);
  return { data, isLoading, error };
};

export default useManagementUser;
