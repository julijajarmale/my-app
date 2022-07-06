import { useEffect, useState, useContext } from "react";
import KoltContext from "./KoltContext";

function KoltEdit() {
  const { modalData, setModalData, setEditData } = useContext(KoltContext);

  const [code, setCode] = useState("");
  const [time, setTime] = useState("1");
  const [newKm, setNewKm] = useState(0);
  const [isBusy, setIsBusy] = useState(false);

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setCode(modalData.code);
    setTime(modalData.time);
    setNewKm(0);
    setIsBusy(modalData.isBusy);
  }, [modalData]);

  const koltEdit = () => {
    console.log("suveike");
    const data = {
      code,
      time,
      km: Number(modalData.km) + Number(newKm),
      newKm,
      isBusy: isBusy ? 1 : 0,
      id: modalData.id,
    };
    console.log(data);
    setEditData(data);
    setModalData(null);
  };

  if (null === modalData) {
    return null;
  }

  return (
    <div className="modal">
      <div className="form">
        <div>
          <h2>Edit scooter information</h2>
        </div>
        <div className="form-group">
          Registration code: <span>{modalData.code}</span>
        </div>
        <div className="form-group">
          Last time used: <span>{modalData.time}</span>
        </div>
        <div className="form-group">
          <label className="label">New date:</label>
          <input
            type="date"
            className="form-row"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </div>
        <div className="form-group">
          Total Kilometers Ride: <span>{modalData.km} km </span>
        </div>
        <div className="form-group">
          <label className="label">Add New Kilometers</label>
          <input
            type="number"
            className="form-row"
            onChange={(e) => setNewKm(e.target.value)}
            value={newKm}
          />
        </div>
        <div className="form-group">
          <small>Check if busy</small>
          <input
            type="checkbox"
            className="cb"
            checked={isBusy}
            onChange={() => setIsBusy((isBusy) => !isBusy)}
          />
        </div>
        <div className="buttons">
          <button
            type="button"
            className="btn2"
            onClick={() => setModalData(null)}
          >
            Close
          </button>
          <button type="button" className="btn" onClick={koltEdit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default KoltEdit;
