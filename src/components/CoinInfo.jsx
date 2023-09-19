import React from "react";

const CoinInfo = ({ coininfo, setCoinnfo }) => {
  console.log(coininfo);
  return (
    <div>
      <div>{coininfo.id}</div>
      <div className="row">
        <div className="col-2">
          <div className="d-flex align-items-center">
            <img
              src={coininfo.image}
              alt={coininfo.name}
              className="crypto_img"
            />
            <p className="m-0">{coininfo.name}</p>
            <p className="m-0 ms-1">{coininfo.symbol}</p>
          </div>
          <div>
            <h2>$ {coininfo.current_price}</h2>
          </div>
          <div className="d-flex flex-column">
            <div>
              <div className="btn btn-secondary w-100 disabled">
                Agregar a favoritos
              </div>
            </div>
            <div>
              <div className="btn btn-secondary w-100 disabled">
                Seguimiento de la cartera
              </div>
            </div>
          </div>
          <div className="d-flex">
            <p>Capitalizacion del mercado</p>
            <p>
              {coininfo.market_cap} #{coininfo.market_cap_rank}
            </p>
          </div>
          <div className="d-flex">
            <p>Volumen (24hs)</p>
            <p>{coininfo.total_volume}</p>
          </div>
          <div className="d-flex">
            <p>Suministro en circulación</p>
            <p>{coininfo.circulating_supply}</p>
          </div>
          <div className="d-flex">
            <p>Suministro total</p>
            <p>{coininfo.total_supply}</p>
          </div>
          <div className="d-flex">
            <p>Suministro máx.</p>
            <p>{coininfo.max_supply}</p>
          </div>
          <div>
            <div className="d-flex">
              <p>Máximo histórico</p>
              <p>{coininfo.ath}</p>
            </div>
            <div className="d-flex">
              <p>{coininfo.ath_date}</p>
              <p>%{coininfo.ath_change_percentage}</p>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <p>Mínimo histórico</p>
              <p>{coininfo.atl}</p>
            </div>
            <div className="d-flex">
              <p>{coininfo.atl_date}</p>
              <p>%{coininfo.atl_change_percentage}</p>
            </div>
          </div>
        </div>

        <div className="col-8">Graficos</div>
        <div className="col-2">Noticias</div>
      </div>
      <div
        className="btn btn-secondary"
        onClick={(e) => {
          e.preventDefault();
          setCoinnfo("");
        }}
      >
        Volver
      </div>
    </div>
  );
};

export default CoinInfo;
