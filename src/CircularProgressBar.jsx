import React, { useEffect, useState } from "react";
import { CircularProgress, Typography, Box } from "@mui/material";

const CircularProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = (value - oldProgress) * 0.1; // Smooth transition factor
        return oldProgress + diff > value ? value : oldProgress + diff;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Box position="relative" display="inline-flex">
      {/* Background Circle */}
      <CircularProgress
        variant="determinate"
        value={100}
        sx={{
          color: "#ffcccc",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.5,
        }}
        size={150} // Adjusted size
        thickness={5} // Existing thickness
      />

      {/* Foreground Progress with Rounded Edges */}
      <CircularProgress
        variant="determinate"
        value={progress}
        sx={{
          color: "#d32f2f",
          strokeLinecap: "round",
        }}
        size={150} // Adjusted size
        thickness={5} // Existing thickness
      />

      {/* Score Text */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h6" sx={{ color: "#333", fontSize: "18px" }}>
          {`${Math.round(progress)}/100`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressBar;
