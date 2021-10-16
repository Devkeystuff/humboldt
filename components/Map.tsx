import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { geolocated, GeolocatedProps } from "react-geolocated";
import { LayerAreaSelect } from "./LayerAreaSelect";
import { LatLng, LatLngBounds } from "leaflet";
import { Dispatcher, DispatcherEvents } from "../globals/Dispatcher";

interface IMapProps {
  setSelectedBounds: (bounds: LatLngBounds) => void;
}

const Map: React.FC<IMapProps & GeolocatedProps> = (
  props: IMapProps & GeolocatedProps
) => {
  const [bounds, setBounds] = useState<LatLngBounds>();

  useEffect(() => {
    Dispatcher.addListener(DispatcherEvents.SELECT_BOUNDS, () => {
      console.log("update bounds", bounds);
      props.setSelectedBounds(bounds);
    });
    return () => {
      Dispatcher.removeListener(
        DispatcherEvents.SELECT_BOUNDS,
        props.setSelectedBounds
      );
    };
  }, []);

  const onNewBounds = (bounds: LatLngBounds) => {
    setBounds(bounds);
  };

  return !props.isGeolocationAvailable ? (
    <div>Geolocation not available</div>
  ) : !props.isGeolocationEnabled ? (
    <div>Geoloction is not enabled</div>
  ) : props.coords ? (
    <MapContainer
      selectArea
      center={[props.coords.latitude, props.coords.longitude]}
      style={{
        width: "80vw",
        height: "50vh",
        minHeight: "1000px",
        margin: "auto",
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
        onNewBounds={onNewBounds}
      />
    </MapContainer>
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
