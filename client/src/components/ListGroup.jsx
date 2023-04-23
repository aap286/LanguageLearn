import React from 'react'

export default function ListGroup() {

    // list of city names
    const cities = [
        'New York',
        'San Francisco',
        'Los Angeles',
        'Tokyo',
        'London'
    ]

    return (
        <>
        <ul className="list-group">
          {cities.map((city, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => console.log(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      </>
    );
}
