import React from "react";
import { Container } from "@mui/system";
import { CssBaseline, Box, Typography, Button } from "@mui/material";
import CircularProgressBar from "./CircularProgressBar";
import LinearProgressBar from "./LinearProgressBar";
import { useNavigate, useLocation } from "react-router-dom";

const ViewScoresPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scores = location.state?.scores || {}; // Access passed state, default to empty object if undefined
  const weights = location.state?.weights || {}; // Access passed state, default to empty object if undefined

  console.log("Type of skills_score:", typeof scores.data.skills_score);

  // console.log(
  //   "Scores received in ViewScoresPage:",
  //   weights.weighted_certifications
  // );
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
          <CircularProgressBar value={scores.data.total_score} />
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
              Projects: {scores.data.projects_score}/10
            </Typography>
            <LinearProgressBar value={scores.data.projects_score * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Work Experience: {scores.data.experience_score}/10
            </Typography>
            <LinearProgressBar value={scores.data.experience_score * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Education: {scores.data.education_score}/10
            </Typography>
            <LinearProgressBar value={scores.data.education_score * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Skills: {scores.data.skills_score}/10
            </Typography>
            <LinearProgressBar value={scores.data.skills_score * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Certifications: {scores.data.certifications_score}/10
            </Typography>
            <LinearProgressBar value={scores.data.certifications_score * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Awards: {scores.data.awards_score}/10
            </Typography>
            <LinearProgressBar value={scores.data.awards_score * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
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
