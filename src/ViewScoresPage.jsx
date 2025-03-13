import React from "react";
import { Container } from "@mui/system";
import { CssBaseline, Box, Typography, Button } from "@mui/material";
import CircularProgressBar from "./CircularProgressBar";
import LinearProgressBar from "./LinearProgressBar";
import { useNavigate } from "react-router-dom";

const ViewScoresPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Container sx={{ backgroundColor: "#F5F5F5", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 6,
            paddingBottom: 6,
          }}
        >
          <CircularProgressBar value={20} />
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start", // Align items vertically in the center
              flexDirection: "column",
              paddingLeft: 6,
              width: "25%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                color: "#00A388",
              }}
            >
              Score
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555" }}>
              The overall score for the uploaded resume by TrustResume.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Projects: 8/10
            </Typography>
            <LinearProgressBar value={80} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Work Experience: 4/10
            </Typography>
            <LinearProgressBar value={30} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Education: 6/10
            </Typography>
            <LinearProgressBar value={60} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Skills: 7/10
            </Typography>
            <LinearProgressBar value={7} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Certifications: 5/10
            </Typography>
            <LinearProgressBar value={50} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Awards: 2/10
            </Typography>
            <LinearProgressBar value={20} />
            <Button
              variant="contained"
              sx={{
                display: "flex-start",
                backgroundColor: "#00A388",
                marginTop: 3,
              }}
              onClick={() => navigate("/view-explanations")}
            >
              View Explanations
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ViewScoresPage;
