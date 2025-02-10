"use client"; // ✅ บังคับให้ไฟล์นี้ทำงานฝั่ง Client

import React, { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true); // เพิ่ม state เพื่อตรวจสอบการโหลด

  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);

      const data = await response.json();
      if (Array.isArray(data.features)) {
        return {
          features: data.features.map((feature) => ({
            id: feature.id,
            type: feature.type,
            geometry: feature.geometry,
            properties: feature.properties,
          })),
          nextUrl: data.links?.find((link) => link.rel === "next")?.href || null,
        };
      } else {
        throw new Error("No features found in the API response");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return { features: [], nextUrl: null };
    }
  };

  useEffect(() => {
    const loadAllData = async (initialUrl) => {
      let url = initialUrl;
      let allData = [];

      while (url) {
        const { features, nextUrl } = await fetchApiData(url);
        allData = [...allData, ...features];
        url = nextUrl; // อัพเดต URL ถ้ามีหน้าถัดไป
      }

      setApiData(allData);
      setLoading(false); // โหลดเสร็จแล้ว
    };

    loadAllData("https://v2k-dev.vallarismaps.com/core/api/features/1.1/collections/658cd4f88a4811f10a47cea7/items?api_key=bLNytlxTHZINWGt1GIRQBUaIlqz9X45XykLD83UkzIoN6PFgqbH7M7EDbsdgKVwC");
  }, []);

  return (
    <ApiContext.Provider value={{ apiData, loading }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiData = () => useContext(ApiContext);
