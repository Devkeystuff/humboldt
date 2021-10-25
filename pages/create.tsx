import type { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { LatLngBounds } from "leaflet";
import dynamic from "next/dynamic";
import HttpController from "../controllers/HttpController";
import { Form, IFormValues } from "../components/Form";
import { StyledForm } from "../components/styled/Form.styled.ts";

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
  useEffect(() => {
    (async () => {
      let response = null;
      try {
        response = await HttpController.getElevationMap(selectedBounds);
      } catch (exc) {
        console.log(exc);
      }
    })();
  }, [selectedBounds]);

  const onSubmit = (data: IFormValues) => {
    console.log(data);
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
