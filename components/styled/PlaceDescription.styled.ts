import styled from "styled-components";

export const StyledDesc = styled.div`
    width: 50%;
    padding-left: 25px;


    h1 {
        font-size: 95px;
        color: white;
        line-height: 80px;
        font-weight: 900;
        margin: 0;
        text-transform: uppercase
    }

    hr {
        margin: 35px 0 35px 0;
        width: 300px;
        border: 1px solid #AAD725;
    }

    p { 
        font-family: Source Code Pro;
        color: white;
        margin: 0;
        text-align: justify;
    }

    @media only screen and (max-width: 1000px) { 
        order: 0; 
        width: 100%;
        padding: 0;
        
        h1 {
            text-align: center;
            font-size: 75px;
        }

        p {
            text-align: justify;
            padding: 0 25px;
            text-align: center;
        }

        hr {
            width: 100%;
        }
  
      }


`