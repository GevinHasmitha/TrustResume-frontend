import React, { useState } from "react";
import {
  Typography,
  CssBaseline,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import MyDropzone from "./Dropzone";
import ChipInput from "./ChipInput";
import { commonStyles } from "./commonStyles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UploadPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // State to manage selected value for the selection box (Yes or No)
  const [selectionValue, setSelectionValue] = useState("");

  // State to manage chip data for each field
  const [chipData, setChipData] = useState({
    skills: [],
    certifications: [],
  });

  // State to manage textfield data for the two additional fields
  const [textFieldData, setTextFieldData] = useState({
    years_exp: "",
    comp_worked_at: "",
    gpa: "",
    awards: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState([]); // Store uploaded files

  const handleFileUpload = (files) => {
    console.log("Freom uploadPage: " + files); // Log uploaded files
    setUploadedFiles(files); // Update state with new files
  };

  // Handler to update the chip data for a specific field
  const handleChipDataChange = (fieldId, newData) => {
    setChipData((prevData) => {
      const updatedData = { ...prevData, [fieldId]: newData };
      console.log(updatedData); // Log chip data after each update
      return updatedData;
    });
  };

  // Handler to update the textfield data for the two new fields
  const handleTextFieldChange = (fieldId, value) => {
    setTextFieldData((prevData) => {
      const updatedData = { ...prevData, [fieldId]: value };
      console.log(updatedData); // Log textfield data after each update
      return updatedData;
    });
  };

  // Handler to update the selection (Yes/No)
  const handleSelectionChange = (event) => {
    setSelectionValue(event.target.value);
    console.log(event.target.value); // Log the selection value (Yes or No)
  };
  return (
    <>
      <CssBaseline />
      <Container sx={{ mt: 15 }}>
        <Typography
          variant="h2"
          sx={{
            color: "#00A388",
            textAlign: "center",
            fontWeight: "550",
            my: "20px",
          }}
        >
          Trust Resume
        </Typography>
        <Typography variant="body1" sx={{ width: "60%", margin: "auto" }}>
          Our intelligent resume analysis platform offers transparent,
          customizable, and accurate candidate evaluations. Users can tailor
          evaluation criteria—like prioritizing GPA, specific skills, or
          experience—making hiring smarter and more aligned with your needs. Say
          goodbye to one-size-fits-all assessments and hello to insight-driven
          decisions.
        </Typography>
        <Box sx={{ my: 4 }}>
          <MyDropzone onFileUpload={handleFileUpload} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Preferred years of experience? (Optional)"
            type="number"
            value={textFieldData.years_exp || ""}
            onChange={(e) => handleTextFieldChange("years_exp", e.target.value)}
            sx={{
              my: 1,
              ...commonStyles,
            }}
            size="small"
          />
          <TextField
            label="Preffered prevoius job role? (Optional)"
            value={textFieldData.comp_worked_at || ""}
            onChange={(e) =>
              handleTextFieldChange("comp_worked_at", e.target.value)
            }
            sx={{
              my: 1,
              ...commonStyles,
            }}
            size="small"
          />
          <TextField
            label="Preffered GPA? (Optional)"
            value={textFieldData.gpa || ""}
            onChange={(e) => handleTextFieldChange("gpa", e.target.value)}
            fullWidth
            sx={{
              my: 1,
              ...commonStyles,
            }}
            size="small"
          />
          {/* Selection for Yes/No */}
          <FormControl
            fullWidth
            sx={{
              my: 1,
              ...commonStyles,
            }}
            size="small"
          >
            <InputLabel id="yes-no-select-label">
              Degree preferred? (Optional)
            </InputLabel>
            <Select
              labelId="yes-no-select-label"
              value={selectionValue}
              onChange={handleSelectionChange}
              displayEmpty
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <ChipInput
            label="Preffered skils? (Optional)"
            fieldId="skills"
            onChange={handleChipDataChange}
          />
          <ChipInput
            label="Preffered certifications? (Optional)"
            fieldId="certifications"
            onChange={handleChipDataChange}
          />
          <Button
            variant="contained"
            sx={{ margin: "10px", backgroundColor: "#00A388", pl: 5, pr: 5 }}
            onClick={async () => {
              console.log();

              setLoading(true); // Show a loading state while the request is being made
              try {
                const formData = new FormData();

                // Conditionally append fields based on whether they have values
                if (selectionValue) {
                  formData.append(
                    "weighted_degree",
                    selectionValue === "Yes" ? true : false
                  ); // "Yes" becomes true
                }

                if (textFieldData.gpa) {
                  formData.append("weighted_gpa", textFieldData.gpa); // Append GPA if provided
                }

                if (textFieldData.comp_worked_at) {
                  formData.append(
                    "weighted_worked_as",
                    textFieldData.comp_worked_at
                  ); // Append job role if provided
                }

                if (textFieldData.years_exp) {
                  formData.append(
                    "weighted_years_experience",
                    textFieldData.years_exp
                  ); // Append years of experience if provided
                }

                // Convert arrays to comma-separated strings before sending (if they have values)
                if (chipData.certifications.length > 0) {
                  formData.append(
                    "weighted_certifications",
                    chipData.certifications.join(",")
                  );
                }

                if (chipData.skills.length > 0) {
                  formData.append("weighted_skills", chipData.skills.join(","));
                }

                // Append the PDF file (if any file is uploaded)
                if (uploadedFiles.length > 0) {
                  formData.append("pdf_file", uploadedFiles[0]); // Append first file (assuming single file upload)
                } else {
                  console.error("No file selected!");
                  return;
                }

                // Send formData to API using axios
                const response = await axios.post(
                  "http://127.0.0.1:8000/set_weights/",
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );
                // Cannot directly pass formdata to other page so we map it to a new object
                const weightsObject = {};
                formData.forEach((value, key) => {
                  console.log("Key:", key, "Value:", value);
                  weightsObject[key] = value;
                });

                console.log("Response:", response.data.data); // Log the response data
                const scores = response.data.data?.scores;
                const extractedData = response.data.data?.extracted_data;

                // Navigate to the scores page and pass the received data
                navigate("/view-scores", {
                  state: {
                    scores: scores,
                    weights: weightsObject,
                    extracted_data: extractedData,
                  },
                });
              } catch (error) {
                console.error("Error uploading data:", error);
              } finally {
                setLoading(false); // Hide loading state
              }
            }}
          >
            {loading ? "Uploading..." : "Upload"}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default UploadPage;
