import React, { useContext } from "react";
import { Context } from "..";
import firebase from "firebase/compat/app";
//Materail UI
import { Container, Grid, Box, Button } from "@mui/material";

function Login() {
  const { auth } = useContext(Context);
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  return (
    <Container>
      <Grid className="login" container>
        <div className="login__Box">
          <Box p={5}>
            <Button onClick={login} variant={"outlined"}>
              Login With Google
            </Button>
          </Box>
        </div>
      </Grid>
    </Container>
  );
}

export default Login;
