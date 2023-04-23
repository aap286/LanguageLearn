// ! to start server in server directory npm start

import React from // , { useEffect, useState }
"react";
import {map, Titlelayer} from "react-leaflet";

// * importing styles

function App() {
  // when user accepts access
  let userLocation;
  let map;

  // retrieves user's location information
  const getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log(position);
          resolve(userLocation);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  };

  var mapContainer = document.getElementById("osm-map");

  getLocation()
    .then((userLocation) => {
      console.log(userLocation);
    })

    .then((userLocation) => {
      // creates leaflet map
      map = L.map(mapContainer).setView(["47.50737", "19.04611"], 13);

      // adds layer to map
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // place maker at location
      L.marker(userLocation).addTo(map);
    });

  // Create a map centered on the user's location

  return (
    <>
      <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
      <link
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        rel="stylesheet"
      />
      <div id="osm-map"></div>
    </>
  );
}

export default App;

// import "./styles/NavBar.css";

// import NavBar from "./components/NavBar";

// import Pricing from "./components/Pricing";
// import About from "./components/About";
// import Home from "./components/Home";

// const [backendData, setBackendData] = useState([{}]);
// sets loading state
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   fetch("/api")
//     .then((response) => response.json())
//     .then((data) => {
//       setBackendData(data);
//       // setLoading(false);
//     });
// });

// page buffers until data is loaded
// if (loading) {
//   return <p>loading...</p>;
// }

// let Component;
// switch (window.location.pathname) {
//   case "/":
//     Component = <Home />;
//     break;
//   case "/pricing":
//     Component = <Pricing />;
//     break;
//   case "/about":
//     Component = <About />;
//     break;
// }

// <>
//   <NavBar />
//   <div className="container">{Component}</div>

//   <div>
//     {typeof backendData.users === "undefined" ? (
//       <p>loading...</p>
//     ) : (
//       backendData.users.map((user, i) => <h1 key={i}>{user}</h1>)
//     )}
//   </div>

// </>
