import React, { useEffect, useState, useMemo } from "react";

import {
  Container,
  Content,
  Header,
  Controller,
  Messages,
  Message
} from "./styles";
import { useSelector } from "react-redux";
import api from "../../services/api";
import Ws from "@adonisjs/websocket-client";

export default function Chat({ match }) {
  const { id } = match.params;
  const [loading, setLoading] = useState(true);
  const [recipient, setRecipent] = useState({});
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.user.profile);

  const ws = useMemo(() => Ws("ws://localhost:3333").withJwtToken(token), [
    token
  ]);
  const channel = useMemo(() => `chat:${user.id}`, [user.id]);

  useEffect(() => {
    ws.connect();
  }, [ws]);

  useEffect(() => {
    const chat = ws.getSubscription(channel) || ws.subscribe(channel);

    chat.on("message", ({ content, to }) => {
      setMessages([...messages, { content, owner: to !== user.id }]);
    });

    chat.on("ready", () => alert("ready"));

    chat.on("open", () => alert("open"));

    chat.on("error", () => alert("error"));

    chat.on("leaveError", () => alert("leaveError"));

    chat.on("close", () => alert("close"));
  }, [channel, messages, user.id, ws]);

  const sendMessage = () => {
    const chat = ws.getSubscription(channel) || ws.subscribe(channel);
    chat.emit("message", { content: text, to: recipient.id });
    setText("");
  };

  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get(`/users/${id}`);
        setRecipent(response.data);
        setLoading(false);
      } catch (err) {}
    }
    getUser();
  }, [id]);

  return (
    <Container>
      <Content>
        <Header>
          {!loading && (
            <>
              <img
                src={`https://api.adorable.io/avatars/150/${recipient.email}.png`}
                alt="user"
              />
              <div>
                <strong>Name: {recipient.name}</strong>
                <p>Email: {recipient.email}</p>
              </div>
            </>
          )}
        </Header>
        <Messages>
          {messages.map(el => (
            <Message key={el.id} owner={el.owner}>{el.content}</Message>
          ))}
        </Messages>
        <Controller>
          <img
            src={`https://api.adorable.io/avatars/150/${user.email}.png`}
            alt="user"
          />
          <textarea value={text} onChange={e => setText(e.target.value)} />
          <button onClick={sendMessage}>Enviar</button>
        </Controller>
      </Content>
    </Container>
  );
}