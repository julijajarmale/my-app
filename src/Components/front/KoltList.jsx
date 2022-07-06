import { useContext } from "react";
import Kolt from "./Kolt";
import FrontContext from "./FrontContext";

function KoltList() {
  const { kolts } = useContext(FrontContext);

  return (
    <div className="list-column">
      <div>
        <h2>Scooter List</h2>
      </div>
      <div className="form-group">
        <ul className="kolt-list">
          {kolts
            ? kolts.map((kolt) => <Kolt key={kolt.id} kolt={kolt}></Kolt>)
            : null}
        </ul>
      </div>
    </div>
  );
}

export default KoltList;
