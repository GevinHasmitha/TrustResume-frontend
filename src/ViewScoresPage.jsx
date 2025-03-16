import React, { useState } from "react";
import { Container } from "@mui/system";
import { CssBaseline, Box, Typography, Button } from "@mui/material";
import CircularProgressBar from "./CircularProgressBar";
import LinearProgressBar from "./LinearProgressBar";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ViewScoresPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scores = location.state?.scores || {}; // Access passed state, default to empty object if undefined
  const weights = location.state?.weights || {}; // Access passed state, default to empty object if undefined

  console.log("Type of skills_score:", typeof scores.data.skills_score);

  const [loading, setLoading] = useState(false);
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
          <CircularProgressBar value={scores.data?.total_score || 0} />
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
              Projects: {scores.data?.projects_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar
              value={(scores.data?.projects_score || 0) * 10}
            />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Work Experience: {scores.data?.experience_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar
              value={(scores.data?.experience_score || 0) * 10}
            />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Education: {scores.data?.education_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar
              value={(scores.data?.education_score || 0) * 10}
            />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Skills: {scores.data?.skills_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar value={(scores.data?.skills_score || 0) * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Certifications: {scores.data?.certifications_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar
              value={(scores.data?.certifications_score || 0) * 10}
            />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Awards: {scores.data?.awards_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar value={(scores.data?.awards_score || 0) * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Button
              variant="contained"
              sx={{
                display: "flex-start",
                backgroundColor: "#00A388",
                marginTop: 3,
              }}
              onClick={async () => {
                console.log();

                setLoading(true); // Show a loading state while the request is being made
                try {
                  // Send formData to API using axios
                  const response = await axios.get(
                    "https://e22b-34-23-127-148.ngrok-free.app/process_stored_data/"
                  );

                  // Navigate to the scores page and pass the received data
                  navigate("/view-explanations", {
                    state: { scores: scores, weights: weights },
                  });
                } catch (error) {
                  console.error("Error uploading data:", error);
                } finally {
                  setLoading(false); // Hide loading state
                }
              }}
            >
              {loading ? "Generating..." : "View Explanations"}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ViewScoresPage;
