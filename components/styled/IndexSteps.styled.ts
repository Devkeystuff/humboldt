import styled from "styled-components";
import IndexSteps from "../IndexSteps.tsx";

export const StyledSteps = styled.div`
  color: white;
  font-family: Raleway;
  position: relative;

  h2{
    margin: 0 5vw 50px 15.5%;
    font-size: 45px;
    font-weight: 900;
    text-shadow: -1px -1px 0 #AAD725, 1px -1px 0 #AAD725, -1px 1px 0 #AAD725, 1px 1px 0 #AAD725;
    color: black;

    ::before{
      width: 500px;
      content: "IT'S JUST THAT EASY";
      position:absolute;
      margin: -3px;
      color: white;
      text-shadow: none;
    }
  }

  .StepsDiv{
    margin-top: 20px;
    padding: 0px 0 150px 0;
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
