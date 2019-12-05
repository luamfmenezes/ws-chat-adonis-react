import React, { useState, useEffect } from "react";

import { Container, User } from "./styles";

import api from "../../services/api";
import { toast } from "react-toastify";

export default function Dashboard({history}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (err) {
        toast.error("Erro ao buscar usuários");
      }
    }
    getUsers();
  }, []);

  return (
    <Container>
      <h1>Usuários</h1>
      {users.map(profile => (
        <User key={profile.id} onClick={() => history.push(`/chat/${profile.id}`)}>
          <img
            src={`https://api.adorable.io/avatars/50/${profile.email}.png`}
            alt="Profile"
          />
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.email}</p>
          </div>
        </User>
      ))}
    </Container>
  );
}
