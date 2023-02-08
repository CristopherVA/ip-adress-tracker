/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import ReactMapboxGl, { Layer, Feature, ScaleControl } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.mapbox_key;

function Map({ pickupCoordinates }) {
  const defaultCoordinate = [100.501007, -69.860475];

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style:
        "mapbox://styles/mapbox/satellite-streets-v12" /* "mapbox://styles/mapbox/satellite-streets-v11" */,
      center: defaultCoordinate,
      zoom: 1,
      projection: "globe",
    });

    map.on("load", () => {
      // Set the default atmosphere style
      map.setFog({});
    });


    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);

      map.flyTo({
        center: pickupCoordinates,
        essential: true,
      });
    }
  }, [pickupCoordinates]);

  const addToMap = (map, coordinate) => {
    const marker1 = new mapboxgl.Marker({ rotation: 3 })
      .setLngLat(coordinate)
      .addTo(map);
  };

  return <div id="map" className="flex-1"></div>;
}

export default Map;
