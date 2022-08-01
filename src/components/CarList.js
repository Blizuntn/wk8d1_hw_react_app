import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Inventory from "../views/inventory";
export default function CarList() {
  const { cars } = useContext(DataContext);

  return (
    <>
      {cars.map((car) => (
        <Inventory car={car} key={car.id} />
      ))}
    </>
  );
}
