import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Collapse,
  IconButton,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import LinearProgressBar from "../LinearProgressBar";

const CardEducation = ({ score, studiedAt, gpa, degreeRequired, minGPA }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: 2,
          boxShadow: 3,
          transition: "0.3s",
          "&:hover": { boxShadow: 6 },
          position: "relative",
        }}
      >
        <CardContent>
          {/* Expand/Collapse Button at Top Right */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <IconButton onClick={() => setExpanded(!expanded)} size="small">
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>

          {/* Education Details */}
          <Typography variant="subtitle1" fontWeight="bold">
            Education Details: {score}/10
          </Typography>
          <LinearProgressBar value={score * 10} />

          {/* Expandable Content */}
          <Collapse in={expanded}>
            <Box sx={{ mt: 1 }}>
              {studiedAt && (
                <Typography variant="body2">
                  Studied at <strong>{studiedAt}</strong>
                </Typography>
              )}

              {gpa && (
                <Typography variant="body2">
                  Scored a GPA of <strong>{gpa}</strong>
                </Typography>
              )}
              {(degreeRequired === "Yes" || minGPA) && (
                <>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Biases Placed:
                  </Typography>
                  {degreeRequired === "Yes" && (
                    <Typography variant="body2">
                      Candidate should have a degree
                    </Typography>
                  )}
                  {minGPA && (
                    <Typography variant="body2">
                      GPA greater than or equal to <strong>{minGPA}</strong>
                    </Typography>
                  )}
                </>
              )}
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardEducation;
