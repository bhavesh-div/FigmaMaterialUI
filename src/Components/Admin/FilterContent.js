import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import {
  Grid,
  Paper,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
} from "@mui/material";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";

export default function FilterContent(props) {
  return (
    <Grid
      container
      justifyContent="center"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {props.showFilter && (
        <Box sx={{ m: "15px" }}>
          <Paper
            component="form"
            sx={{
              alignItems: "center",
              width: 580,
              height: "auto",
              borderRadius: "12px",
              boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.08)",
              padding: "10px 15px",
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
              <label style={{ fontWeight: "600" }}>Filter</label>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="close"
                onClick={props.handleFilter}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider sx={{ mt: "5px" }} />

            <Box
              sx={{
                p: "0 10px",
                mt: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormControlLabel control={<Checkbox />} label="2D Product" />
              <FormControlLabel control={<Checkbox />} label="3D Content" />
              <FormControlLabel control={<Checkbox />} label="With Icon" />
            </Box>

            <label style={{ fontWeight: "600", paddingLeft: "10px" }}>
              Colors
            </label>

            <Box sx={{ mb: "10px", display: "flex", alignItems: "center" }}>
              <IconButton>
                <input
                  type="color"
                  id="color-picker"
                  value="+"
                  name="color-picker"
                  style={{
                    border: "none",
                    height: "42px",
                    width: "42px",
                    borderRadius: "12px",
                    backgroundColor: "#2DD4BF",
                    cursor: "pointer",
                    backgroundImage:
                      "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
                  }}
                />
              </IconButton>
              <IconButton
                sx={{
                  height: "42px",
                  width: "42px",
                  borderRadius: "12px",
                  backgroundColor: "#2DD4BF",
                  ml: "20px",
                }}
              />
              <IconButton
                sx={{
                  height: "42px",
                  width: "42px",
                  borderRadius: "12px",
                  backgroundColor: "#1E40AF",
                  ml: "20px",
                }}
              />
              <IconButton
                sx={{
                  height: "42px",
                  width: "42px",
                  borderRadius: "12px",
                  backgroundColor: "#116DFF",
                  ml: "20px",
                }}
              />
            </Box>

            <label style={{ fontWeight: "600", paddingLeft: "10px" }}>
              Language
            </label>
            <Box>
              <FormControl sx={{ display: "flex", mb: "10px" }}>
                <InputLabel id="demo-multiple-name-label">
                  Chose Language
                </InputLabel>

                <Select
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "#F3F2FF80",
                  }}
                >
                  <MenuItem>Bahasa Indonesia (Indonesia)</MenuItem>
                  <MenuItem>English (India)</MenuItem>
                  <MenuItem>Deutsch (Deutschland)</MenuItem>
                  <MenuItem>Dansk (Danmark)</MenuItem>
                  <MenuItem>English (philippines)</MenuItem>
                  <MenuItem>English (US)</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              sx={{
                display: "flex",
                mr: "0px",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Box>
                {/* //typesof product\\ */}
                <label style={{ fontWeight: "600" }}>Types of Product</label>
                <Box>
                  <FormControl sx={{ display: "flex", mt: "5px" }}>
                    <InputLabel id="demo-multiple-name-label">
                      Physical
                    </InputLabel>
                    <Select
                      style={{
                        borderRadius: "12px",
                        width: "254px",
                        backgroundColor: "#F3F2FF80",
                      }}
                    >
                      <MenuItem>Physical</MenuItem>
                      <MenuItem>Virtual</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box>
                {/* //number of section\\ */}
                <label style={{ fontWeight: "600" }}>Number of Section</label>
                <Box>
                  <FormControl
                    sx={{
                      display: "flex",
                      mt: "5px",
                      width: "254px",
                    }}
                  >
                    <InputLabel id="demo-multiple-name-label">8</InputLabel>

                    <Select
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "#F3F2FF80",
                      }}
                    >
                      <MenuItem>8</MenuItem>
                      <MenuItem>9</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "15px",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  borderRadius: "8px",
                  height: "48px",
                  width: "250px",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  height: "48px",
                  width: "250px",
                }}
              >
                Apply Filter
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </Grid>
  );
}
