import React, { useEffect, useState } from 'react'

function App() {

  const [backendData,setBackendDData] = useState([{}])


  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(
        data => {
          setBackendDData(data)
      }
    )
  }, []);
  return (
    <section>
      {typeof backendData.users === "undefined" ? (
        <p>loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </section>
  );
}

export default App