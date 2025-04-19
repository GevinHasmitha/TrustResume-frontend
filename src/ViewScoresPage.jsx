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
  const extracted_data = location.state?.extracted_data || {}; // Access passed state, default to empty object if undefined

  console.log("Scores data:", scores); // Log the scores data

  // console.log("Type of skills_score:", typeof scores.data.skills_score);

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
          <CircularProgressBar value={scores?.total_score || 0} />
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
              Projects: {scores?.projects_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar value={(scores?.projects_score || 0) * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Work Experience: {scores?.experience_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar value={(scores?.experience_score || 0) * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Education: {scores?.education_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar value={(scores?.education_score || 0) * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Skills: {scores?.skills_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar value={(scores?.skills_score || 0) * 10} />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Certifications: {scores?.certifications_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar
              value={(scores?.certifications_score || 0) * 10}
            />
          </Box>
          <Box sx={{ width: "40%", margin: "auto", marginBottom: 2 }}>
            <Typography variant="body1" sx={{ color: "#555555" }}>
              Awards: {scores?.awards_score ?? "N/A"}/10
            </Typography>
            <LinearProgressBar value={(scores?.awards_score || 0) * 10} />
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
                    "http://127.0.0.1:8000/process_stored_data/",
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );

                  console.log("Response from explanation API:", response);

                  // Assuming response.data contains the HTML content you need
                  const { ner_html, regression_html } = response.data.data;
                  console.log("NER HTML:", ner_html);
                  console.log("Regression HTML:", regression_html);

                  // Navigate to the next page and pass the received data as state
                  navigate("/view-explanations", {
                    state: {
                      scores: scores,
                      weights: weights,
                      extracted_data: extracted_data,
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
