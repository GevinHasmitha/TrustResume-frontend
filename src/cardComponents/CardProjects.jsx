import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import LinearProgressBar from "../LinearProgressBar";

const CardProjects = ({ number, reg_html }) => {
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
        }}
      >
        <CardContent>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#5C5C5C"
            gutterBottom
          >
            Projects undertaken: {number}/10
          </Typography>
          <LinearProgressBar value={number * 10} />
        </CardContent>

        {/* Image below the number */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: 2,
          }}
        >
          {/* Left side: HTML content */}
          <Box sx={{ flex: 7 }}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="	#777777"
              sx={{ marginBottom: 1 }}
            >
              Local Explainability
            </Typography>
            {reg_html && (
              <Box
                sx={{ overflowX: "auto" }}
                dangerouslySetInnerHTML={{ __html: reg_html }}
              />
            )}
          </Box>

          {/* Right side: Image */}
          <Box sx={{ flex: 3 }}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="	#777777"
              sx={{ marginBottom: 1 }}
            >
              Global Explainability
            </Typography>
            <Box
              component="img"
              src="/Picture1.png"
              alt="Global Explainability"
              sx={{
                width: "100%",
                objectFit: "contain",
                maxHeight: 350,
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      </Card>
    </motion.div>
  );
};

export default CardProjects;
