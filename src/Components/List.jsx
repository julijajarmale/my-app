import { useContext, useEffect, useState } from "react";
import KoltContext from "./KoltContext";
import OneKolt from "./Kolt";

function KoltList() {
  const { kolt } = useContext(KoltContext);

  const [copy, setCopy] = useState([]); // sort tik ant kopiju
  useEffect(() => {
    if (null === kolt) {
      return;
    }
    setCopy([...kolt]);
  }, [kolt]);

  const sortKm = () => {
    setCopy([...copy].sort((a, b) => a.km - b.km));
  };
  const sortDate = () => {
    setCopy([...copy].sort((a, b) => Date.parse(a.time) - Date.parse(b.time)));
  };

  return (
    <div className="list-column">
      <div>
        <h2>Scooter List</h2>
      </div>
      <div className="form-group">
        <ul className="kolt-list">
          {copy.map((onekolt) => (
            <OneKolt key={onekolt.id} onekolt={onekolt}></OneKolt>
          ))}
        </ul>
        <div className="buttons2">
          <button className="btn" onClick={sortDate}>
            Sort by date
          </button>
          <button className="btn" onClick={sortKm}>
            Sort by km
          </button>
        </div>
      </div>
    </div>
  );
}

export default KoltList;
