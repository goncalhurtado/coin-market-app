import React from "react";
import NavCommunity from "../../components/navs/NavCommunity";

const Feed = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <NavCommunity />{" "}
          </div>
          <div className="col-10">Feed</div>
        </div>
      </div>
    </>
  );
};

export default Feed;
