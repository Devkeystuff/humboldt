import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  ControlledLayerProps,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
  useMapEvents,
  useMap,
  useMapEvent,
  FeatureGroup,
  LayersControl,
} from "react-leaflet";
import SelectArea from "leaflet-area-select";
import L from "leaflet";
import _, { update } from "lodash";
import styled from "styled-components";
import axios from "axios";

const AreaSelect = () => {
  const [bounds, setBounds] = useState([
    [0, 0],
    [0, 0],
  ]);
  const map = useMap();
  console.log(map);

  useEffect(() => {
    map.selectArea.enable();

    map.on("areaselected", (e) => {
      // console.log(e.bounds.toBBoxString()); // lon, lat, lon, lat
      confirmSelect(
        e.bounds.getWest(),
        e.bounds.getNorth(),
        e.bounds.getEast(),
        e.bounds.getSouth()
      );
      // L.rectangle(e.bounds, { color: "blue", weight: 1 }).addTo(map);
    });
    // You can restrict selection area like this:
    const bounds = map.getBounds().pad(-0.25);
    setBounds(bounds);
    // check restricted area on start and move
    map.selectArea.setValidate((layerPoint) => {
      return bounds.contains(map.layerPointToLatLng(layerPoint));
    });
  }, []);

  const startSelect = () => {};

  const stopSelect = () => {
    map.selectArea.setValidate();
  };

  const confirmSelect = (w, n, e, s) => {
    console.log("sent request");

    var requestOptions = {
      method: "GET",
      mode: "no-cors",
    };

    fetch(
      `https://portal.opentopography.org/API/globaldem?demtype=SRTMGL3&south=${s}&north=${n}&west=${w}&east=${e}`,
      requestOptions
    )
      .then((response) => response.arrayBuffer())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <Rectangle
      bounds={bounds}
      pathOptions={{ opacity: 1, weight: 0, color: "green" }}
    />
  );
};

export const Map = (props) => {
  return (
    <MapContainer
      selectArea
      center={[51.505, -0.09]}
      style={{
        width: "80vw",
        height: "50vh",
        minHeight: "1000px",
        margin: "auto",
      }}
      zoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <AreaSelect />
    </MapContainer>
  );
};
