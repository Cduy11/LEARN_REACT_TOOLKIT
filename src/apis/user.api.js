import fetcher from "./featcher";

// nơi chứa api liên quan đến user
const userApi = {
  login: async (data) => {
    try {
      const res = await fetcher.post("QuanLyNguoiDung/DangNhap", data);
      return res.data;
    } catch (error) {
      throw error.res.data;
    }
  },
 
};
export default userApi;
