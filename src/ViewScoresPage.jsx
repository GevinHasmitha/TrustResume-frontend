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
                setLoading(true); // Show a loading state while the request is being made
                try {
                  // Send GET request to API
                  const response = await axios.get(
                    "https://a6ee-34-147-19-122.ngrok-free.app/process_stored_data/",
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );

                  console.log("Response from explanation API:", response);

                  // Assuming response.data contains the HTML content you need
                  const { ner_html, regression_html } = response.data;
                  console.log("NER HTML:", ner_html);
                  console.log("Regression HTML:", regression_html);

                  // Navigate to the next page and pass the received data as state
                  navigate("/view-explanations", {
                    state: {
                      scores: scores,
                      weights: weights,
                      ner_html: ner_html, // Pass the NER HTML content
                      regression_html: regression_html, // Pass the regression explanation HTML
                    },
                  });
                } catch (error) {
                  console.error("Error uploading data:", error);
                } finally {
                  setLoading(false); // Hide loading state after the request is finished
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
