import styled from "styled-components";
import IndexVideo from "../IndexVideo.tsx";

export const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 50px auto;
  width: 80vw;
  font-family: Raleway;
  height: 400px;

  & div {
    color: white;
    width: 50%;
    height: 385px;

    h2 {
      font-size: 40px;
      margin: 10px 5vw 0 0;
      font-weight: 900;
      float: right;
      color: black;
      text-shadow: -1px -1px 0 #AAD725, 1px -1px 0 #AAD725, -1px 1px 0 #AAD725, 1px 1px 0 #AAD725;
    }

    h2:nth-child(2) {
      margin: -27px 5.15vw 0 0;
      line-height: 2px;
      color: white;
      font-weight: 900;
      text-shadow: none;
    }

    p {
      font-family: Source Code Pro;
      width: 70%;
      float: right;
      text-align: right;
      margin: 50px 5vw 20px 0;
    }

    iframe{
      width: 75%;
      height: 100%;
      margin: 0 4.5vw;
    }
  }
`
