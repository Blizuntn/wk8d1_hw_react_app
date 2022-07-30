import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CarSingle() {
  const [car, setCar] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
      });
  });
  return (
    <>
      <h1>{id}</h1>
      <p>{car.name}</p>
      <p>{car.year}</p>
      <p>{car.mileage}</p>
    </>
  );
}
