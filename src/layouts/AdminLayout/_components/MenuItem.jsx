import { Box, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MenuItem({ href, icon, title }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(href);
  };

  return (
    <Box>
      <ListItem button onClick={handleNavigate}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Box>
  );
}
