import React from "react";
import NavCommunity from "../../components/navs/NavCommunity";
import TrendGrid from "../../components/trending/TrendGrid";

const Trending = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <NavCommunity />
          </div>
          <div className="col-10">
            <TrendGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
