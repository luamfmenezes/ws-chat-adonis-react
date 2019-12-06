import React, { useEffect, useState, useMemo } from "react";

import {
  Container,
  Content,
  Header,
  Controller,
  Messages,
  Message
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import api from "../../services/api";

export default function Chat({ match }) {
  const { id } = match.params;
  const [loading, setLoading] = useState(true);
  const [recipient, setRecipent] = useState({});
  const [text, setText] = useState("");
  const user = useSelector(state => state.user.profile);
  const messages = useSelector(state => state.chat.messages);

  const dispatch = useDispatch();


  useEffect(() => {
    async function getRecipient(){
      const response = await api.get(`/users/${id}`);
      setRecipent(response.data);
      setLoading(false);
    }
    getRecipient();
  }, []);

  useEffect(() => {
    dispatch({ type: "REQUEST_SUBSCRIPTION", id: user.id });
  }, []);

  const sendMessage = () => {
    dispatch({
      type: "REQUEST_SEND_MESSAGE",
      id: user.id,
      data: { to: recipient.id, content: text }
    });
  };

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
          {messages.map((el,index) => (
            <Message key={index} owner={el.owner} error={!!el.error}>
              {el.content}
            </Message>
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
