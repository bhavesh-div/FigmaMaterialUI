import React from "react";
import {
  Grid,
  CardMedia,
  CardContent,
  Menu,
  MenuItem,
  Button,
  Card,
} from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Image1 from "../../Image/productdetail.png";
import Image2 from "../../Image/p1.png";

export default function LinkOpen(props) {
  return (
    <Grid
      container
      justifyContent="center"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {props.showLink && (
        <Card
          sx={{
            pt: "52px",
            mt: "16px",
            width: "800px",
            height: "465px",
            borderRadius: "12px",
            boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.08)",
            position: "relative",
            p: "24px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="close"
            sx={{ ml: "700px" }}
            onClick={props.handleLink}
          >
            <CloseIcon />
          </IconButton>
          <CardMedia component="img" image={Image1} alt="My Image" />
          <CardContent sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                position: "absolute",
                width: "100%",
                bottom: 0,
                left: 0,
                right: 0,
                height: "154px",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Box sx={{ p: "46px", display: "flex", alignItems: "center" }}>
                <CardMedia
                  sx={{ height: "106px", width: "130px", mr: "24px" }}
                  component="img"
                  image={Image2}
                  alt="My Image"
                />
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontWeight: "600",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "700" }}
                    color="text.primary"
                  >
                    CURLISTA Pro 5 IN 1
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography color="text.secondary">Last Edit:</Typography>
                    <Typography color="text.primary">Yesterday</Typography>
                  </Box>
                </Typography>
              </Box>

              <Box sx={{ p: "46px" }}>
                <IconButton
                  variant="outlined"
                  sx={{
                    height: "36px",
                    width: "36px",
                    borderRadius: "8px",
                    border: "0.725415px solid #6B7280",
                  }}
                >
                  <MoreHorizIcon />
                </IconButton>
                <Menu>
                  <MenuItem onClick={() => console.log("Custom clicked")}>
                    Custom
                  </MenuItem>
                  <MenuItem onClick={() => console.log("View clicked")}>
                    View
                  </MenuItem>
                </Menu>
                <Button variant="contained" sx={{ ml: "18px" }}>
                  Download
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </Grid>
  );
}
