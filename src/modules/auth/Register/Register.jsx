import {
  Box,
  Stack,
  TextField,
  Typography,
  Container,
  Paper,
  Button,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { path } from "../../../routes/path";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../../store/slices/registerSlice";


const schema = yup.object({
  taiKhoan: yup.string().required("Tên đăng nhập là bắt buộc"),
  matKhau: yup.string().required("Mật khẩu là bắt buộc"),
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  soDt: yup.string().required("Số điện thoại là bắt buộc"),
  maNhom: yup.string().required("Mã nhóm là bắt buộc"),
  hoTen: yup.string().required("Họ tên là bắt buộc"),
}).required();

export default function Register() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.register);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formValue) => {
    dispatch(RegisterUser(formValue));
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          marginTop: 4,
          marginBottom: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper elevation={3} sx={{ padding: 6, width: "100%", borderRadius: 3 }}>
          <Typography variant="h3" fontWeight="bold" textAlign="center" sx={{ mb: 3 }}>
            Đăng Ký
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <TextField
                {...register("taiKhoan")}
                error={!!errors.taiKhoan}
                helperText={errors.taiKhoan?.message}
                label="Tên đăng nhập"
                fullWidth
              />
              <TextField
                {...register("matKhau")}
                error={!!errors.matKhau}
                helperText={errors.matKhau?.message}
                label="Mật khẩu"
                type="password"
                fullWidth
              />
              <TextField
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                label="Email"
                type="email"
                fullWidth
              />
              <TextField
                {...register("soDt")}
                error={!!errors.soDt}
                helperText={errors.soDt?.message}
                label="Số điện thoại"
                fullWidth
              />
              <TextField
                {...register("maNhom")}
                error={!!errors.maNhom}
                helperText={errors.maNhom?.message}
                label="Mã nhóm"
                fullWidth
              />
              <TextField
                {...register("hoTen")}
                error={!!errors.hoTen}
                helperText={errors.hoTen?.message}
                label="Họ tên"
                fullWidth
              />
            </Stack>
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error.message || "Đăng ký thất bại"}
              </Typography>
            )}
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }} disabled={isLoading}>
              {isLoading ? "Đang đăng ký..." : "Đăng Ký"}
            </Button>
          </form>
          <Button variant="text" sx={{ mt: 2 }}>
            <Link to={path.LOGIN}>Đăng Nhập</Link>
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}
