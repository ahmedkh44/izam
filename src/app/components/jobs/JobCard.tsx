"use client";

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import { JobBadge } from "./JobBadge";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  postedDate: string;
  experience: string;
  type: string;
  workMode: string;
  categories: string[];
  companyLogo: string;
}

export const JobCard = ({
  title,
  company,
  location,
  postedDate,
  experience,
  type,
  workMode,
  categories,
  companyLogo,
}: JobCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        p: 2,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          border: "1px solid #9ecea0",
          backgroundColor: "#f3fdf3",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Image
            src={companyLogo}
            alt={company}
            width={48}
            height={48}
            style={{ borderRadius: "8px" }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: 600 }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", mt: 0.5 }}>
              {company}
            </Typography>
          </Box>
        </Box>
        <IconButton
          size="small"
          sx={{
            color: "#666",
            "&:hover": {
              color: "#000",
            },
          }}
        >
          <Box
            sx={{
              width: 40, 
              height: 40,
              borderRadius: "50%", 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff", 
              border: "1px solid #E0E0E0"
            }}
          >
            <FavoriteIcon sx={{ fontSize: 20, color: "#E0E0E0" }} />
          </Box>
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <LocationOnIcon sx={{ fontSize: 16, color: "#666" }} />
          <Typography variant="body2" sx={{ color: "#666" }}>
            {location}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <CalendarTodayIcon sx={{ fontSize: 16, color: "#666" }} />
          <Typography variant="body2" sx={{ color: "#666" }}>
            {postedDate}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <JobBadge label={experience} />
        <JobBadge label={type} />
        <JobBadge label={workMode} />
      </Box>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {categories.map((category) => (
          <Typography
            key={category}
            variant="body2"
            sx={{
              color: "#666",
              "&:not(:last-child):after": {
                content: '"•"',
                marginLeft: 1,
                marginRight: 1,
              },
            }}
          >
            {category}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
