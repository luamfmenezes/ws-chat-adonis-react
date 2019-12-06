import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:2rem;
  > h1{
      color:#fff;
      font-size:1rem;
      margin-bottom:1rem;
  }
`;

export const User = styled.div`
  width:400px;
  background:rgba(255,255,255,0.1);
  background:#fff;
  border-radius:4px;
  margin:4px;
  display:flex;
  align-items:center;
  padding:1rem;
  cursor: pointer;
  box-shadow:1px 1px 3px 1px rgba(0,0,0,0.1);
  img{
      border-radius:50%;
  }
  div{
      margin-left:1rem;
      padding-left:1rem;
      border-left:1px solid #aaa;
      color:#666;
      h1{
          font-size:1rem;
      }
      p{
          font-size:12px;
          opacity:0.6;
      }
  }
`;
