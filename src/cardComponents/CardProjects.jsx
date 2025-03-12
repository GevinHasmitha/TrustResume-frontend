import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LinearProgressBar from "../LinearProgressBar";

const CardProjects = ({ number, imageUrl }) => {
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
        <CardMedia
          sx={{
            width: "100%",
            objectFit: "contain",
            padding: 2,
          }}
          component="img"
          image={imageUrl}
          alt="Project Image"
        />
      </Card>
    </motion.div>
  );
};

export default CardProjects;
