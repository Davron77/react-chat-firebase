import React from "react";
import { LOGIN_ROUTE } from "../util/const";
import { useContext } from "react";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
//Materail UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Navbar() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React
          </Typography>
          {user ? (
            <Button onClick={() => auth.signOut()} className="Navbar__btn">
              Exit
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button className="Navbar__btn">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
