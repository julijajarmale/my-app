import "./kolt.scss";
import { useState, useEffect } from "react";
import KoltList from "./Components/List";
import KoltEdit from "./Components/Edit";
import ScooterImage from "./Components/scooter-image";
import KoltForm from "./Components/Create";
import Statistics from "./Components/Statistics";
import axios from "axios";
//import './bootstrap.css';
import KoltContext from "./Components/KoltContext";

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [kolt, setKolt] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [createKolt, setCreateKolt] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [message, setMessage] = useState(null);

  const [disableCreate, setDisableCreate] = useState(false);

  // Read (Kolt-form)

  useEffect(() => {
    axios
      .get("http://localhost:3003/paspirtukai/")
      .then((res) => setKolt(res.data));
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createKolt) return;
    axios
      .post("http://localhost:3003/paspirtukai/", createKolt)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch((error) => {
        showMessage({ text: error.message, type: "danger" });
      })
      .then(() => {
        setDisableCreate(false);
      });
  }, [createKolt]);

  // Delete
  useEffect(() => {
    if (null === deleteData) return;
    axios
      .delete("http://localhost:3003/paspirtukai/" + deleteData.id)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [deleteData]);

  // Edit
  useEffect(() => {
    console.log(editData);
    if (null === editData) return;
    axios
      .put("http://localhost:3003/paspirtukai/" + editData.id, editData)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [editData]);

  // DELETE COMMENT
  const handleDeleteComment = (id) => {
    axios.delete("http://localhost:3003/komentarai/" + id).then((res) => {
      showMessage(res.data.msg);
      setLastUpdate(Date.now());
    });
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <KoltContext.Provider
      value={{
        kolt,
        setCreateKolt,
        setDeleteData,
        setModalData,
        modalData,
        setEditData,
        message,
        disableCreate,
        setDisableCreate,
        handleDeleteComment,
      }}
    >
      <div className="App">
        <header className="App-header"></header>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-ml-12">
              <KoltForm></KoltForm>
            </div>
            <div className="col-7 col-ml-12">
              <ScooterImage></ScooterImage>
            </div>
            <div className="col-12">
              <KoltList
                kolt={kolt}
                setDeleteData={setDeleteData}
                setModalData={setModalData}
              ></KoltList>
              <Statistics kolt={kolt}></Statistics>
            </div>
          </div>
          <KoltEdit
            setEditData={setEditData}
            modalData={modalData}
            setModalData={setModalData}
          ></KoltEdit>
        </div>
      </div>
    </KoltContext.Provider>
  );
}

export default App;
