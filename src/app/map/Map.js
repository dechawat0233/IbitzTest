"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map = ({ coordinates, allLocat }) => {
  const mapContainer = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);

  console.log("coordinates", coordinates);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current, // ใช้ div ที่กำหนด
      style: "https://demotiles.maplibre.org/style.json", // สไตล์ของแผนที่
      center: [101.37117, 15.47803], // ศูนย์กลางเริ่มต้นของแผนที่
      zoom: 6, // ระดับการซูมเริ่มต้น
    });

    setMapInstance(map); // ตั้งค่า mapInstance

    map.on("load", () => {
      // สำหรับแต่ละพิกัดใน coordinates, เพิ่มจุดกลม
      coordinates.forEach((coord) => {
        map.addLayer({
          id: `circle-layer-${coord[0]}-${coord[1]}`,
          type: "circle",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: coord, // พิกัดจาก array
                  },
                  properties: {},
                },
              ],
            },
          },
          paint: {
            "circle-radius": 5, // ขนาดของจุดกลม
            "circle-color": "#FF0000", // สีของจุด
            "circle-opacity": 0.8, // ความโปร่งใส
          },
        });
      });
    });

    // ทำความสะอาดแผนที่เมื่อคอมโพเนนต์ถูกลบ
    return () => {
      map.remove();
    };
  }, [coordinates]);

  return <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />;
};

export default Map;
