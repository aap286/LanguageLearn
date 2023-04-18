// ! to start server in server directory npm start

import React, { useEffect, useState } from "react";
import Helloworld from "./scripts/Helloworld";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  });

  return (
    <>
      <div>
        {typeof backendData.users === "undefined" ? (
          <p>loading...</p>
        ) : (
          backendData.users.map((user, i) => <h1 key={i}>{user}</h1>)
        )}
      </div>

      <div>
        <Helloworld />
        <Helloworld />
      </div>
    </>
  );
}

export default App;
