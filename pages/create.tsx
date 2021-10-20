import type { NextPage } from "next";

import { useEffect, useMemo, useState } from "react";
import { LatLngBounds } from "leaflet";
import dynamic from "next/dynamic";
import HttpController from "../controllers/HttpController";
import { Form, IFormValues } from "../components/Form";

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
    <div>
      <div>
        <Map setSelectedBounds={setSelectedBounds} />
      </div>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Create;
