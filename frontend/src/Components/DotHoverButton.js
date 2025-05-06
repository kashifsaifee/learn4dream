import React, { useState } from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const DotHoverButton = ({ text = "Hover this link" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: hovered ? "#000" : "#000000", // Button baround color changes on hover
        borderRadius: "999px",
        padding: "10px 20px",
        cursor: "pointer",
        overflow: "hidden",
        gap: 12,
        transition: "background-color 0.3s ease", // Smooth transition for background color
      }}
    >
      <motion.div
        initial={{ width: 10, height: 10 }}
        animate={{
          width: hovered ? 32 : 10,
          height: hovered ? 32 : 10,
        }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: hovered ? "#fff" : "#fff", // Dot changes to white on hover
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hovered ? "#000" : "#fff", // Arrow changes to black on hover
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {hovered ? "→" : ""}
      </motion.div>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          fontWeight: 500,
          color: hovered ? "#fff" : "#fff", // Text changes to white on hover
        }}
      >
        {text}
      </Typography>
    </motion.div>
  );
};

export default DotHoverButton;
