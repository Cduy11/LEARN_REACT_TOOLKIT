import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box sx={{ flexGrow: 1}}>
        <Toolbar />
      <Outlet />
      </Box>
    </Box>
  );
}
