import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Home() {
  const [mahasiswa, setMahasiswa] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TEST}/mahasiswa`
      );
      // setMahasiswa.console.log(response.data.payload);
      setMahasiswa(response.data.payload.data);
    } catch (error) {
      alert("Can't Get Data", error);
    }
  };

  const handle = () => {
    axios
      .post(`${process.env.REACT_APP_TEST}/mahasiswa`, {
        mahasiswa,
      })
      .then((response) => {
        Navigate("/");
      });
  };
  useEffect(() => {
    getData();
  });
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="text-center">Input Data</h1>
          </div>
          <div className="col-lg-9 col-sm-12 col-xs-12">
            <div className="row mt-26">
              <h1 className="text-center">Daftar Data Mahasiswa</h1>
              {mahasiswa &&
                mahasiswa.map((item, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="col-lg-6 col-sm-12 col-xs-12 card text-white bg-secondary mt-2 mx-auto"
                        style={{ maxWidth: 550 }}
                      >
                        <div className="text-center mt-3">Data MHS</div>
                        <hr />
                        <div className="card-body ">
                          <p>Nama : {item.nama} </p>
                          <p>Alamat : {item.alamat} </p>
                          <p>
                            Tempat,Tanggal Lahir : {item.tempatLahir},
                            {item.tanggalLahir}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;
