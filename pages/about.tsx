import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const StyledAboutPage = styled.div`
  margin: auto 20%;
  h2{
    color: white;
    font-weight: 900;
    width: 700px;
    font-family: Raleway;
    font-size: 120px;
    transition: 1s;

    ::before{
      content: "FUNGUS FANATICUS";
      position:absolute;
      margin: 5px;
      color: black;
      text-shadow: -1px -1px 0 #AAD725, 1px -1px 0 #AAD725, -1px 1px 0 #AAD725, 1px 1px 0 #AAD725;
      max-width: 700px;
      z-index: -1;
    }
  }

  div{
    display: flex;
    p{
      color: white;
      font-weight: 900;
      font-family: Raleway;
      font-size: 40px;
      width: 340px;
      margin: 85px 85px 0 0;
    }
    ul{
      display: flex;
      flex-direction: column;
      width: 300px;
      padding: 0;
      /*background-color: black;
      border-radius: 10px;
      box-shadow: 0px 0px 30px 10px rgb(116, 185, 147, 0.26);*/
      li{
        list-style:none;
        font-size: 20px;
        font-family: Raleway;
        color: white;
        margin: 10px auto;
      }
    }
  }
`;

const About: NextPage = () => {
  return <StyledAboutPage>
    <h2>FUNGUS FANATICUS</h2>
    <div>
      <p>Project Creators:</p>
      <ul>
        <li>Ronalds Palacis</li>
        <li>Artūrs Višņausks</li>
        <li>Valters Vieško</li>
        <li>Kārlis Blumbergs</li>
        <li>Toms Millers</li>
      </ul>
    </div>
  </StyledAboutPage>
};

export default About;
