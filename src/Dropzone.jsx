import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload"; // MUI upload icon

function MyDropzone({ onFileUpload }) {
  // Accept a prop for handling uploaded files
  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      onFileUpload(acceptedFiles); // Pass uploaded files to parent component
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Box
      {...getRootProps()}
      sx={{
        border: "2px dashed #d3d3d3", // Light gray dashed border
        borderRadius: "16px", // Soft rounded corners
        padding: "40px", // Spacious padding
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: "#fafafa", // Light gray background
        width: "100%", // Full width
        maxWidth: "600px", // Restrict max width
        margin: "auto", // Centering the box
        height: "200px", // Fixed height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color 0.3s ease",
        "&:hover": {
          borderColor: "#b0b0b0", // Darker gray on hover
        },
        ...(isDragActive && {
          borderColor: "#999", // Darker border when dragging
          backgroundColor: "#f0f0f0", // Slightly darker background
        }),
      }}
    >
      <input {...getInputProps()} />
      <CloudUploadIcon sx={{ fontSize: 50, color: "#a0a0a0", mb: 1 }} />{" "}
      {/* Upload Icon */}
      <Typography variant="body1" color="textSecondary">
        Click to browse or <br /> drag and drop your files
      </Typography>
    </Box>
  );
}

export default MyDropzone;
