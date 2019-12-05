import React, { useState, useEffect, useMemo } from "react";
import { Container, Status } from "./styles";

import Ws from "@adonisjs/websocket-client";

export default function Home() {
  const [status, setStatus] = useState(false);
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");

  const ws = useMemo(() => Ws("ws://localhost:3333",{ query: { token: 1 } }), []);
  const chat = useMemo(() => ws.subscribe("chat:1"), [
    ws
  ]);

  useEffect(() => {
    ws.connect();
  }, [chat, ws]);

  useEffect(() => {
    chat.on("message", data => setText(text + data.text));

    chat.on("open", () => setStatus(true));

    chat.on("error", () => setText(text + "error"));

    chat.on("leaveError", () => setStatus(false));

    chat.on("close", () =>  setStatus(false));
  }, [chat, text]);

  const handdlesend = () => {
    try {
      chat.emit("message", { text: inputText });
    } catch (err) {
      alert(err);
    }
    setInputText("");
  };

  return (
    <Container>
      <Status status={status} />
      <p>{text}</p>
      <input value={inputText} onChange={e => setInputText(e.target.value)} />
      <button onClick={handdlesend}>Enviar</button>
    </Container>
  );
}
