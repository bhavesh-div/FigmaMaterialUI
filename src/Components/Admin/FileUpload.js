import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { Paper, Grid, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { useState } from "react";

export default function FileUpload(props) {
  const [image, setImage] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Grid
      container
      justifyContent="center"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {props.showCam && (
        <Box sx={{ m: "15px" }}>
          <Paper
            component="form"
            sx={{
              alignItems: "center",
              width: 500,
              height: "auto",
              borderRadius: "12px",
              boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.08)",
              padding: "10px 15px",
              marginRight: "80px",
            }}
          >
            <Box
              sx={{ p: "5px" }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label style={{ fontWeight: "600" }}>File Upload</label>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="close"
                onclick={props.handleCam}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider sx={{ mt: "5px" }} />

            <Box
              className="image-uploader"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              sx={{
                display: "flex",
                flexDirection: "column",
                p: "50px",
                backgroundColor: "#F3F2FF80",
                border: "1px dashed rgba(99, 91, 255, 0.2)",
                borderRadius: "12px",
                mt: "24px",
                fontSize: "16px",
              }}
            >
              {image ? (
                <img className="image-preview" src={image} alt="Preview" />
              ) : (
                <h3 style={{ textAlign: "center" }}>
                  Drag and drop an image here or
                </h3>
              )}
              <input
                type="file"
                name="upload a file"
                accept="image/*"
                className="input-file"
                onChange={handleFileInputChange}
              />
            </Box>
          </Paper>
        </Box>
      )}
    </Grid>
  );
}
