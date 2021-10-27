import styled from "styled-components";

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

    span{
      position: relative;
      h2{
        margin: 0 5vw 20px 0;
        float:right;
        font-size: 45px;
        font-weight: 900;
        text-shadow: -1px -1px 0 #AAD725, 1px -1px 0 #AAD725, -1px 1px 0 #AAD725, 1px 1px 0 #AAD725;
        color: black;

        ::before{
          width: 500px;
          content: "HOW IT'S DONE";
          position:absolute;
          margin: -3px;
          color: white;
          text-shadow: none;
        }
      }
    }

    p {
      font-family: Source Code Pro;
      width: 70%;
      float: right;
      text-align: right;
      margin: 0px 5vw 20px 0;
    }

    iframe{
      width: 75%;
      height: 100%;
      margin: 0 3vw;
    }
  }
`
