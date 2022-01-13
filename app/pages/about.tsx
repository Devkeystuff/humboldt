import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const StyledAboutPage = styled.div`
  margin: auto 20%;
  position: relative;

  h2 {
    font-size: 120px;
    font-weight: 900;
    font-family: Raleway;
    text-shadow: -1px -1px 0 #aad725, 1px -1px 0 #aad725, -1px 1px 0 #aad725, 1px 1px 0 #aad725;
    color: black;

    ::before {
      width: 500px;
      content: 'FUNGUS FANATICUS';
      position: absolute;
      margin: -3px;
      color: white;
      text-shadow: none;
    }
  }

  div {
    display: flex;
    p {
      color: white;
      font-weight: 900;
      font-family: Raleway;
      font-size: 40px;
      width: 340px;
      margin: 85px 85px 0 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      width: 300px;
      padding: 0;
      /*background-color: black;
      border-radius: 10px;
      box-shadow: 0px 0px 30px 10px rgb(116, 185, 147, 0.26);*/
      li {
        list-style: none;
        font-size: 20px;
        font-family: Raleway;
        color: white;
        margin: 10px auto;
      }
    }
  }
`;

const About: NextPage = () => {
  return (
    <StyledAboutPage>
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
  );
};

export default About;
