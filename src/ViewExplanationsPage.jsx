import React from "react";
import { CssBaseline, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CircularProgressBar from "./CircularProgressBar";
import CardProjects from "./cardComponents/CardProjects";
import xaiImage from "./images/xai.png";
import CardExperience from "./cardComponents/CardExperience";
import CardEducation from "./cardComponents/CardEducation";
import CardSkills from "./cardComponents/CardSkills";
import CardCertifications from "./cardComponents/CardCertifications";
import CardAwards from "./cardComponents/CardAwards";

function ViewExplanationsPage() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ backgroundColor: "#F5F5F5", height: "100%" }}>
        <Box sx={{ pb: 10 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 6,
              paddingBottom: 6,
            }}
          >
            <CircularProgressBar value={60} />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start", // Align items vertically in the center
                flexDirection: "column",
                paddingLeft: 6,
                width: "40%",
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
          <CardProjects number={7} imageUrl={xaiImage} />
          <Box sx={{ mt: 2 }}>
            <CardExperience
              score={8} // Work Experience Score (out of 10)
              yearsWorked={["2020 June to 2021 May", "2012 Feb to 2019 March"]} // Years the user has worked
              previousRoles={[
                "Software Engineer",
                "Team Lead",
                "Project Manager",
              ]} // Previous job roles
              preferredYears={5} // Minimum preferred years of experience
              preferredExperienceAs="Senior Developer" // Preferred job title
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <CardEducation
              score={9}
              studiedAt="Harvard University"
              gpa="3.8"
              degreeRequired="Yes"
              minGPA="3.5"
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <CardSkills
              score={4}
              skills={["JavaScript", "React", "Node.js"]}
              biases={["React", "Should have 3+ years of experience"]}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <CardCertifications
              score={8}
              certifications={["AWS Certified", "PMP", "Scrum Master"]}
              biases={["Must have AWS Certification", "Prefers PMP holders"]}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <CardAwards
              score={8}
              awards={[
                "Employee of the Year",
                "Best Innovator Award",
                "Top Performer 2023",
              ]}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default ViewExplanationsPage;
