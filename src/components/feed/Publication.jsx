import React from "react";

const Publication = () => {
  return (
    <div className="card w-75 d-flex">
      <div className="row">
        <div className="col-1">
          <img src="" alt="avatar" className="" />
        </div>
        <div className="col-9">
          <div className="d-flex">
            <h5>username</h5>
            <p className="card-text">
              <small className="text-body-secondary">@user</small>
            </p>
          </div>
        </div>
        <div className="col-2">
          <div className="btn btn-primary">+ seguir</div>
        </div>
      </div>
      <div className="">
        <img
          className="card-img w-75"
          src="https://st1.u-tad.com/media/2021/02/animacion-2d-img-2-1024x576.jpg"
          alt=""
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic
          doloremque ut. Accusamus, delectus incidunt.
        </p>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex">
          <p>10</p>
          <a href="">like</a>
        </div>
        <div className="d-flex">
          <p>5</p>
          <a href="">dislike</a>
        </div>
        <div className="d-flex">
          <p>3</p>
          <a href="">rt</a>
        </div>
        <div className="d-flex">
          <p>5</p>
          <a href="">commment</a>
        </div>
      </div>
    </div>
  );
};

export default Publication;