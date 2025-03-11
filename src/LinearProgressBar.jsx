import React, { useEffect, useState } from "react";
import { LinearProgress, Box, styled } from "@mui/material";

// Styled component for a curved progress bar
const CurvedLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  backgroundColor: "#dcdcdc", // Outer background color
  borderRadius: 5, // Outer border radius
  overflow: "hidden", // Clips the inside bar
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#00A388",
    borderRadius: 5, // Curves the inside progress
    transition: "width 0.5s ease-in-out",
  },
}));

const LinearProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime;
    const animateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const duration = 1000; // Animation duration (1s)
      const newProgress = Math.min((elapsed / duration) * value, value);

      setProgress(newProgress);

      if (newProgress < value) {
        requestAnimationFrame(animateProgress);
      }
    };

    requestAnimationFrame(animateProgress);
  }, [value]); // Runs animation when `value` changes

  return (
    <Box sx={{ width: "100%" }}>
      <CurvedLinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default LinearProgressBar;
