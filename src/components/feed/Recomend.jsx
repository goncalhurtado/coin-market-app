import React from "react";
import UserFollow from "./UserFollow";

const Recomend = () => {
  return (
    <div className="card card-primary mt-3 pt-3 pb-3">
      <h6 className="text-start ms-3 ">Cuentas recomendadas</h6>
      <ul className="m-0 p-0 text-start">
        <UserFollow />
        <UserFollow />
        <UserFollow />
        <UserFollow />
      </ul>
    </div>
  );
};

export default Recomend;
