import React from "react";
import NavCommunity from "../../components/navs/NavCommunity";
import TrendGrid from "../../components/trending/TrendGrid";

const Trending = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <NavCommunity />
          </div>
          <div className="col-10 vh-100">
            <TrendGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
