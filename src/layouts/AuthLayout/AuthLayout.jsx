import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { path } from "../../routes/path";
import { useSelector } from "react-redux";

export default function AuthLayout() {
  const navigate = useNavigate()

  // lấy currentUser từ redux
  const {currentUser} = useSelector((state) => state.user)
  
  //check currentUser có tồn tại không, không cho đổi trên url
  if(currentUser?.maLoaiNguoiDung === "QuanTri"){
      return <Navigate to={path.ADMIN} />
  }else if(currentUser){
      return <Navigate to={path.HOME} />;
  }

  // Nếu chưa đăng nhập thì hiển thị form
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className=" rounded-2xl p-8">
        <div className="flex items-center justify-center w-full">
          <img
            src="./vite.svg"
            alt="logo" 
            className="w-12 h-12 cursor-pointer"
            onClick={() => navigate(path.HOME)}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
    
  
