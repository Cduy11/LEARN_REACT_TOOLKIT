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

const schema = yup
  .object({
    taiKhoan: yup.string().required(),
    matKhau: yup.string().required(),
    email: yup.string().required(),
    soDt: yup.string().required(),
    maNhom: yup.string().required(),
    hoTen: yup.string().required(),
  })
  .required();

  
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (formValue) => {
    console.log("shfh", formValue);
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
        <Paper
          elevation={3}
          sx={{
            padding: 6,
            width: "100%",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 3 }}
          >
            Đăng Ký
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              color: "text.secondary",
              mb: 5,
            }}
          >
            Chào mừng bạn đến với hệ thống!!!
          </Typography>

          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <TextField
                {...register("taiKhoan")}
                error={!!errors.taiKhoan}
                helperText={errors.taiKhoan?.message}
                id="taiKhoan"
                name="taiKhoan"
                label="Tên đăng nhập"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    fontSize: "1.2rem",
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "1.2rem",
                  },
                }}
              />
              <TextField
                {...register("matKhau")}
                error={!!errors.matKhau}
                helperText={errors.matKhau?.message} 
                id="matKhau"
                name="matKhau"
                label="Mật khẩu"
                type="password"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    fontSize: "1.2rem",
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "1.2rem",
                  },
                }}
              />
              <TextField
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message} 
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    fontSize: "1.2rem",
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "1.2rem",
                  },
                }}
              />
              <TextField
                {...register("soDt")}
                error={!!errors.soDt}
                helperText={errors.soDt?.message} 
                id="soDt"
                name="soDt"
                label="Số điện thoại"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    fontSize: "1.2rem",
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "1.2rem",
                  },
                }}
              />
              <TextField
                {...register("maNhom")}
                error={!!errors.maNhom}
                helperText={errors.maNhom?.message} 
                id="maNhom"
                name="maNhom"
                label="Mã nhóm"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    fontSize: "1.2rem",
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "1.2rem",
                  },
                }}
              />
              <TextField
                {...register("hoTen")}
                error={!!errors.hoTen}
                helperText={errors.hoTen?.message} 
                id="hoTen"
                name="hoTen"
                label="Họ tên"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    fontSize: "1.2rem",
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "1.2rem",
                  },
                }}
              />
            </Stack>
            <Button type="submit" variant="outlined" my-2>
              Đăng Ký
            </Button>
            <Button type="submit" variant="outlined" my-2>
              <Link to={path.LOGIN}>
                Đăng Nhập
              </Link>
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}
