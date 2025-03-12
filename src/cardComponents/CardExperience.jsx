import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Collapse,
  IconButton,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import LinearProgressBar from "../LinearProgressBar";

const CardExperience = ({
  score,
  yearsWorked = [],
  previousRoles = [],
  preferredYears,
  preferredExperienceAs,
}) => {
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
          position: "relative", // Ensures the icon is positioned correctly
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

          {/* Display score First */}
          <Typography variant="subtitle1" fontWeight="bold">
            Work Experience: {score}/10
          </Typography>
          <LinearProgressBar value={score * 10} />

          {/* Expandable Content */}
          <Collapse in={expanded}>
            <Box sx={{ mt: 1 }}>
              {yearsWorked.length > 0 && (
                <>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ mt: 1 }}
                  >
                    Years Worked:
                  </Typography>
                  <List dense sx={{ padding: 0 }}>
                    {yearsWorked.map((year, index) => (
                      <ListItem key={index} sx={{ padding: "0" }}>
                        <Typography variant="body2">{year}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </>
              )}

              {previousRoles.length > 0 && (
                <>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Previous Job Roles:
                  </Typography>

                  {previousRoles.map((role, index) => (
                    <ListItem key={index} sx={{ padding: "0" }}>
                      <Typography variant="body2">{role}</Typography>
                    </ListItem>
                  ))}
                </>
              )}

              {(preferredYears || preferredExperienceAs) && (
                <>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Biases Placed:
                  </Typography>
                  {preferredYears && (
                    <Typography variant="body2">
                      {preferredYears} years of experience or greater.
                    </Typography>
                  )}
                  {preferredExperienceAs && (
                    <Typography variant="body2">
                      Experience as a {preferredExperienceAs}.
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

export default CardExperience;
