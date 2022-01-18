import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { geolocated, GeolocatedProps } from 'react-geolocated';
import { LayerAreaSelect } from './LayerAreaSelect';
import { LatLng, LatLngBounds } from 'leaflet';
import { Button } from './styled/Button.styled';

export interface Props {
  setSelectedBounds: (bounds: LatLngBounds) => void;
  selectedBounds: LatLngBounds | null;
}

const Map: React.FC<Props & GeolocatedProps> = props => {
  const [bounds, setBounds] = useState<LatLngBounds>(new LatLngBounds(new LatLng(0, 0), new LatLng(0, 0)));

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
          height: '60vh',
          minHeight: '500px',
          boxShadow: '0px 8px 100px 0px rgba(0, 0, 0, 0.226)',
          borderRadius: '10px',
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
          selectTrigger={props.selectedBounds}
          selectedColor={'#AAD725'}
          color={'#fff'}
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
