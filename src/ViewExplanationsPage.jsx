import React from "react";
import { CssBaseline, Box, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import CircularProgressBar from "./CircularProgressBar";
import CardProjects from "./cardComponents/CardProjects";
import CardExperience from "./cardComponents/CardExperience";
import CardEducation from "./cardComponents/CardEducation";
import CardSkills from "./cardComponents/CardSkills";
import CardCertifications from "./cardComponents/CardCertifications";
import CardAwards from "./cardComponents/CardAwards";
import RenderHtml from "./RenderHtml";
import { useLocation, useNavigate } from "react-router-dom";

function ViewExplanationsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { scores, weights, extracted_data, ner_html, regression_html } =
    location.state || {};
  console.log("extracted_data", extracted_data);
  // Splitting single string to array for weighted data
  const weighted_degree = weights?.weighted_degree
    ? weights.weighted_degree.split(",").map((item) => item.trim())
    : false;

  const weighted_gpa = weights?.weighted_gpa
    ? weights.weighted_gpa.split(",").map((item) => item.trim())
    : false;

  const weighted_worked_as = weights?.weighted_worked_as
    ? weights.weighted_worked_as.split(",").map((item) => item.trim())
    : false;

  const weighted_years_experience = weights?.weighted_years_experience
    ? weights.weighted_years_experience.split(",").map((item) => item.trim())
    : false;

  const weighted_certifications = weights?.weighted_certifications
    ? weights.weighted_certifications.split(",").map((item) => item.trim())
    : false;

  const weighted_skills = weights?.weighted_skills
    ? weights.weighted_skills.split(",").map((item) => item.trim())
    : false;

  return (
    <>
      <CssBaseline />
      <Container sx={{ height: "100%" }}>
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
            <CircularProgressBar value={scores.total_score} />
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
          <CardProjects
            number={scores.projects_score}
            reg_html={regression_html}
          />
          <Box display="flex">
            <Box sx={{ flex: 1 }}>
              <Box sx={{ mt: 2 }}>
                <CardExperience
                  score={scores.experience_score} // Work Experience Score (out of 10)
                  yearsWorked={extracted_data.years_experience} // Years the user has worked
                  previousRoles={extracted_data.worked_as} // Previous job roles
                  preferredYears={weighted_years_experience} // Minimum preferred years of experience
                  preferredExperienceAs={weighted_worked_as} // Preferred job title
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <CardEducation
                  score={scores.education_score}
                  studiedAt={extracted_data.university}
                  gpa={extracted_data.gpa}
                  degreeRequired={weighted_degree ? "Yes" : "No"}
                  minGPA={weighted_gpa}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <CardSkills
                  score={scores.skills_score}
                  skills={extracted_data.skills}
                  biases={weighted_skills}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <CardCertifications
                  score={scores.certifications_score}
                  certifications={extracted_data.certifications}
                  biases={weighted_certifications}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <CardAwards
                  score={scores.awards_score}
                  awards={extracted_data.awards}
                />
              </Box>
            </Box>
            <Box sx={{ flex: 2 }}>
              <Container sx={{ height: "100%", padding: 4 }}>
                <RenderHtml htmlContent={ner_html} />{" "}
                {/* Render the HTML content inside the page */}
              </Container>
            </Box>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#00A388", px: 4, py: 1, mb: 3 }}
            onClick={() => navigate("/")} // 👈 assumes upload page is at "/"
          >
            Upload New Resume
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default ViewExplanationsPage;
