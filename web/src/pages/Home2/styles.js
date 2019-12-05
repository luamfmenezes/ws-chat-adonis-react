import styled from "styled-components";

export const Container = styled.div``;
export const Status = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin:1rem;
  background: ${props => props.status ? '#67ff67' : '#ff6767'}
`;
