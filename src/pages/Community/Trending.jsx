import React from "react";
import NavCommunity from "../../components/navs/NavCommunity";
import TrendingCards from "../../components/trending/TrendingCard";

const Trending = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <NavCommunity />
          </div>
          <div className="col-10">
            <TrendingCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
