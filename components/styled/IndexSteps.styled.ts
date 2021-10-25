import styled from "styled-components";
import IndexSteps from "../IndexSteps.tsx";

export const StyledSteps = styled(IndexSteps)`
  color: white;
  font-family: Raleway;
  position: relative;

  & h2 {
    position: absolute;
    font-size: 63px;
    font-weight: 900;
    margin: 53px 0 0px 303px;
    text-shadow: -1px -1px 0 #AAD725, 1px -1px 0 #AAD725, -1px 1px 0 #AAD725, 1px 1px 0 #AAD725;
    color: black;
    line-height: 0px;
  }

  & h2:nth-child(2){
    margin: 50px 0 50px 300px;
    line-height: 0px;
    text-shadow: none;
    font-weight: 900;
    color: white;
  }

  .StepsDiv{
    margin-top: 50px;
    padding: 150px 0 150px 0;
    display: flex;
    justify-content: center;

    div{
      background-color: gray;
      width: 350px;
      height: 500px;
      margin: 5px 70px 0 70px;
      background: linear-gradient(150deg, rgba(255, 255, 255, 0.4), rgba(255,255,255, 0.1));
      border: 3px solid rgba(255, 255, 255, 0.34);
      border-radius: 10px;
      filter: opacity(100%);

      p{
        mix-blend-mode: overlay;
      }
    }
  }
`;
