import React from "react";

export default function Cars() {
  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
    },
    {
      id: 2,
      make: "Dodge",
      model: "Durango",
    },
    {
      id: 3,
      make: "Ford",
      model: "F150",
    },
  ];

  const element = (
    <div>
      {cars.map((car) => (
        <div>
          <h2>{car.make}</h2>
          <p>{car.model}</p>
        </div>
      ))}
    </div>
  );
  return element;
}
