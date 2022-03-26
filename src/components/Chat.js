import { Avatar, Container, Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useContext, useState } from "react";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat/app";

function Chat() {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createAt")
  );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid container className="chat">
        <div className="chat__main">
          {messages.map((message) => (
            <div
              className="Chat__message"
              style={{
                margin: "10px",
                backgroundColor:
                  user.uid === message.uid ? "#F5F5F5" : "#435F7A",
                color: user.uid === message.uid ? "#32465A" : "#F5F5F5",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "40%",
                padding: 5,
                borderRadius: "10px",
              }}
            >
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div style={{ marginTop: "5px" }}>{message.text}</div>
            </div>
          ))}
        </div>
        <div container className="chat__mainInput">
          <TextField
            placeholder="Message"
            fullWidth
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="chat__input"
          />
          <SendIcon onClick={sendMessage} className="chat__mainBtn">
            Send Message
          </SendIcon>
        </div>
      </Grid>
    </Container>
  );
}

export default Chat;
