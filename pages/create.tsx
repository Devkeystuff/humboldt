import type { NextPage } from "next";

import { useEffect, useMemo, useState } from "react";
import { LatLngBounds } from "leaflet";
import dynamic from "next/dynamic";
import HttpController from "../controllers/HttpController";
import { Form, IFormValues } from "../components/Form";
import IRequestDesign from "../types/RequestCreateDesign.type";

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
    <div>
      <div>
        <Map setSelectedBounds={setSelectedBounds} />
      </div>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Create;
