"use client";

import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import { JobCard } from "./JobCard";
import { MOCK_JOBS } from "@/app/services/data";
import { Pagination } from "@mui/material";


export const JobList = () => {
  const [page, setPage] = useState(2);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (value: any) => {
    setPage(value);
  };  return (
    <Box
      sx={{
        padding: {
          xs: 2,
          sm: 3,
        },
      }}
    >
      <Box>
        {MOCK_JOBS.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </Box>
      <Stack spacing={2} justifyContent="center" alignItems={"center"}>
      <Pagination
      count={3}
      page={page}
      onChange={handleChange}
      sx={{
        "& .MuiPaginationItem-root": {
          borderRadius: "8px",
          border: "1px solid #ccc",
          color: "#666",
        },
        "& .MuiPaginationItem-page.Mui-selected": {
          backgroundColor: "#4CAF50",
          color: "#fff",
          borderColor: "#4CAF50",
        },
        "& .MuiPaginationItem-page:hover": {
          backgroundColor: "#e0e0e0",
        },
        "& .MuiPaginationItem-previousNext": {
          border: "1px solid #ccc",
        },
      }}
    />
    </Stack>
    </Box>
  );
};
