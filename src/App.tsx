import { useState, useEffect, FC } from "react";
// import { over } from "stompjs";
// import SockJS from "sockjs-client";
import React from "react";
import "./App.css";
import { AppState } from "./components/types/appTypes";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { HarisInfo } from "./components/types/HarisInfo";
import { v4 as uuidv4 } from 'uuid';
// hi you got a problem mite
import { generateErrorMessage } from "./components/utilities/ErrorHandler";
import { appendOwnerState } from "@mui/base";
var stompClient: any = null;
var key: string = uuidv4();
function constructAppState(gameInfo: HarisInfo) {
  const appState: AppState = {
    gameInfo: gameInfo,
    setGameInfo: useState(gameInfo),
    message: "",
    setMessage: useState(""),
    sender: "",
    setSender: useState(""),
    receiver: "",
    passwordPackage: useState(""),
    usernamePackage: useState(""),
    setReceiver: useState(""),
    namePackage: useState(""),
    returnCodePackage: useState(0),
    keyPackage: useState(key),
    screenPackage: useState(""),
    errorPackage: useState(false),
    errorMessagePackage: useState(""),
  };
  return appState;
}

function App() {
  const gameInfo: HarisInfo = {
    message: "",
  };

  // const [isError, setIsError] = useState<boolean>(false);
  // const [errorMessage, setErrorMessage] = useState<string>("");
  // const hooks: AppState = constructAppState(gameInfo);

  function onConnected() {}
  function onError() {}

  function GetBitches() {
    stompClient.send(
      "/app/touchgrass",
      {},
      JSON.stringify({
        ...gameInfo,
      })
    );
  }

  const connect = () => {
    let Sock = new SockJS("http://maxwellolmen.com:8082/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  function updateName(event: React.FormEvent<HTMLInputElement>) {
    let value: string = event.currentTarget.value;

    gameInfo.message = value;
  }
  
  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="login-container">
      <center>
        <label>Name: </label>
        <input type="text" id="name" name="name" onChange={updateName}/>
        <button onClick={GetBitches}>
          Touch Grass
        </button>
      </center>
    </div>
  );
}

export default App;