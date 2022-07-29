import React from "react";
import Inventory from "./views/inventory";
import { useState } from "react";

export default function carsList() {
  const carsList = [
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
  const carList = carsList.map((car) => <Inventory car={car} />);
  return <div>{carList}</div>;
}
