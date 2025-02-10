const API_URL = "https://v2k-dev.vallarismaps.com/core/api/features/1.1/collections/658cd4f88a4811f10a47cea7/items";
const API_KEY = "bLNytlxTHZINWGt1GIRQBUaIlqz9X45XykLD83UkzIoN6PFgqbH7M7EDbsdgKVwC";

export async function fetchData() {
  try {
    const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return null;
  }
}
