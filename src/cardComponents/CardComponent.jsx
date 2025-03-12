import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const CardComponent = () => {
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
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Work Experience: 8/10
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardComponent;
