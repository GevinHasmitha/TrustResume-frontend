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

const UploadPage = () => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          magnam possimus blanditiis voluptatum nulla, minima nobis deserunt
          eaque obcaecati commodi quae accusantium porro, quo aperiam id
          mollitia enim ad exercitationem.
        </Typography>
        <Box sx={{ my: 4 }}>
          <MyDropzone />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Preferred years of experience"
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
            label="Preffered prevoius job role"
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
            label="Preffered GPA"
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
              Do you have a degree?
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
            label="Preffered skils"
            fieldId="skills"
            onChange={handleChipDataChange}
          />
          <ChipInput
            label="Preffered certifications"
            fieldId="certifications"
            onChange={handleChipDataChange}
          />
          <Button
            variant="contained"
            sx={{ margin: "10px", backgroundColor: "#00A388", pl: 5, pr: 5 }}
          >
            Upload
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default UploadPage;
