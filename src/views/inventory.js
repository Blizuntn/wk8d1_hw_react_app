import React from "react";
import carsList from "../components/car_List";
export default function Inventory({ car }) {
  return (
    <div>
      <h1>Inventory</h1>
      <h5>{car.make}</h5>
      <h6>{car.model}</h6>
    </div>
  );
}
