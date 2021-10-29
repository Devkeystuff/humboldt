import styled from "styled-components";
import IndexWelcome from "../IndexWelcome.tsx";

export const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  width: 80vw;
  height: 700px;
  margin: 0 auto;
  font-family: Raleway;

  & div {
    width: 50%;

    h1{
      font-size: 90px;
      color: white;
      line-height: 80px;
      margin: 120px 0px 20px 50px;
      font-weight: 900;

      p{
        margin:0;
        color: #AAD725;
        font-family: Raleway;
        font-style: italic;
      }
    }

    p{
      font-family: Source Code Pro;
      color:white;
      width: 520px;
      margin: 10px 0 20px 55px;
    }
  }
`;
