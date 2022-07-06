import { useState, useRef } from "react";
import randLetters from "../Functions/randLetters";
import { useContext } from "react";
import KoltContext from "./KoltContext";

function KoltForm() {
  const { setCreateKolt, disableCreate, setDisableCreate } =
    useContext(KoltContext);

  const [id, setId] = useState("");
  const [code, setCode] = useState(randLetters());
  const [time, setTime] = useState("");
  const [km, setKm] = useState(0);
  let countKolts = useRef(0);

  const koltCreate = () => {
    setDisableCreate(true);
    const data = { id, code, time, km: parseFloat(km) };
    setCreateKolt(data);
    setId("");
    setCode(randLetters());
    setTime("");
    setKm(0);
    countKolts.current++;
  };

  return (
    <div className="form-column">
      <div className="form">
        <div>
          <h2>Add new scooter</h2>
        </div>
        <div className="form-group">
          <label className="label">Registration Code:</label>
          <input
            type="text"
            className="form-row"
            onChange={(e) => setCode(e.target.value)}
            value={code}
          />
        </div>
        <div className="form-group">
          <label className="label">Last time used:</label>
          <input
            type="date"
            className="form-row"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </div>
        <div className="form-group">
          <label className="label">Total Kilometers Ride:</label>
          <input
            type="text"
            className="form-row"
            onChange={(e) => setKm(e.target.value)}
            value={km}
          />
        </div>

        <button
          type="button"
          className="btn"
          onClick={koltCreate}
          disabled={disableCreate}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default KoltForm;
