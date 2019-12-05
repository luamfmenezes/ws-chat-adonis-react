import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Container, Status } from "./styles";

import Ws from "@adonisjs/websocket-client";

export default function Home() {
  const [status, setStatus] = useState(false);
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");
  const [token, setToken] = useState("2");
  const [tokenText, setTokenText] = useState("");

  const ws = useMemo(() => Ws("ws://localhost:3333").withJwtToken(token), [
    token
  ]);
  const chat = useMemo(() => ws.subscribe("chat:1"), [ws]);

  useEffect(() => {
    ws.connect();
  }, [ws]);

  const memoizedCallback = () => {
    setText(text);
  };

  useEffect(() => {
    alert("changing");
    try {
      chat.on("message", data => memoizedCallback(text + data.text));

      chat.on("open", () => setText(text + "open"));

      chat.on("error", () => setText(text + "error"));

      chat.on("leaveError", () => setText(text + "leaveError"));

      chat.on("close", () => setText(text + "close"));
    } catch (err) {
      alert("error");
    }
  }, [chat, memoizedCallback, text, ws]);

  const handdlesend = () => {
    try {
      const chat = ws.getSubscription("chat:1");
      chat.emit("message", { text: inputText });
    } catch (err) {
      alert(err);
    }
    setInputText("");
  };

  const handdleToken = () => {
    setToken(tokenText);
    setTokenText("");
  };

  return (
    <Container>
      <Status status={status} />
      <p>{text}</p>
      <input value={inputText} onChange={e => setInputText(e.target.value)} />
      <button onClick={handdlesend}>Enviar</button>
      <br />
      <input value={tokenText} onChange={e => setTokenText(e.target.value)} />
      <button onClick={handdleToken}>Token</button>
    </Container>
  );
}
