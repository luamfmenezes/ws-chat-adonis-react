import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(-90deg, #7159c1, #ab59c1);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;
    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0px;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0px;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;
            &:hover {
                background: #2b8edf;
            }
        }

        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }

        span{
            color:#fb6f91;
            align-self:center;
            text-align:center;
            margin-bottom:10px;

        }
    }
`;
