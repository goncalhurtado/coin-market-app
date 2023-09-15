import React from "react";
import { Route, Routes } from "react-router-dom";
import NavCommunity from "../components/navs/NavCommunity";
import Feed from "./Community/Feed";
import Trending from "./Community/Trending";
import MyPage from "./Community/MyPage";

const Community = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <NavCommunity />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/community/*" element={<Feed />} />
        <Route path="/community/trending" element={<Trending />} />
        <Route path="/community/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
};

export default Community;
