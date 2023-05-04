import React from "react";

import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AddLinkIcon from "@mui/icons-material/AddLink";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";

import { Grid, Paper, Box } from "@mui/material";
import { useState } from "react";

import FilterContent from "./FilterContent";
import FileUpload from "./FileUpload";
import LinkOpen from "./LinkOpen";

function Sidebar() {
  const [showFilter, setShowFilter] = useState();
  const [showCam, setShowCam] = useState();
  const [showLink, setShowLink] = useState();

  const handleLink = () => {
    setShowLink(!showLink);
    setShowCam(false);
    setShowFilter(false);
  };

  const handleFilter = () => {
    setShowFilter(!showFilter);
    setShowCam(false);
    setShowLink(false);
  };

  const handleCam = () => {
    setShowCam(!showCam);
    setShowLink(false);
    setShowFilter(false);
  };

  return (
    <Grid
      container
      justifyContent="center"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Box sx={{ m: "5px 10px" }}>
        <Paper
          component="form"
          sx={{
            p: "5px 10px",
            display: "flex",
            alignItems: "center",
            width: 500,
            height: 60,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <AddLinkIcon onClick={handleLink} />
          </IconButton>

          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <CenterFocusWeakIcon onClick={handleCam} />
          </IconButton>
        </Paper>
      </Box>

      <Box sx={{ m: "5px 10px" }}>
        <Paper
          component="form"
          sx={{
            p: "5px 10px",
            display: "flex",
            alignItems: "center",
            width: 60,
          }}
        >
          <IconButton
            sx={{ p: "12px 6px" }}
            onClick={handleFilter}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Paper>
      </Box>

      <Box>
        <FilterContent handleFilter={handleFilter} showFilter={showFilter} />
      </Box>

      <Box>
        <FileUpload handleCam={handleCam} showCam={showCam} />
      </Box>

      <Box>
        <LinkOpen handleLink={handleLink} showLink={showLink} />
      </Box>
    </Grid>
  );
}

export default Sidebar;
