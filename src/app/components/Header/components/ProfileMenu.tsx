import { useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Box,
  Stack,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar
        sx={{ width: 30, height: 30, cursor: "pointer" }}
        src="/assets/icons/profile-avatar.png"
        alt="User Avatar"
      />

      <Stack  sx={{ cursor: "pointer" }}direction="row" spacing={1} alignItems="center" onClick={handleClick}>
        <Typography
          sx={{ mt: 0.5, opacity: 0.8, "&:hover": { opacity: 1 } }}
          fontSize={12}
          variant="subtitle1"
        >
          Profile{" "}
        </Typography>
        <KeyboardArrowDownIcon sx={{ fontSize: 16, ml: 0.5, opacity: 0.8 }} />
      </Stack>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose} sx={{ width: 300 }}>
          <Avatar
            sx={{ width: 45, height: 45, marginRight: 1 }}
            src="/assets/icons/profile-avatar.png"
          />
          <div>
            <Typography variant="subtitle1">Ahmed Amaar</Typography>
            <Typography variant="body2" color="textSecondary">
              UX UI designer
            </Typography>
          </div>
          <KeyboardArrowRightIcon sx={{ fontSize: 20, ml: 10, color: "#6e6e6e99", }} />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} sx={{color: "#6e6e6e", fontFamily:"ui-sans-serif,system-ui,sans-serif"}}>Setting and privacy</MenuItem>
        <MenuItem onClick={handleClose} sx={{color: "#6e6e6e", fontFamily:"ui-sans-serif,system-ui,sans-serif"}}>Language</MenuItem>
        <MenuItem onClick={handleClose} sx={{color: "#6e6e6e", fontFamily:"ui-sans-serif,system-ui,sans-serif"}}>Help</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} sx={{ color: "red", fontFamily:"ui-sans-serif,system-ui,sans-serif" }}>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
