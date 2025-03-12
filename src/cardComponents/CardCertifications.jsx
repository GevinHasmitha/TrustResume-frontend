import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Collapse,
  IconButton,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import LinearProgressBar from "../LinearProgressBar";

const CardCertifications = ({ score, certifications = [], biases = [] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          backgroundColor: "#F5F5F5",
          maxWidth: "100%",
          borderRadius: 2,
          boxShadow: 3,
          transition: "0.3s",
          "&:hover": { boxShadow: 6 },
          position: "relative",
        }}
      >
        <CardContent>
          {/* Expand/Collapse Button */}
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

          {/* certifications Score */}
          <Typography variant="subtitle1" fontWeight="bold">
            certifications Score: {score}/10
          </Typography>
          <LinearProgressBar value={score * 10} />

          {/* Expandable Content */}
          <Collapse in={expanded}>
            <Box sx={{ mt: 2 }}>
              {/* certifications Section */}
              {certifications.length > 0 && (
                <>
                  <Typography variant="subtitle2" fontWeight="bold">
                    certifications:
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{ mt: 1 }}
                  >
                    {certifications.map((skill, index) => (
                      <Chip key={index} label={skill} />
                    ))}
                  </Stack>
                </>
              )}

              {/* Biases Section */}
              {biases.length > 0 && (
                <>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ mt: 2 }}
                  >
                    Biases Placed:
                  </Typography>

                  {biases.map((bias, index) => (
                    <Typography key={index} variant="body2">
                      - {bias}
                    </Typography>
                  ))}
                </>
              )}
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardCertifications;
