import * as React from "react";

import "../../css/style1.css";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";

import { AppBar, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { Tabs, Tab } from "@mui/material";
import Sidebar from "./Sidebar";

const drawerWidth = 280;

function Appbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            className="menutext"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            Ouly.AI
          </Typography>

          <Box sx={{ flexGrow: 2 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              className="b1"
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              className="Iconbtn"
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              {/* <TfiCrown /> */}
              <AccountCircle className="icon1" />
              <span style={{ fontSize: "15px", color: "#FFC300" }}>
                Upgrade Plan
              </span>
            </IconButton>

            <IconButton
              className="Iconbtn"
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle className="icon1" />
              <span style={{ fontSize: "15px" }}> AR Jakir </span>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", marginTop: "35px" }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            rowSpacing={2}
          >
            <Grid item xs={6} className="menudesign">
              <p className="content1" style={{ textAlign: "center" }}>
                Dashboard
              </p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: "center" }}> Product </p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: "center" }}>Support</p>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ overflow: "auto", marginTop: "250px" }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            rowSpacing={2}
          >
            <Grid className="menudesign" item xs={6}>
              <p className="content1" style={{ textAlign: "center" }}>
                Editing
              </p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ textAlign: "center" }}> Logout </p>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Ouly" />
            <Tab label="Plagify" />
            <Tab label="My Product" />
          </Tabs>
        </Typography>

        <Typography paragraph>
          <h3 className="headcontent"> Welcome to Ouly </h3>
        </Typography>

        <Box>
          <Sidebar />
        </Box>
      </Box>
    </Box>
  );
}

export default Appbar;
