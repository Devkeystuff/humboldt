import styled from "styled-components";


export const StyledSteps = styled.div`
  color: white;
  font-family: Raleway;
  position: relative;
  margin 0 auto;
  width: 70%;

  h2{
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
    margin-top: 50px;
    padding: 0px 0 150px 0;
    display: flex;
    justify-content: space-between;

    div{
      background-color: gray;
      display: flex;
      flex-direction: column;
      width: 26%;
      height: 500px;
      background: linear-gradient(150deg, rgba(255, 255, 255, 0.4), rgba(255,255,255, 0.1));
      border: 3px solid rgba(255, 255, 255, 0.34);
      border-radius: 10px;
      filter: opacity(100%);

      img{
        width:90px;
        height:90px;
        margin: 100px auto 20px;
      }
      p{
        margin: 10px auto;
        width: 70%;
        text-align: center;
        font-size: 20px;
      }
      .steps-tutorial{
        font-family: Source Code Pro;
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.34);
      }
    }
  }
`;
