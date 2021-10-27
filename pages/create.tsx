import type { NextPage } from "next";
import styled from "styled-components";
import { useMemo, useState } from "react";
import { LatLngBounds } from "leaflet";
import dynamic from "next/dynamic";
import HttpController from "../controllers/HttpController";
import { Form, IFormValues } from "../components/Form";
import IRequestDesign from "../types/RequestCreateDesign.type";

const StyledCreatePage = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: hidden;
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
        <Map setSelectedBounds={setSelectedBounds} />
      </div>
      <Form onSubmit={onSubmit}></Form>
    </StyledCreatePage>
  );
};

export default Create;
