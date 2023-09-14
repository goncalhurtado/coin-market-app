import React from "react";
import NavCommunity from "../../components/navs/NavCommunity";

const Trending = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <NavCommunity />
          </div>
          <div className="col-10">Temas</div>
        </div>
      </div>
    </>
  );
};

export default Trending;
