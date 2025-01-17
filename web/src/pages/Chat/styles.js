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
background: rgba(0, 0, 0, 0.1);
background: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
  padding:0.5rem;
`;

export const Header = styled.div`
  background: #32a89c;
background: rgba(0, 0, 0, 0.2);
  background: #fff;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  border-radius:4px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #888;
  }
  div {
    margin-left: 2rem;
    padding-left: 2rem;
    border-left: 1px solid #ccc;
    color: #666;
    p {
      opacity: 0.85;
      margin-top:8px;
    }
  }
`;

export const Messages = styled.div`
  width: 100%;
  height:250px;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  max-height:100%;
`;

export const Message = styled.p`
max-width:50%;
  align-self: ${props => (props.owner ? "baseline" : "flex-end")};
  padding: 8px 16px;
  color: ${props => (props.owner ? "#333" : "#fff")};
  background: ${props => (props.owner ? "#eee" : "#32a89c")};
  opacity: ${props => (props.error ? 0.3 : 1)};
  border-radius: 4px;
  margin: 4px 0;
`;

export const Controller = styled.div`
  /* padding: 1rem; */
  display: flex;
  align-items: center;
  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin:0 1rem 0  0.5rem;
    border: 3px solid #eee;
    box-shadow:1px 1px 3px 1px rgba(0,0,0,0.1);
  }
  input {
    flex: 1;
    background: #ddd;
    background: rgba(0,0,0,0.2);
    border: 0;
    height: 35px;
    border-radius: 4px;
    color:#fff;
    padding-left:1rem;
  }
  button {
    margin-left: 4px;
            height: 35px;
            background: #3b9eff;
            /* font-weight: bold; */
            padding:0 1rem;
            color: #fff;
            border: 0px;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;
            &:hover {
                background: #2b8edf;
            }
        }

`;
