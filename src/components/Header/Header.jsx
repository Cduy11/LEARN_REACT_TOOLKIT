import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { path } from '../../routes/path';
import { logout } from '../../store/slices/user.slice';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { toggleTheme } from '../../store/slices/themeSlice';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const themeMode = useSelector((state) => state.theme.mode);

  const handleLogin = () => {
    navigate(path.LOGIN);
  };

  const handleRegister = () => {
    navigate(path.REGISTER);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    toast.success("Đăng xuất thành công");
    dispatch(logout());
  };

  const toggleThemeMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <AppBar position="static" color={themeMode === 'dark' ? 'primary' : 'inherit'}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ứng Dụng
        </Typography>
        <IconButton onClick={toggleThemeMode} color="inherit">
          {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {!currentUser ? (
          <>
            <Button color="inherit" onClick={handleLogin}>
              Đăng nhập
            </Button>
            <Button color="inherit" onClick={handleRegister}>
              Đăng ký
            </Button>
          </>
        ) : (
          <>
            <Avatar onClick={handleMenu} sx={{ cursor: 'pointer' }}>
              {currentUser.hoTen.charAt(0)}
            </Avatar>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
