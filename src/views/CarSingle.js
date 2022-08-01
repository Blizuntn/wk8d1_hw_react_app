import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import Inventory from "./inventory";

export default function CarSingle() {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const { getSingleCar } = useContext(DataContext);
  const { carState, setCarState } = useState("LOADING");

  useEffect(() => {
    const queryCar = async () => {
      setCar(await getSingleCar(id));
    };
    queryCar();
  }, [id]);

  return (
    <>
      {carState === "LOADED" ? (
        <Inventory car={car} hideLink={true} />
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
