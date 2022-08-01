import { useEffect, useState, useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Inventory from "./inventory";
import Car from "../components/Car";
export default function Home() {
  const { cars } = useContext(DataContext);
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}
