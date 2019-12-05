import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  flex: 1;
  height: 100%;
`;

export const Content = styled.div`
  width: 800px;
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  background: #32a89c;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  div {
    margin-left: 1rem;
    padding-left: 1rem;
    border-left: 1px solid #ccc;
    color: #fff;
    p {
      opacity: 0.6;
    }
  }
`;

export const Messages = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Message = styled.p`
  align-self: ${props => (props.owner ? "baseline" : "flex-end")};
  padding: 8px 16px;
  color: #666;
  background: ${props => (props.owner ? "#eee" : "#32a89c33")};
  opacity: ${props => (props.error ? 0.3 : 1)};
  border-radius: 4px;
  margin: 4px 0;
`;

export const Controller = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
    border: 3px solid ${props => (props.myState ? "#67ff67" : "#ff6767")};
    box-shadow:1px 1px 3px 1px rgba(0,0,0,0.1);
  }
  textarea {
    flex: 1;
    background: #ddd;
    border: 0;
    height: 35px;
    border-radius: 4px;
  }
  button {
    height: 35px;
    padding: 0 1rem;
    border: 0px;
    background: #6688ff;
    border-radius: 4px;
    margin-left: 4px;
    color: #fff;
    font-size: bold;
  }
`;
