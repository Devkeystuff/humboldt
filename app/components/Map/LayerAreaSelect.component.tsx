import React, { Ref, useEffect, useRef, useState } from 'react';
import L, { LatLng, LatLngBounds } from 'leaflet';
import { Circle, LayerGroup, Marker, Rectangle } from 'react-leaflet';

const RADIUS = 10000;

const markerCenter = new L.Icon({
  iconUrl: 'marker-center.png',
  iconAnchor: [12.5, 12.5],
  iconSize: [25, 25],
});

interface IAreaSelectProps {
  center0: LatLng;
  color: string;
  selectedColor: string;
  selectTrigger: any;
  onNewBounds: (bounds: LatLngBounds) => void;
}

export const LayerAreaSelect: React.FC<IAreaSelectProps> = (props: IAreaSelectProps) => {
  const circleRef: Ref<L.Circle<any>> = useRef<L.Circle<any>>(null);

  const [isSelected, setIsSelected] = useState(false);
  const selectTrigger = props.selectTrigger;
  useEffect(() => {
    setIsSelected(true);
  }, [selectTrigger]);

  const [center, setCenter] = useState<LatLng>(new LatLng(props.center0.lat, props.center0.lng));
  const [bounds, setBounds] = useState<LatLngBounds>(new LatLngBounds(new LatLng(0, 0), new LatLng(0, 0)));

  // Update bounds on move
  // React missing dependency workaround
  const onNewBounds = props.onNewBounds;
  useEffect(() => {
    if (isSelected) setIsSelected(false);
    const newBounds = circleRef.current?.getBounds();
    if (newBounds) {
      const width = newBounds.getNorthWest().lng - newBounds.getSouthEast().lng;
      const actualBounds = new LatLngBounds(
        new LatLng(center.lat - width / 2, center.lng - width / 2),
        new LatLng(center.lat + width / 2, center.lng + width / 2),
      );
      setBounds(newBounds);
      onNewBounds(actualBounds);
    }
  }, [center, onNewBounds]);

  const cursorColor = isSelected ? props.selectedColor : props.color;
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
          color: cursorColor,
        }}
      />
      <Circle pathOptions={{ opacity: 0, fillOpacity: 0 }} center={center} radius={RADIUS} ref={circleRef} />
    </LayerGroup>
  );
};
