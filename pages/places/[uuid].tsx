import { GetServerSideProps, NextPage } from "next";
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
      max-height: 500px;
    }

    .qrcode-container {
      display: flex;
      width: 45%;
      align-items: flex-start;
      margin-top: 80px;
  
      .qrcode-description {
        margin-left: 55px;

        h2 {
          font-size: 33px;
          color: white;
          font-weight: 800;
          margin: 0;
          padding: 0;
          text-transform: uppercase;
          border-bottom: 2px solid #AAD725;
          width: 200px;
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

      #qrcode{
        width: 180px;
        margin-top: 5px;
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

      .qrcode-container  {
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

`

const Place: NextPage<IResponseGetDesign> = (props) => {
  return (
    <StyledPlace>
      <div className="terrain-model">
        <Terrain elevation_img={""} texture_img={""} />
      </div>
      <StyledDesc>
        <h1>San Francisco</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec ex dui. Nunc in gravida massa, ut tempus lorem. In urna nisi, vehicula vitae augue eget, dictum luctus eros.
          Quisque non enim nec purus varius dignissim. Nulla ut lorem ac mi malesuada gravida sed a lorem. Aenean efficitur velit eu urna volutpat ullamcorper. Vestibulum cursus vitae nisi
          quis pellentesque. Quisque nec risus tortor. Donec odio dolor, sollicitudin eu consequat non, pharetra ac augue. Phasellus pharetra lacinia diam id faucibus.</p>
      </StyledDesc>
      <div className="qrcode-container">
        <div className="qrcode-img">
          <img id="qrcode" src="/qrcode.png" alt="qrcode" />
        </div>
        <div className="qrcode-description">
          <h2>Humboltd.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec ex dui. Nunc in gravida massa, ut tempus lorem. In urna nisi, vehicula vitae augue eget, dictum luctus eros. </p>
        </div>
      </div>
    </StyledPlace>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { uuid } = context.query;
  // const placeInfo: IResponseGetDesign = await HttpController.getPlace(uuid);

  // if (!placeInfo) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      // placeInfo,
    },
  };
};

export default Place;
