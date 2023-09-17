import React from "react";

const UserFollow = ({ userData }) => {
  return (
    <>
      <li className="ms-3">
        <div className="d-flex mb-2">
          <div>
            <img
              src={userData.profile_picture}
              alt="userImg"
              className="recomend-img me-2"
            />
          </div>
          <div className="mb-auto ">
            <p className="m-0 username p-0">
              {userData.first_name} {userData.last_name}
            </p>
            <p className="m-0 text-secondary p-0 user mt-1">
              @{userData.username}
            </p>
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
