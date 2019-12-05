import React from "react";

import { Container, Content, Profile } from "./styles";
// import logoPurple from '../../assets/logopurple.svg';
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { FiMessageCircle } from "react-icons/fi";

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const handleLoggout = () => {};

  return (
    <Container>
      <Content>
        <nav>
          <FiMessageCircle size={32} color="#fff" />
          <div/>
          <Link to="/dashboard">USUÁRIOS</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <p onClick={handleLoggout}>Sair</p>
            </div>
            <img
              src={`https://api.adorable.io/avatars/150/${profile.email}.png`}
              alt="avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}