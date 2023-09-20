import React, { useEffect, useState } from "react";
import CardsHome from "../components/CardsHome";
import Table from "../components/Table";
import { getCoinList } from "../helpers/cryptoHelpers/getCryptoList";
import CoinInfo from "../components/CoinInfo";

const Crypto = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  const [coininfo, setCoinnfo] = useState([]);

  const [coins, setCoins] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let result = await getCoinList();
        setCoins(result);
      } catch (error) {
        console.error("error", error);
      }
    }
    fetchData();
    setCoinnfo("");
  }, []);

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
        <div className={!coininfo ? "mt-3" : "d-none"}>
          <Table data={coins} setCoinnfo={setCoinnfo} />
        </div>
        <div className={coininfo ? "mt-3" : "d-none"}>
          <CoinInfo coininfo={coininfo} setCoinnfo={setCoinnfo} />
        </div>
      </div>
    </>
  );
};

export default Crypto;
