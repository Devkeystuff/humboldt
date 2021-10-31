import type { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { LatLngBounds } from "leaflet";
import dynamic from "next/dynamic";
import HttpController from "../controllers/HttpController";
import { Form, IFormValues } from "../components/Form";
import { StyledForm } from "../components/styled/Form.styled.ts";
import IRequestDesign from "../types/RequestCreateDesign.type";

const StyledCreatePage = styled.div`
  display: flex;
  width:95%;
  margin: 0 auto;
  padding: 0 7%;
  position: relative;

  h1{
    font-family: Raleway;
    margin: 0px 0 20px 0;
    font-size: 63px;
    font-weight: 900;
    text-shadow: -1px -1px 0 #AAD725, 1px -1px 0 #AAD725, -1px 1px 0 #AAD725, 1px 1px 0 #AAD725;
    color: black;

    ::before{
      content: "SELECT A PLACE";
      position:absolute;
      margin: -3px;
      color: white;
      text-shadow: none;
    }
  }

  .lower-part{
    display: flex;
  }

  .shirt-preview{
    position: relative;
    img{
      width:500px;
      height: auto;
      position: absolute;
      top: 5vh;
      left: 7.5vw;
    }
  }
`;

const Create: NextPage = () => {
  // Disable SSR for Map component
  // useMemo() disables unnecessary component updates which could cause Map flickering
  const Map = useMemo(
    () =>
      dynamic(() => import("../components/Map"), {
        ssr: false,
        loading: () => <p>Map is loading</p>,
      }),
    []
  );

  const [selectedBounds, setSelectedBounds] = useState<LatLngBounds>();

  const onSubmit = (data: IFormValues) => {
    console.log("subtmi");
    if (!selectedBounds) {
    }
    const design: IRequestDesign = {
      title: data.title,
      description: data.description,
      email: data.email,
      west: selectedBounds.getWest(),
      north: selectedBounds.getNorth(),
      east: selectedBounds.getEast(),
      south: selectedBounds.getSouth(),
    };
    HttpController.generateDesign(design);
  };

  return (
    <StyledCreatePage>
      <div>
        <h1>SELECT A PLACE</h1>
        <Map setSelectedBounds={setSelectedBounds} />
        <div className="lower-part">
          <Form onSubmit={onSubmit}></Form>
          <div className="shirt-preview">
            <img src="/images/shirts-corners.png"></img>
          </div>
        </div>
      </div>
    </StyledCreatePage>
  );
};

export default Create;
