import React from "react";

const Publication = () => {
  return (
    <div className="card card-publication w-75 d-flex mb-5">
      <div className="row">
        <div className="col-1">
          <img
            src="https://s2.coinmarketcap.com/static/cloud/img/avatars/default.png"
            alt="avatar"
            className="publication-img"
          />
        </div>
        <div className="col-9 ms-3">
          <div className="d-flex">
            <p className="username">Username</p>
            <p className="card-text">
              <small className="user">@user</small>
            </p>
          </div>
          <div>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              hic doloremque ut. Accusamus, delectus incidunt.
            </p>
          </div>
        </div>
        <div className="col-1">
          <div className="btn btn-primary btn-follow">Seguir</div>
        </div>
      </div>
      <div className="">
        <img
          className="card-img w-75 mb-2"
          src="https://st1.u-tad.com/media/2021/02/animacion-2d-img-2-1024x576.jpg"
          alt=""
        />
      </div>

      <div className="ms-5 me-5 d-flex justify-content-around">
        <div className="d-flex">
          <i className="bi bi-suit-heart"></i>
          <p className="ms-1">10</p>
        </div>
        <div className="d-flex">
          <i className="bi bi-repeat"></i>
          <p className="ms-1">3</p>
        </div>
        <div className="d-flex">
          <i className="bi bi-chat-right-dots"></i>
          <p className="ms-1">5</p>
        </div>
        <div className="d-flex">
          <i className="bi bi-three-dots"></i>
        </div>
      </div>
    </div>
  );
};

export default Publication;
