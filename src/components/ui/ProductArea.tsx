import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import LoadingPage from "@/app/loading";

const locations = [
  { lat: 23.8041, lng: 90.4152, label: "Location 1 - Dhaka" },
  // { lat: 40.712776, lng: -74.005974, label: "Location 1 - New York" },
  // { lat: 34.052235, lng: -118.243683, label: "Location 2 - Los Angeles" },
  // { lat: 41.878113, lng: -87.629799, label: "Location 3 - Chicago" },
];

const containerStyle = {
  width: "100%",
  height: "500px",
};

// const center = {
//   lat: 37.0902, // Centered on the USA for example
//   lng: -95.7129,
// };

const center = {
  lat: 23.8041,
  lng: 90.4152,
};

const ProductArea: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBAkRc51qa34Rawl1ebtSjyL2rDk_r4E28", // Replace with your API Key
  });

  if (!isLoaded) {
    return (
      <div>
        <LoadingPage></LoadingPage>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Location
        </h2>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            options={{ mapId: "1ebc3ed57e00574e" }}
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={{ lat: location.lat, lng: location.lng }}
                label={location.label}
              />
            ))}
          </GoogleMap>
        </div>
      </div>
    </section>
  );
};

export default ProductArea;
