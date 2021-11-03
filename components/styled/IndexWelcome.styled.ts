import styled from "styled-components";

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

    button{
      margin: 10px 0 0 50px;
    }

    p{
      font-family: Source Code Pro;
      color:white;
      width: 520px;
      margin: 10px 0 20px 55px;
    }
  }

  .shirtDisplay{
    position: relative;
    img{
      float: right;
      margin: 120px 70px;
      width: 420px;
      height: auto;
      z-index: 2;
    }
    #shirts-on-display{
      image-resolution: 300dpi snap;
      width:400px;
      height: auto;
      position: absolute;
      z-index: 1;

      right: 0;
    }
  }
`;
