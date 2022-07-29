import React from "react";
import Cars from "../components/cars";
export default function Inventory() {
  return (
    <div>
      <h1>Inventory</h1>
      {Cars()}
    </div>
  );
}
