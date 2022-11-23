import { useState } from "react";
import MapBox from "react-map-gl";

const Map = ({ coordinates }) => {
  const [viewport, setViewport] = useState({
    latitude: coordinates.lat,
    longitude: coordinates.lng,
    zoom: 14,
  });
  return (
    <div>
      <MapBox
        initialViewState={{ ...viewport }}
        mapboxAccessToken={
          "pk.eyJ1IjoidW1hcmtoYW42NiIsImEiOiJjbGF0NWY3bWgwbXVjNDBvdnB2dmJvdWxoIn0.4YjKj7DYTPtv6WPzl3F5ow"
        }
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onMove={(viewport) => setViewport(viewport)}
      />
    </div>
  );
};

export default Map;
