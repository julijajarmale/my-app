import { useEffect, useState } from "react";

function Statistics({ kolt }) {
  const [bendriKm, setBendriKm] = useState(parseFloat(0));

  useEffect(() => {
    if (null === kolt) {
      return;
    }
    setBendriKm(0);
    for (let i = 0; i < kolt.length; i++) {
      setBendriKm((k) => k + kolt[i].km);
    }
  }, [kolt]);
  return (
    <>
      <div className="statistic">
        <p> Number of scooters: {kolt === null ? null : kolt.length}</p>
      </div>
      <div className="statistic">
        <p> Total amount of kilometers traveled: {bendriKm} km</p>
      </div>
    </>
  );
}

export default Statistics;
