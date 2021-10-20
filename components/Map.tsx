import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { geolocated, GeolocatedProps } from "react-geolocated";
import { LayerAreaSelect } from "./LayerAreaSelect";
import { LatLng, LatLngBounds } from "leaflet";
import { Button } from "./styled/Button.styled";

interface IMapProps {
  setSelectedBounds: (bounds: LatLngBounds) => void;
}

const Map: React.FC<IMapProps & GeolocatedProps> = (props) => {
  const [bounds, setBounds] = useState<LatLngBounds>();

  return !props.isGeolocationAvailable ? (
    <div>Geolocation not available</div>
  ) : !props.isGeolocationEnabled ? (
    <div>Geoloction is not enabled</div>
  ) : props.coords ? (
    <div>
      <MapContainer
        selectArea
        center={[props.coords.latitude, props.coords.longitude]}
        style={{
          zIndex: 1,
          width: "80vw",
          height: "50vh",
          minHeight: "500px",
          margin: "auto",
          boxShadow: "0px 8px 100px 0px rgba(0, 0, 0, 0.226)",
        }}
        zoom={6}
        scrollWheelZoom={true}
        zoomControl={false}
        minZoom={4}
        maxZoom={14}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <LayerAreaSelect
          center0={new LatLng(props.coords.latitude, props.coords.longitude)}
          onNewBounds={setBounds}
        />
      </MapContainer>
      <Button isMapButton onClick={() => props.setSelectedBounds(bounds)}>
        Select
      </Button>
    </div>
  ) : (
    <div>Getting location</div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(Map);
