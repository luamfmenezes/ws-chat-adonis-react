import styled from "styled-components";

export const Container = styled.div`
  height: 64px;
  background: #333;
  background: rgba(0, 0, 0, 0.7);
  background: #32a89c;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    div {
      height:20px;
      width:1px;
      margin:0 1rem;
      background: #eee;
    }
    a {
      font-weight: bold;
      color: #fff;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    strong {
      display: block;
      color: #fff;
    }
    p {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #ddd;
    }
  }
  img {
    width: 88px;
    height: 88px;
    border-radius: 8px;
    border: 2px solid #fff;
    box-shadow:1px 1px 3px 1px rgba(0,0,0,0.1);
  }
`;
