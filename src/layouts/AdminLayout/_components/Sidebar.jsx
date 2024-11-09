import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "../../../store/slices/user.slice";
import { path } from "../../../routes/path";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    toast.success("Đăng xuất thành công");
    dispatch(logout());
    navigate(path.LOGIN);
  };

  const menu = [
    {
      href: path.ADMIN,
      icon: <DashboardIcon />,
      title: "Admin Dashboard",
    },
    {
      href: path.USER_MANAGEMENT,
      icon: <DashboardIcon />,
      title: "User Management",
    },
    {
      href: path.MOVIE_MANAGEMENT,
      icon: <DashboardIcon />,
      title: "Movie Management",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List>
        {menu.map((item) => (
          <MenuItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            title={item.title}
          />
        ))}
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Đăng xuất" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
