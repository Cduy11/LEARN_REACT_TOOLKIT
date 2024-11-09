// React imports
import { useState } from "react";

// Third party libraries
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Material UI imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/user.slice";
import { Link, useNavigate } from "react-router-dom";
import userApi from "../../../apis/user.api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { path } from "../../../routes/path";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Tên đăng nhập không được để trống"),
  matKhau: yup.string().required("Mật khẩu không được để trống"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // dùng useMutation để gọi api login
  const {mutate: handleLogin, isPending} = useMutation({
    mutationFn: (formData) => {
      return userApi.login(formData)
    },
    onSuccess: (data) => {
      const currentUser = data.content
      toast.success("Đăng nhập thành công")
      dispatch(login(currentUser))
      if(currentUser.maLoaiNguoiDung === "QuanTri"){
        navigate(path.ADMIN)
      }else{
        navigate(path.HOME)
      }
    },
    onError: (error) => {
      toast.error(error.content || "Đăng nhập thất bại")
    }
  })

  // Dùng useForm để lấy dữ liệu từ form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // set giá trị mặc định cho form
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    // dùng yubResolver để validate dữ liệu
    resolver: yupResolver(schema),
  });

  // hàm submit form
  const onSubmit = (formData) => {
    const data = {
      taiKhoan: formData.taiKhoan.trim(),
      matKhau: formData.matKhau.trim(),
    }
    handleLogin(data)
  };

  return (
    <Box className="w-[450px]">
      <Typography
        variant="h3"
        fontWeight={"bold"}
        textAlign={"center"}
        component={"h3"}
      >
        Đăng Nhập
      </Typography>
      <Typography
        textAlign={"center"}
        className="text-sm text-gray-500 text-center my-2"
      >
        Chào mừng bạn đã quay trở lại
      </Typography>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <TextField
            {...register("taiKhoan")}
            error={!!errors.taiKhoan}
            helperText={errors.taiKhoan?.message}
            fullWidth
            label="Tên đăng nhập"
            name="taiKhoan"
            placeholder="Tên đăng nhập"
          />
          <TextField
            {...register("matKhau")}
            error={!!errors.matKhau}
            helperText={errors.matKhau?.message}
            label="Password"
            variant="outlined"
            fullWidth
            placeholder="Mật Khẩu"
            name="matKhau"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary" onClick={onSubmit} disabled={isPending}>
            Đăng Nhập
          </Button>
          <Typography>
            <Link to="/auth/register" >Bạn chưa có tài khoảng?</Link>
          </Typography>
        </Stack>
      </form>
    </Box>
  );
}
