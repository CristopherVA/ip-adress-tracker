/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { rotationGlobe } from "../helpers";

mapboxgl.accessToken = process.env.mapbox_key;

function Map({ pickupCoordinates }) {
  console.log(pickupCoordinates);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [11.015, -85.544],
      zoom: 1,
      projection: "globe",
    });

    map.on("load", () => {
      // Set the default atmosphere style
      map.setFog({});
    });

    rotationGlobe(map);

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }
    map.flyTo({
      center: pickupCoordinates,
      essential: true,
      zoom: pickupCoordinates[0] !== 0 && pickupCoordinates[1] !== 0 ? 13 : 1,
    });
  }, []);

  const addToMap = (map, coordinate) => {
    console.log(coordinate);
    if (coordinate[0] !== 0 && coordinate[1] !== 0) {
      new mapboxgl.Marker({ rotation: 0 }).setLngLat(coordinate).addTo(map);
    }
  };

  return <div id="map" className="flex-1"></div>;
}

export default Map;
