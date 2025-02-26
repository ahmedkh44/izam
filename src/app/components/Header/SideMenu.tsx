import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export const SideMenu = ({ open, onClose }: SideMenuProps) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '280px',
          bgcolor: '#fff',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            sx={{ width: 48, height: 48, mr: 2 }}
            src="/assets/icons/profile-avatar.png"
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Ahmed Amaar
            </Typography>
            <Typography variant="body2" color="text.secondary">
              UX UI designer
            </Typography>
          </Box>
          <IconButton onClick={onClose}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1 }}>
          <ListItem component={Link} href="/" sx={{ mb: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Image
                src="/assets/icons/home-icon.svg"
                alt="Home"
                width={24}
                height={24}
              />
            </ListItemIcon>
            <ListItemText sx={{color: "#6e6e6e", fontFamily:"ui-sans-serif,system-ui,sans-serif"}} primary="Home" />
          </ListItem>

          <ListItem component={Link} href="/jobs" sx={{  mb: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Image
                src="/assets/icons/home-icon.svg"
                alt="Jobs"
                width={24}
                height={24}
              />
            </ListItemIcon>
            <ListItemText sx={{color: "#6e6e6e", fontFamily:"ui-sans-serif,system-ui,sans-serif"}} primary="Jobs" />
          </ListItem>

          <ListItem component={Link} href="/employers" sx={{  mb: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Image
                src="/assets/icons/employers-icon.svg"
                alt="Employers"
                width={24}
                height={24}
              />
            </ListItemIcon>
            <ListItemText  sx={{color: "#6e6e6e", fontFamily:"ui-sans-serif,system-ui,sans-serif"}} primary="Employers" />
          </ListItem>

          <ListItem component={Link} href="/notifications" sx={{ mb: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Image
                src="/assets/icons/notifications-icon.svg"
                alt="Notifications"
                width={24}
                height={24}
              />
            </ListItemIcon>
            <ListItemText sx={{color: "#6e6e6e", fontFamily:"ui-sans-serif,system-ui,sans-serif"}} primary="Notifications" />
          </ListItem>

          <ListItem component={Link} href="/messages" sx={{ mb: 1,  }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Image
                src="/assets/icons/message-icon.svg"
                alt="Messaging"
                width={24}
                height={24}
              />
            </ListItemIcon>
            <ListItemText sx={{color: "#6e6e6e", fontFamily:"ui-sans-serif,system-ui,sans-serif"}} primary="Messaging" />
          </ListItem>
        </List>

        <List sx={{ px: 1, mt: 4, borderTop: "1px solid rgb(221, 221, 221)" }}>
          <ListItem sx={{  mb: 1 }}>
            <ListItemText sx={{color: "#6e6e6e", fontFamily:"ui-sans-serif,system-ui,sans-serif"}} primary="Setting and privacy" />
          </ListItem>
          <ListItem sx={{ mb: 1 }}>
            <ListItemText sx={{color: "#6e6e6e", fontFamily:"ui-sans-serif,system-ui,sans-serif"}} primary="Language" />
          </ListItem>
          <ListItem sx={{ mb: 1 }}>
            <ListItemText sx={{color: "#6e6e6e", fontFamily:"ui-sans-serif,system-ui,sans-serif"}} primary="Help" />
          </ListItem>
          <ListItem sx={{ borderTop: "1px solid rgb(221, 221, 221)", color: 'error.main' }}>
            <ListItemText sx={{ fontFamily:"ui-sans-serif,system-ui,sans-serif"}} primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};