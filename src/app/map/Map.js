"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map = ({ fromCoords, fromLinkMap, toCoords, toLinkMap }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapRef.current) {
      mapRef.current = new maplibregl.Map({
        container: mapContainerRef.current,
        style: "https://demotiles.maplibre.org/style.json",
        center: fromCoords || [100.5167, 13.7367],  
        zoom: 6,
      });

      mapRef.current.on("style.load", () => {  // Wait for style to load
        mapRef.current.addSource("route", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [],
          },
        });

        mapRef.current.addLayer({
          id: "route-layer",
          type: "line",
          source: "route",
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#ff0000",
            "line-width": 5,
          },
        });
      });
    }
    if (mapRef.current) {
      mapRef.current.setCenter(fromCoords || [100.5167, 13.7367]); 
      document.querySelectorAll(".maplibregl-marker").forEach((marker) => marker.remove());
      if (fromCoords) {
        new maplibregl.Marker({ color: "blue" })
          .setLngLat(fromCoords)
          .setPopup(
            new maplibregl.Popup().setHTML(
              `จาก <a href="${fromLinkMap}" target="_blank" rel="noopener noreferrer">${fromLinkMap}</a>`
            )
          )
          .addTo(mapRef.current);
      }
      if (toCoords) {
        new maplibregl.Marker({ color: "red" })
          .setLngLat(toCoords)
          .setPopup(
            new maplibregl.Popup().setHTML(
              `ถึง <a href="${toLinkMap}" target="_blank" rel="noopener noreferrer">${toLinkMap}</a>`
            )
          )
          .addTo(mapRef.current);
      }
      if (fromCoords && toCoords) {
        const routeGeoJson = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: [fromCoords, toCoords],
              },
            },
          ],
        };
        if (mapRef.current.getSource("route")) {  
          mapRef.current.getSource("route").setData(routeGeoJson);
        }
      }
    }
  }, [fromCoords, toCoords]);

  return <div ref={mapContainerRef} className="w-full h-[48rem] rounded-lg shadow-lg" />;
};

export default Map;
