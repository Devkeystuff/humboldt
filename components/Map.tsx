import React, {
  MutableRefObject,
  Ref,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  MapContainer,
  TileLayer,
  Rectangle,
  useMap,
  LayerGroup,
  Marker,
  Circle,
  CircleProps,
} from "react-leaflet";
import L, { circle, LatLng, LatLngBounds, Layer, point } from "leaflet";
import styled from "styled-components";
import Router from "next/router";
import { geolocated, GeolocatedProps } from "react-geolocated";

const RADIUS = 1000;

interface IMapProps {
  geolocated: GeolocatedProps;
}

interface IAreaSelectProps {
  lat: number;
  lng: number;
}

const markerCenter = new L.Icon({
  iconUrl: "marker-center.png",
  iconAnchor: [12.5, 12.5],
  iconSize: [25, 25],
});

const AreaSelect = (props: IAreaSelectProps) => {
  const circleRef: Ref<L.Circle<any>> = useRef<L.Circle<any>>(null);

  const [center, setCenter] = useState<LatLng>(
    new LatLng(props.lat, props.lng)
  );
  const [bounds, setBounds] = useState<LatLngBounds>(
    new LatLngBounds(new LatLng(0, 0), new LatLng(0, 0))
  );

  useEffect(() => {
    const newBounds = circleRef.current?.getBounds();
    newBounds && setBounds(newBounds);
  }, [center]);

  const confirmSelect = (w: number, n: number, e: number, s: number) => {
    console.log("sent request");

    var requestOptions: RequestInit = {
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
    <LayerGroup>
      <Marker
        draggable
        icon={markerCenter}
        position={center}
        eventHandlers={{
          drag: (e: any) => {
            setCenter(new LatLng(e.latlng.lat, e.latlng.lng));
          },
        }}
      />

      <Rectangle
        bounds={bounds}
        pathOptions={{
          weight: 3,
          color: "#AAD725",
        }}
      />
      <Circle
        pathOptions={{ opacity: 0, fillOpacity: 0 }}
        center={center}
        radius={RADIUS}
        ref={circleRef}
      />
    </LayerGroup>
  );
};

const Map = (props: GeolocatedProps) => {
  return !props.isGeolocationAvailable ? (
    <div>Geolocation not available</div>
  ) : !props.isGeolocationEnabled ? (
    <div>Geoloction is not enabled</div>
  ) : props.coords ? (
    <MapContainer
      selectArea
      center={[51.505, -0.09]}
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
      <AreaSelect lat={props.coords.latitude} lng={props.coords.longitude} />
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
