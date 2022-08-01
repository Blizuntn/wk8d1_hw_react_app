import { Link } from "react-router-dom";
export default function Car(props) {
  console.log(props);
  function buildHeader() {
    let resHeader;

    if (!props.hideLink) {
      resHeader = (
        <Link to={"/inventory/" + props.car.id}>
          {props.car.id}: {props.car.name}
        </Link>
      );
    } else {
      resHeader = (
        <>
          {props.car.id}:{props.car.name}
        </>
      );
    }
    return resHeader;
  }
  return (
    <div className="card card-item">
      <h2>{buildHeader()}</h2>
      <p>{props.car.name}</p>
      <p>{props.car.dateCreated.toDate().toLocaleDateString()}</p>
    </div>
  );
}
