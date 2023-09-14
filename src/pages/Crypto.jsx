import React from "react";
import CardsHome from "../components/CardsHome";

const Crypto = () => {
  return (
    <>
      <div className="container">
        <div>
          <div className="d-flex">
            <h3 className="flex-fill">Principales 100 Criptomonedas</h3>
            <a href="" className="">
              destacados
            </a>
          </div>
          <p>
            La capitalización del mercado global de criptomonedas es $1.04T, un
            aumento de 1.17% durante el último día. <a href="">Leer más</a>
          </p>
        </div>
        <div>
          <CardsHome />
        </div>
      </div>
    </>
  );
};

export default Crypto;
