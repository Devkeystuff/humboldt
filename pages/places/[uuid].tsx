import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import Terrain from "../../components/Terrain";
import HttpController from "../../controllers/HttpController";
import IResponseGetDesign from "../../types/ResponseGetDesign.type";
import { StyledDesc } from "../../components/styled/PlaceDescription.styled";
import styled from "styled-components";

const StyledPlace = styled.div`
  width: 80vw;
  margin: 120px auto 0 auto;
  font-family: Raleway;
  display: flex;
  flex-wrap: wrap;

  .terrain-model {
    width: 50%;
    height: 40vh;
  }

  .qrcode-container {
    display: flex;
    width: 45%;
    align-items: flex-start;
    margin-top: 80px;

    .qrcode-description {
      margin-left: 55px;

      h2 {
        display: inline;
        font-size: 33px;
        color: white;
        font-weight: 800;
        margin: 0;
        padding: 0;
        text-transform: uppercase;
        border-bottom: 2px solid #aad725;
      }

      p {
        font-family: Source Code Pro;
        color: white;
        margin: 0;
        margin-top: 20px;
        font-size: 14px;
        text-align: justify;
      }
    }

    #qrcode {
      width: 180px;
      margin-top: 5px;
      color: white;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 90vw;
    margin: 0 auto;
    flex-flow: column nowrap;
    align-items: center;

    .terrain-model {
      order: 1;
      margin: 35px auto 75px auto;
      width: 90%;
    }

    .qrcode-container {
      order: 2;
      margin: 0;
      padding: 0 auto;
      width: 70%;
      flex-flow: column nowrap;
      text-align: center;

      .qrcode-description {
        order: 0;
        margin: 0;

        h2 {
          text-align: center;
          margin: 0 auto;
        }

        p {
          margin: 20px auto;
          width: 90%;
        }
      }

      .qrcode-img {
        order: 1;
        padding: 0;
        margin: 0 auto;
      }
    }
  }
`;

interface IPlaceProps {
  placeInfo: IResponseGetDesign;
}

const Place: NextPage<IPlaceProps> = (props) => {
  return (
    <StyledPlace>
      <div className="terrain-model">
        <Terrain
          elevation_img={props.placeInfo.elevation_map_img}
          texture_img="./mountains.png"
        />
      </div>
      <StyledDesc>
        <h1>{props.placeInfo.title}</h1>
        <hr />
        <p>{props.placeInfo.description}</p>
      </StyledDesc>
      <div className="qrcode-container">
        <div className="qrcode-img">
          <img id="qrcode" src={props.placeInfo.qr_code_img} alt="qrcode" />
        </div>
        <div className="qrcode-description">
          <h2>{props.placeInfo.edition_title}</h2>
          <p>{props.placeInfo.edition_desc}</p>
        </div>
      </div>
    </StyledPlace>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { uuid } = context.query;
  // const placeInfo: IResponseGetDesign = await HttpController.getPlace(uuid);
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST}/get_design?design_uuid=${uuid}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  // if (!placeInfo) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }
  // console.log(placeInfo);

  return {
    props: {
      data,
    },
  };
};

export default Place;
