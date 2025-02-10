import { useState, useEffect } from "react";
import Map from "../map/Map";

const API_URL =
  "https://v2k-dev.vallarismaps.com/core/api/features/1.1/collections/658cd4f88a4811f10a47cea7/items?api_key=bLNytlxTHZINWGt1GIRQBUaIlqz9X45XykLD83UkzIoN6PFgqbH7M7EDbsdgKVwC&collectionCreatedBy=60f539a5a44d2d7219fac3e3&offset=1300";

const SearchForm = () => {
  const [locations, setLocations] = useState([]);
  const [fromCoords, setFromCoords] = useState(null);
  const [fromInputValue, setFromInputValue] = useState(""); 
  const [fromLinkMap, setFromLinkMap] = useState(""); 

  const [toCoords, setToCoords] = useState(null);
  const [toInputValue, setToInputValue] = useState(""); 
  const [toLinkMap, setToLinkMap] = useState(""); 

  const [distance, setDistance] = useState("0");
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false); 

  console.log("fromCoords", fromCoords);
  console.log("fromInputValue", fromInputValue);
  console.log("toCoords", toCoords);
  console.log("toInputValue", toInputValue);

  useEffect(() => {
    const fetchAllLocations = async () => {
      let allData = [];
      let nextUrl = API_URL;
      let count = 0;

      while (nextUrl && count < 10) { // เปลี่ยนเป็น 10 ครั้งตามที่ต้องการ
        try {
          console.log(`📡 Fetching API (${count + 1}/10):`, nextUrl);
          const response = await fetch(nextUrl);
          if (!response.ok) throw new Error(`❌ API Fetch Failed: ${response.statusText}`);

          const data = await response.json();

          const newLocations = data.features.map((item) => ({
            id: item.id,
            coords: item.geometry.coordinates,
            village: item.properties?.village || "", 
            changwat: item.properties?.changwat || "", 
            tambol: item.properties?.tambol || "", 
            amphoe: item.properties?.amphoe || "", 
            ct_tn: item.properties?.ct_tn || "", 
            linkgmap: item.properties?.linkgmap || "", 
          }));

          allData = [...allData, ...newLocations];

          const nextLink = data.links?.find((link) => link.rel === "next");
          nextUrl = nextLink ? nextLink.href : null;

          count++;
        } catch (error) {
          console.error("⚠️ Error fetching locations:", error);
          nextUrl = null;
        }
      }

      const uniqueLocations = allData.filter((value, index, self) =>
        index === self.findIndex((t) => t.id === value.id)
      );

      console.log("✅ All Unique Locations Data:", uniqueLocations);

      setLocations(uniqueLocations); 
      setLoading(false);
    };

    fetchAllLocations();
  }, []);


  const calculateDistance = (coords1, coords2) => {
    if (!coords1 || !coords2) return "0";

    const toRad = (angle) => (angle * Math.PI) / 180;
    const [lon1, lat1] = coords1;
    const [lon2, lat2] = coords2;
    const R = 6371;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2);
  };


  return (
    <div className="flex flex-col items-center space-y-5 p-5">
      <div className="bg-white p-5 shadow-md rounded-lg">
        {loading ? (
          <p className="text-lg font-bold text-gray-600">⏳ กำลังโหลดข้อมูล...</p>
        ) : (
          <form className="text-center" >
            <label className="mr-2">จาก</label>

            <select
              className="border p-2 m-2"
              value={fromInputValue}
              onChange={(e) => {
                const selectedId = e.target.value;
                setFromInputValue(selectedId);
                const foundLocation = locations.find((loc) => loc.id === selectedId);
                if (foundLocation) {
                  setFromCoords(foundLocation.coords);
                  setFromLinkMap(foundLocation.linkgmap);
                  if (toCoords) setDistance(calculateDistance(foundLocation.coords, toCoords));
                } else {
                  setFromCoords(null);
                }
              }}
            >
              <option value="">เลือกสถานที่</option>
              {locations
                .slice()
                .sort((a, b) => a.ct_tn.localeCompare(b.ct_tn, "th")) // เรียงตาม ct_tn
                .map((location) => (
                  <option key={location.id} value={location.id} data-coordinates={JSON.stringify(location.coords)}>
                    {`${location.village}, ${location.changwat}, ${location.tambol}, ${location.amphoe}, ${location.ct_tn}`}
                  </option>
                ))}
            </select>
            <label className="mr-2">ถึง</label>
            <select
              className="border p-2 m-2"
              value={toInputValue}
              onChange={(e) => {
                const selectedId = e.target.value;
                setToInputValue(selectedId);

                // ค้นหาสถานที่จาก ID ที่เลือก
                const foundLocation = locations.find((loc) => loc.id === selectedId);
                if (foundLocation) {
                  setToCoords(foundLocation.coords);
                  setFromLinkMap(foundLocation.linkgmap);
                  if (fromCoords) setDistance(calculateDistance(fromCoords, foundLocation.coords));
                } else {
                  setToCoords(null);
                }
              }}
            >
              <option value="">เลือกสถานที่</option>
              {locations
                .slice() 
                .sort((a, b) => a.ct_tn.localeCompare(b.ct_tn, "th")) 
                .map((location) => (
                  <option key={location.id} value={location.id} data-coordinates={JSON.stringify(location.coords)}>
                    {`${location.village}, ${location.changwat}, ${location.tambol}, ${location.amphoe}, ${location.ct_tn}`}
                  </option>
                ))}

            </select>
            <p className="mt-3 text-lg font-bold">ระยะทางตรง: {distance} กม.</p>
          </form>
        )}
      </div>

      <Map fromCoords={fromCoords} fromLinkMap={fromLinkMap} toCoords={toCoords} toLinkMap={toLinkMap} />
    </div>
  );
};

export default SearchForm;
