import { useEffect, useState } from "react";
import FrontContext from "./Components/front/FrontContext";
import ScooterImage from "./Components/scooter-image";
import axios from "axios";
import KoltList from "./Components/front/KoltList";
import LogIn from "./Components/front/Login";

function Front() {
  const [kolts, setKolts] = useState(null);

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createComment, setCreateComment] = useState(null);
  const [rateNow, setRateNow] = useState(null);

  //READ
  useEffect(() => {
    axios.get("http://localhost:3003/front/paspirtukai").then((res) => {
      console.log(res.data);
      setKolts(res.data);
    });
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createComment) return;
    axios
      .post("http://localhost:3003/front/komentarai", createComment)
      .then((_) => {
        setLastUpdate(Date.now());
      });
  }, [createComment]);

  // Rate
  // Create
  useEffect(() => {
    if (null === rateNow) return;
    axios
      .put("http://localhost:3003/front/balsuok/" + rateNow.id, rateNow)
      .then((_) => {
        setLastUpdate(Date.now());
      });
  }, [rateNow]);

  return (
    <FrontContext.Provider
      value={{
        kolts,
        setCreateComment,
        setRateNow,
      }}
    >
      <div className="App">
        <header className="App-header"></header>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-ml-12">
              <LogIn></LogIn>
            </div>
            <div className="col-7 col-ml-12">
              <ScooterImage></ScooterImage>
            </div>
            <div className="col-12">
              <KoltList />
            </div>
          </div>
        </div>
      </div>
    </FrontContext.Provider>
  );
}

export default Front;
