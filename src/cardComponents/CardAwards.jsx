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

const CardAwards = ({ score, awards = [] }) => {
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

          {/* Awards Score */}
          <Typography variant="subtitle1" fontWeight="bold" color="#5C5C5C">
            Awards Score: {score}/10
          </Typography>
          <LinearProgressBar value={score * 10} />

          {/* Expandable Content */}
          <Collapse in={expanded}>
            <Box sx={{ mt: 2 }}>
              {/* Awards Section */}
              {awards.length > 0 && (
                <>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Awards:
                  </Typography>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    spacing={1}
                    sx={{ mt: 1 }}
                  >
                    {awards.map((award, index) => (
                      <Chip key={index} label={award} />
                    ))}
                  </Stack>
                </>
              )}
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardAwards;
