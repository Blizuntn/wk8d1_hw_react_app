import CarSingle from "./CarSingle";
import CarList from "../components/CarList";
export default function Inventory() {
  return (
    <div className="card">
      {CarSingle()}
      {CarList()}
    </div>
  );
}
