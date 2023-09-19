import React from "react";

const CoinInfo = ({ coininfo, setCoinnfo }) => {
  return (
    <div>
      <div>{coininfo}</div>
      <div
        className="btn btn-secondary"
        onClick={(e) => {
          e.preventDefault();

          setCoinnfo();
        }}
      >
        Volver
      </div>
    </div>
  );
};

export default CoinInfo;
