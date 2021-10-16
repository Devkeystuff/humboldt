import type { NextPage } from "next";

import Map from "../components/Map";
import { useEffect, useState } from "react";
import { Dispatcher, DispatcherEvents } from "../globals/Dispatcher";
import { Button } from "../components/styled/Button.styled";
import { LatLngBounds } from "leaflet";

const Create: NextPage = () => {
  const [selectedBounds, setSelectedBounds] = useState<LatLngBounds>();

  useEffect(() => {
    console.log("selected bounds", selectedBounds);
  }, [selectedBounds]);
  const confirm = () => {};

  return (
    <div>
      <div>
        <Map setSelectedBounds={setSelectedBounds} />
        <Button onClick={() => Dispatcher.emit(DispatcherEvents.SELECT_BOUNDS)}>
          Select
        </Button>
      </div>
    </div>
  );
};

export default Create;
