import React, { useState } from "react";
import CardsHome from "../components/CardsHome";
import Table from "../components/Table";

const Crypto = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container mt-3">
        <div>
          <div className="d-flex">
            <h3 className="flex-fill">Principales 100 Criptomonedas</h3>
            <div className="d-flex align-items-center">
              <a href="" className="text-decoration-none me-1">
                Destacados
              </a>
              <i
                className={toggle ? "bi bi-toggle-on" : "bi bi-toggle-off"}
                onClick={handleToggle}
              ></i>
            </div>
          </div>
          <p className="text-secondary">
            La capitalización del mercado global de criptomonedas es $1.04T, un
            aumento de 1.17% durante el último día. <a className="">Leer más</a>
          </p>
        </div>
        <div className={toggle ? "" : "d-none"}>
          <CardsHome />
        </div>
        <div className="mt-5">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Crypto;
