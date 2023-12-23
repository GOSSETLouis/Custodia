import { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { addressContext } from "../../context/address.context";

export function CustomMap(): JSX.Element {
  const { address } = useContext(addressContext);
  return (
    <MapContainer center={[48.006_11, 0.199_556]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {address.map((value) => (
        <Marker key={value.id} position={[value.latitude, value.longitude]}>
          <Popup>{value.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
