import React from "react";
import { LOGIN_ROUTE } from "../util/const";
//
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function Navbar() {
  const user = false;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React
          </Typography>
          {user ? (
            <Button color="inherit">Quit</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
