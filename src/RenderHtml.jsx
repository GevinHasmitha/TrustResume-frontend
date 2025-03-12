import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

function RenderHtml({ htmlContent }) {
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    if (!htmlContent) return;

    // Wrap HTML content inside a full HTML document structure
    const fullHtml = `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            padding: 10px;
            color: #333;
          }
          .entities {
            background-color: #f5f5f5;
            padding: 10px;
            border-radius: 5px;
          }
          mark.entity {
            background: #ddd;
            padding: 0.45em 0.6em;
            border-radius: 0.35em;
          }
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `;

    // Convert HTML string to Blob URL
    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    setIframeSrc(url);

    return () => URL.revokeObjectURL(url);
  }, [htmlContent]);

  return (
    <Box
      sx={{
        flex: 1,
        mt: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#F5F5F5",
      }}
    >
      {iframeSrc ? (
        <iframe
          src={iframeSrc}
          title="HTML Content"
          style={{ width: "100%", height: "400px", border: "none" }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
}

export default RenderHtml;
