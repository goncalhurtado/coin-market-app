import React from "react";

const UserFollow = () => {
  return (
    <>
      {" "}
      <li className="ms-3">
        <div className="d-flex">
          <div>
            <img
              src="https://s2.coinmarketcap.com/static/cloud/img/avatars/default.png"
              alt="userImg"
              className="recomend-img"
            />
          </div>
          <div>
            <p className="m-0">Username</p>
            <p className="m-0 text-secondary">@User</p>
          </div>
          <div className="ms-auto me-3">
            <div className="btn btn-secondary btn-follow">Seguir</div>
          </div>
        </div>
      </li>
    </>
  );
};

export default UserFollow;
