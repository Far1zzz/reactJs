import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [mahasiswa, setMahasiswa] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TEST}/mahasiswa`
      );
      setMahasiswa(response.data.payload.data);
    } catch (error) {
      alert("Can't Get Data", error);
    }
  };
  useEffect(() => {
    getData();
  });
  return (
    <React.Fragment>
      <div className="container">
        <div className="container-fluid">
          <h2>TEST API</h2>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;
