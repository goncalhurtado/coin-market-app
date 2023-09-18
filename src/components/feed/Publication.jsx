import React from "react";

const Publication = ({ post }) => {
  return (
    <div className="card card-publication w-75 d-flex mb-5 col-12">
      <div className="row">
        <div className="col-1">
          <img
            src={post.profile_picture}
            alt="avatar"
            className="rounded-circle"
          />
        </div>
        <div className="col-9 ms-3">
          <div className="d-flex">
            <p className="username">
              {post.first_name} {post.last_name}
            </p>
            <p className="card-text">
              <small className="user">@{post.username}</small>
            </p>
          </div>
          <div>
            <p className="text-start">{post.post}</p>
          </div>
        </div>
        <div className="col-1">
          <div className="btn btn-primary btn-follow">Seguir</div>
        </div>
      </div>
      <div className="">
        <img
          className="card-img w-75 mb-2 publication-img"
          src={post.img}
          alt=""
        />
      </div>

      <div className="ms-5 me-5 d-flex justify-content-around">
        <div className="d-flex">
          <i className="bi bi-suit-heart"></i>
          <p className="ms-1">{post.likes}</p>
        </div>
        <div className="d-flex">
          <i className="bi bi-repeat"></i>
          <p className="ms-1">{post.shared}</p>
        </div>
        <div className="d-flex">
          <i className="bi bi-chat-right-dots"></i>
          <p className="ms-1">{post.comments}</p>
        </div>
        <div className="d-flex">
          <i className="bi bi-three-dots"></i>
        </div>
      </div>
    </div>
  );
};

export default Publication;
