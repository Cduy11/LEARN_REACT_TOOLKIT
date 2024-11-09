import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  Pagination,
} from "@mui/material";

import useManagementUser from "../../../hooks/useManagementUser";
import { useState } from "react";

export default function UserManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useManagementUser(currentPage);
  const users = data?.items || [];
  const count = data?.totalPages || 0;

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" mb={4}>
        User Management
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tài khoản</TableCell>
              <TableCell>Họ tên</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Số Điện Thoại</TableCell>
              <TableCell>Mã Người Dùng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.taiKhoan}>
                <TableCell>{user.taiKhoan}</TableCell>
                <TableCell>{user.hoTen}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.soDt}</TableCell>
                <TableCell>{user.maLoaiNguoiDung}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          count={count}
          page={currentPage}
          onChange={(_event, page) => {
            setCurrentPage(page);
          }}
          variant="outlined"
        />
      </Box>
    </Box>
  );
}
