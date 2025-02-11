"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MapLine = ({ fromCoords, toCoords, allLocat }) => {
    const mapContainer = useRef(null);
    const mapInstance = useRef(null);
    const maxDistance = 0.1; // กำหนดระยะที่รับได้ (ประมาณ 10 กม.)

    useEffect(() => {
        if (!fromCoords || !toCoords) return; // ตรวจสอบค่าพิกัด

        if (!mapInstance.current) {
            mapInstance.current = new maplibregl.Map({
                container: mapContainer.current,
                style: "https://demotiles.maplibre.org/style.json",
                center: fromCoords,
                zoom: 6,
            });

            mapInstance.current.on("load", () => {
                // ✅ สร้างเส้นทางระหว่าง fromCoords และ toCoords
                mapInstance.current.addSource("route", {
                    type: "geojson",
                    data: {
                        type: "Feature",
                        geometry: {
                            type: "LineString",
                            coordinates: [fromCoords, toCoords],
                        },
                    },
                });

                mapInstance.current.addLayer({
                    id: "route-line",
                    type: "line",
                    source: "route",
                    layout: { "line-join": "round", "line-cap": "round" },
                    paint: { "line-color": "#ff0000", "line-width": 4 },
                });

                new maplibregl.Marker().setLngLat(fromCoords).addTo(mapInstance.current);
                new maplibregl.Marker().setLngLat(toCoords).addTo(mapInstance.current);

                // ✅ แสดงเฉพาะจุดที่อยู่ใกล้เส้น
                allLocat.forEach((location) => {
                    const coord = location.coords;

                    if (isCloseToLine(coord, fromCoords, toCoords, maxDistance)) {
                        new maplibregl.Marker({ color: "green" })
                            .setLngLat(coord)
                            .addTo(mapInstance.current);
                    }
                });
            });
        }

        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, [fromCoords, toCoords, allLocat]);

    return <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />;
};

// ✅ ฟังก์ชันตรวจสอบระยะห่างจากเส้น
function isCloseToLine(point, start, end, maxDistance) {
    const [px, py] = point;
    const [sx, sy] = start;
    const [ex, ey] = end;

    // คำนวณระยะห่างระหว่างจุดกับเส้นทาง
    const d =
        Math.abs((ey - sy) * px - (ex - sx) * py + ex * sy - ey * sx) /
        Math.sqrt((ey - sy) ** 2 + (ex - sx) ** 2);

    return d <= maxDistance; // ตรวจสอบว่าจุดอยู่ใกล้เส้นหรือไม่
}


export default MapLine;
