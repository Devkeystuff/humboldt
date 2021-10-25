import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledCreatePage = styled.div`
  display: flex;
  justify-content: center;

  & ul {
    overflow-y: scroll;
    display: inline-flex;
    flex-direction: column;
    padding: 0;
    width: 40%;
    height: 80vh;
    margin: 20px 50px 0 0;
    list-style:none;
    align-content: center;

    &::-webkit-scrollbar {
      width: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.34);
      border-radius: 2px;
    }
    li{
      display: flex;
      width: 95%;
      height: 140px;
      margin: 0 0 64px 0;
      background: linear-gradient(91.29deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.06) 100%);
      mix-blend-mode: normal;
      border: 1px solid rgba(255, 255, 255, 0.34);
      box-sizing: border-box;
      border-radius: 10px;

      :last-child{
        margin:0;
      }
      img{
        background-color: gray;
        width:100px;
        height: 100px;
        margin: auto;
      }

      div{
        width:80%;

        h3{
          font-family: Raleway;
          color: white;
          font-weight: 900;
          font-size: 25px;
          margin-bottom: 10px;
        }
        p{
          font-family: "Source Code Pro", sans-serif;
          color: white;
          font-weight: 400;
          font-size: 15px;
          margin-top: 5px;
          width: 90%;
        }
      }
    }
  }

  .PlaceDisplay{
    height: 80vh;
    width: 40%;
    margin-top: 20px;
    background-color: black;
    border-radius: 10px;
    box-shadow: 5px 22px 40px rgba(116, 185, 147, 0.26);
  }
`;

const Places: NextPage = () => {
  return (
    <StyledCreatePage>
      <ul>
        <li>
          <img></img>
          <div>
            <h3>Place Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum morbi tellus euismod ornare semper nisl, quam convallis.</p>
          </div>
        </li>
        <li>
          <img></img>
          <div>
            <h3>Place Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum morbi tellus euismod ornare semper nisl, quam convallis.</p>
          </div>
        </li>
        <li>
          <img></img>
          <div>
            <h3>Place Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum morbi tellus euismod ornare semper nisl, quam convallis.</p>
          </div>
        </li>
        <li>
          <img></img>
          <div>
            <h3>Place Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum morbi tellus euismod ornare semper nisl, quam convallis.</p>
          </div>
        </li>
        <li>
          <img></img>
          <div>
            <h3>Place Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum morbi tellus euismod ornare semper nisl, quam convallis.</p>
          </div>
        </li>
        <li>
          <img></img>
          <div>
            <h3>Place Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum morbi tellus euismod ornare semper nisl, quam convallis.</p>
          </div>
        </li>
      </ul>

      <div className="PlaceDisplay">
        dsa
      </div>
    </StyledCreatePage>
)};

export default Places;
