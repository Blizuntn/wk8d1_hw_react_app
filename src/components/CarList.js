import { useState, useEffect } from "react";

export default function CarList() {
  const [cars, setCars] = useState([]);
  const [loadState, setLoadState] = useState("LOADING");
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCars(data);
        setLoadState("LOADED");
      });
  }, []);

  return (
    <div className="card">
      {loadState === "LOADED" ? (
        cars.map((car) => (
          <>
            <h2>{car.id}</h2>
            <p>{car.name}</p>
            <p>{car.year}</p>
            <p>{car.mileage}</p>
          </>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
