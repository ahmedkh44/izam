"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Badge,
  Avatar,
  useTheme,
  useMediaQuery,
  SvgIcon,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import { SideMenu } from "./SideMenu";
import ProfileMenu from "./components/ProfileMenu";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#000000",
          boxShadow: "none",
          height: "72px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: {
            xs: "0 16px",
            sm: "0 24px",
            md: "0 32px",
          },
          zIndex: 1100,
        }}
      >
        {isMobile ? (
          <>
            <Box sx={{ position: 'relative' }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                }}
                src="/assets/icons/profile-avatar.png"
                alt="User Avatar"
              />
              <IconButton
                onClick={handleMenuToggle}
                sx={{
                  position: 'absolute',
                  bottom: -8,
                  right: -8,
                  color: "#000",
                  padding: "4px",
                  bgcolor: "#fff",
                  "&:hover": {
                    color: "#fff",
                    bgcolor: "success.dark",
                  },
                }}
                size="small"
              >
                <MenuIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/assets/logo.svg"
                alt="iZAM Logo"
                width={80}
                height={32}
              />
            </Link>
          </>
        ) : (
          <>
          <Stack direction="row" spacing={4} alignItems="center">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="iZAM Logo"
                width={60}
                height={40}
              />
            </Link>
            <Box sx={{ flex: 1, maxWidth: "700px",  }}>
              <TextField
                fullWidth
                placeholder="Search by name, job title, ..."
                variant="outlined"
                size="small"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          sx={{
                            display: "grid",
                            placeItems: "center",
                            p: "6px 6px",
                            borderRadius: "50%",
                            bgcolor: "success.main"
                          }}
                        >
                          <SvgIcon
                            sx={{
                              fill: "#fff",
                              strokeWidth: 2
                            }}
                          >
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                          </SvgIcon>
                        </Box>
                      </InputAdornment>
                    ),
                    sx: {
                      paddingBlock: 3,
                      paddingInline: 2,
                      backgroundColor: "#FFFFFF",
                      borderRadius: "24px",
                      "& fieldset": {
                        border: "none",
                      },
                      height: "40px",
                    },
                  },
                }}
              />
            </Box>
          </Stack>

          <Stack direction="row" spacing={5} alignItems="center" sx={{paddingRight: "30px", }}>
          {[
            { href: "/", icon: "home-icon.svg", label: "Home" },
            { href: "/", icon: "jobs-icon.svg", label: "Jobs" },
            { href: "/", icon: "employers-icon.svg", label: "Employers" },
          ].map(({ href, icon, label }) => (
            <Link key={href} href={href} style={{ textDecoration: "none", color: "#fff" , }}>
              <Stack alignItems="center" sx={{ opacity: 0.8, "&:hover": { opacity: 1 } }}>
                <Image src={`/assets/icons/${icon}`} alt={label} width={24} height={24} />
                <Box sx={{ fontSize: "12px", mt: 0.5 }}>{label}</Box>
              </Stack>
            </Link>
          ))}

          <IconButton>
            <Badge  color="error" sx={{display: "flex", flexDirection: "column", paddingLeft:"35px" ,borderLeft: "1px solid #fff", alignItems: "center",color: "#fff" , opacity: 0.8, "&:hover": { opacity: 1 }}}>
              <Image src="/assets/icons/notifications-icon.svg" alt="Notifications" width={24} height={24} />
              <Typography  sx={{mt: 0.5}} fontSize={12} variant="subtitle1">Notifications</Typography>
            </Badge>
          </IconButton>

          <IconButton>
            <Badge  color="error" sx={{display: "flex", flexDirection: "column", alignItems: "center",color: "#fff" , opacity: 0.8, "&:hover": { opacity: 1 }}}>
              <Image src="/assets/icons/message-icon.svg" alt="Messages" width={30} height={30} />
              <Typography  sx={{mt: 0.5}} fontSize={12} variant="subtitle1">Messaging</Typography>
            </Badge>
          </IconButton>

          <ProfileMenu />
        </Stack>
          </>
        )}
      </AppBar>
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
