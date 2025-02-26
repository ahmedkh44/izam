import { Box, MenuItem, Select, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface JobSortingProps {
  onSortChange: (value: string) => void;
}

export const JobSorting = ({
  onSortChange
}: JobSortingProps) => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        alignItems: "center",
        gap: 1,
        overflow: "hidden",
        paddingTop: 3,
        paddingBottom: 1,
        paddingInlineEnd: 2
      }}
    >
      <Typography variant="body2" sx={{ color: "#404040", fontWeight: 500 }}>
        Sorting by:
      </Typography>
      <Select
        size="small"
        defaultValue="top_match"
        onChange={(e) => onSortChange(e.target.value)}
        IconComponent={(props) => (
          <ExpandMoreIcon {...props} sx={{ color: "green", fontSize: 20 }} />
        )}
        sx={{
          minWidth: 120,
          height: "32px",
          border: "none",
          outline: "none",
          color: "green",
          "& .MuiSelect-select": {
            py: 0.5,               
          },
          "&.MuiOutlinedInput-root": {
            "& fieldset": {
              outline: "none",
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
          }
        }}
      >
        <MenuItem value="top_match">Top match</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
        <MenuItem value="oldest">Oldest</MenuItem>
      </Select>
    </Box>
  )
}