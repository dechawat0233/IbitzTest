"use client";

import { useState, useEffect, useRef } from "react";
import Map from "../map/Map";
import { Button } from "@mui/material";

const API_URL =
  // "https://v2k-dev.vallarismaps.com/core/api/features/1.1/collections/658cd4f88a4811f10a47cea7/items?api_key=bLNytlxTHZINWGt1GIRQBUaIlqz9X45XykLD83UkzIoN6PFgqbH7M7EDbsdgKVwC&collectionCreatedBy=60f539a5a44d2d7219fac3e3&offset=1300";
  "https://v2k-dev.vallarismaps.com/core/api/features/1.1/collections/658cd4f88a4811f10a47cea7/items?api_key=bLNytlxTHZINWGt1GIRQBUaIlqz9X45XykLD83UkzIoN6PFgqbH7M7EDbsdgKVwC";

const SearchForm = () => {

  const [loadingPercent, setLoadingPercent] = useState(0);

  const [locations, setLocations] = useState([]);
  const [ctTn, setCtTn] = useState([]);
  const [changwat, setChangwat] = useState([]);
  const [luHpName, setLuHpName] = useState([]);
  const [luName, setLuName] = useState([]);

  const [coordsMap, setCoordsMap] = useState({});
  const [mapCoords, setMapCoords] = useState([]);

  const [fromCoords, setFromCoords] = useState(null);
  const [fromLinkMap, setFromLinkMap] = useState("");

  const [selectedCtTns, setSelectedCtTns] = useState({});
  const [selectedChangwats, setSelectedChangwats] = useState({});
  const [selectedHpNames, setSelectedHpNames] = useState({});
  const [selectedNames, setSelectedNames] = useState({});


  const [toCoords, setToCoords] = useState(null);
  const [toLinkMap, setToLinkMap] = useState("");

  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true); // ตรวจสอบว่า component ยังอยู่หรือไม่

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    isMounted.current = true; // ตั้งค่าเป็น true เมื่อ component ถูก mount

    const fetchAllLocations = async () => {
      const totalPages = 1000;
      const batchSize = 100; // ดึงทีละ 1000 หน้า
      let allData = [];
      let loadedPages = 0; // จำนวนหน้าที่โหลดเสร็จแล้ว

      for (let i = 0; i < totalPages; i += batchSize) {
        if (!isMounted.current) return; // ❌ หยุดทำงานถ้า component ถูก unmount

        console.log(`📡 Fetching batch ${i / batchSize + 1}...`);
        const batch = [];

        for (let j = 0; j < batchSize; j++) {
          const offset = (i + j) * 10;
          const url = `${API_URL}&collectionCreatedBy=60f539a5a44d2d7219fac3e3&offset=${offset}`;
          batch.push(fetch(url).then((res) => res.json()));
        }

        try {
          const results = await Promise.all(batch);

          loadedPages += batchSize;

          // คำนวณเปอร์เซ็นต์ที่โหลดเสร็จ
          const percentLoaded = Math.min((loadedPages / totalPages) * 100, 100);
          setLoadingPercent(percentLoaded); 

          if (!isMounted.current) return; 

          const batchData = results.flatMap((data) =>
            data.features.map((item) => ({
              id: item.id,
              coords: item.geometry.coordinates,
              village: item.properties?.village || "",
              changwat: item.properties?.changwat || "",
              tambol: item.properties?.tambol || "",
              amphoe: item.properties?.amphoe || "",
              ct_tn: item.properties?.ct_tn || "",
              linkgmap: item.properties?.linkgmap || "",
              lu_hp_name: item.properties?.lu_hp_name || "-",
              lu_name: item.properties?.lu_name || "-",
            }))
          );

          allData = [...allData, ...batchData];
          console.log(`✅ Batch ${i / batchSize + 1} completed!`);

          // หน่วงเวลา 1 วินาทีระหว่าง Batch
          await delay(100);
        } catch (error) {
          console.error("⚠️ Error fetching batch:", error);
        }
      }

      if (isMounted.current) {
        // กรองข้อมูลที่ไม่ซ้ำกัน

        const uniqueCtTn = allData.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.ct_tn === value.ct_tn) &&
            value.ct_tn !== "" && value.ct_tn !== "-"
        );

        const uniqueChangwat = allData.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.changwat === value.changwat) &&
            value.changwat !== "" && value.changwat !== "-"
        );


        const uniqueLu_hp_name = allData.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.lu_hp_name === value.lu_hp_name) &&
            value.lu_hp_name !== "" && value.lu_hp_name !== "-"
        );
        const uniqueLu_name = allData.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.lu_name === value.lu_name) &&
            value.lu_name !== "" && value.lu_name !== "-"
        );

        allData.sort((a, b) => a.ct_tn.localeCompare(b.ct_tn, 'th')); // เพิ่มการเรียงข้อมูล

        const coordsMapping = allData.reduce((acc, item) => {
          acc[item.ct_tn] = acc[item.ct_tn] || [];
          acc[item.ct_tn].push(item.coords);

          acc[item.changwat] = acc[item.changwat] || [];
          acc[item.changwat].push(item.coords);

          acc[item.lu_hp_name] = acc[item.lu_hp_name] || [];
          acc[item.lu_hp_name].push(item.coords);

          acc[item.lu_name] = acc[item.lu_name] || [];
          acc[item.lu_name].push(item.coords);
          return acc;
        }, {});

        setCtTn(uniqueCtTn);
        setChangwat(uniqueChangwat);
        setLuHpName(uniqueLu_hp_name);
        setLuName(uniqueLu_name);
        setCoordsMap(coordsMapping);
        setLocations(allData);
        setLoading(false);
      }
    };

    fetchAllLocations();

    return () => {
      isMounted.current = false;
    };
  }, []);
  console.log('changwat', changwat);

  useEffect(() => {
    // ค้นหาพิกัดทั้งหมดที่ถูกเลือกจาก checkbox
    const selectedCoords = Object.keys(selectedCtTns)
      .filter((name) => selectedCtTns[name]) // ค้นหาชื่อที่ถูกเลือก
      .flatMap((name) => coordsMap[name] || []) // ดึงค่าพิกัดจาก coordsMap
      .concat(
        Object.keys(selectedChangwats)
          .filter((name) => selectedChangwats[name])
          .flatMap((name) => coordsMap[name] || [])
          .concat(
            Object.keys(selectedHpNames)
              .filter((name) => selectedHpNames[name])
              .flatMap((name) => coordsMap[name] || [])
              .concat(
                Object.keys(selectedNames)
                  .filter((name) => selectedNames[name])
                  .flatMap((name) => coordsMap[name] || [])
              )
          )
      );

    setMapCoords(selectedCoords); // อัปเดตพิกัดที่จะแสดงบนแผนที่

  }, [selectedCtTns, selectedChangwats, selectedHpNames, selectedNames, coordsMap, locations]);


  const handleCtTnChange = (ctTnName) => {
    setSelectedCtTns((prev) => ({
      ...prev,
      [ctTnName]: !prev[ctTnName]
    }));
  };

  const handleChangwatChange = (changwatName) => {
    setSelectedChangwats((prev) => ({
      ...prev,
      [changwatName]: !prev[changwatName]
    }));
  };

  const handleHpNameChange = (lu_hp_name) => {
    setSelectedHpNames((prev) => ({
      ...prev,
      [lu_hp_name]: !prev[lu_hp_name]
    }));
  };

  const handleNameChange = (lu_name) => {
    setSelectedNames((prev) => ({
      ...prev,
      [lu_name]: !prev[lu_name]
    }));
  };

  const handleClearAll = () => {
    setSelectedCtTns({});
    setSelectedChangwats({});
    setSelectedHpNames({});
    setSelectedNames({});
  };

  console.log("locations", locations);

  return (
    <div className="flex flex-col items-center space-y-5 p-5">
      <div className="bg-white p-5 shadow-md rounded-lg">
        {loading ? (
          <div>
            <p className="text-lg font-bold text-gray-600">⏳ กำลังโหลดข้อมูล...</p>
            <p className="text-sm">โหลดแล้ว {loadingPercent}%</p> {/* แสดงเปอร์เซ็นต์ */}
          </div>
        ) : (
          <div className="grid grid-cols-5">
            <Button variant="contained" color="success" className="h-[5rem]" onClick={handleClearAll}>ล้างทั้งหมด</Button> {/* ปุ่มล้าง */}

            <div className=" overflow-y-auto h-[20rem]">
              <h2 className="text-lg font-semibold mb-2">✅ ct_tn</h2>
              <table className="min-w-full bg-white border border-gray-200 shadow-md">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border">เลือก</th>
                    <th className="py-2 px-4 border">ct_tn</th>
                  </tr>
                </thead>
                <tbody className="max-h-60 overflow-y-auto">
                  {ctTn.sort((a, b) => a.ct_tn.localeCompare(b.ct_tn)).map((name, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4 border text-center">
                        <input
                          type="checkbox"
                          checked={!!selectedCtTns[name.ct_tn]}
                          onChange={() => handleCtTnChange(name.ct_tn)}
                          className="w-5 h-5"
                        />
                      </td>
                      <td className="py-2 px-4 border">{name.ct_tn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" overflow-y-auto h-[20rem]">
              <h2 className="text-lg font-semibold mb-2">✅ changwat</h2>
              <table className="min-w-full bg-white border border-gray-200 shadow-md">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border">เลือก</th>
                    <th className="py-2 px-4 border">changwat</th>
                  </tr>
                </thead>
                <tbody>
                  {changwat.sort((a, b) => a.changwat.localeCompare(b.changwat)).map((name, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4 border text-center">
                        <input
                          type="checkbox"
                          checked={!!selectedChangwats[name.changwat]}
                          onChange={() => handleChangwatChange(name.changwat)}
                          className="w-5 h-5"
                        />
                      </td>
                      <td className="py-2 px-4 border">{name.changwat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" overflow-y-auto h-[20rem]">
              <h2 className="text-lg font-semibold mb-2">✅ lu_hp_name</h2>
              <table className="min-w-full bg-white border border-gray-200 shadow-md">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border">เลือก</th>
                    <th className="py-2 px-4 border">lu_hp_name</th>
                  </tr>
                </thead>
                <tbody>
                  {luHpName.sort((a, b) => a.lu_hp_name.localeCompare(b.lu_hp_name)).map((name, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4 border text-center">
                        <input
                          type="checkbox"
                          checked={!!selectedHpNames[name.lu_hp_name]}
                          onChange={() => handleHpNameChange(name.lu_hp_name)}
                          className="w-5 h-5"
                        />
                      </td>
                      <td className="py-2 px-4 border">{name.lu_hp_name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" overflow-y-auto h-[20rem]">
              <h2 className="text-lg font-semibold mb-2">✅ lu_name</h2>
              <table className="min-w-full bg-white border border-gray-200 shadow-md">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border">เลือก</th>
                    <th className="py-2 px-4 border">lu_name</th>
                  </tr>
                </thead>
                <tbody>
                  {luName.sort((a, b) => a.lu_name.localeCompare(b.lu_name)).map((name, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4 border text-center">
                        <input
                          type="checkbox"
                          checked={!!selectedNames[name.lu_name]}
                          onChange={() => handleNameChange(name.lu_name)}
                          className="w-5 h-5"
                        />
                      </td>
                      <td className="py-2 px-4 border">{name.lu_name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <Map allLocat={locations} coordinates={mapCoords} fromCoords={fromCoords} fromLinkMap={fromLinkMap} toCoords={toCoords} toLinkMap={toLinkMap} />
    </div>
  );
};

export default SearchForm;
