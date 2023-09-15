import React from "react";
import NavCommunity from "../../components/navs/NavCommunity";
import Posts from "../../components/feed/Posts.jsx";
import Recomend from "../../components/feed/Recomend";
import CreatePost from "../../components/feed/CreatePost";

const Feed = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <NavCommunity />
          </div>
          <div className="col-7 mt-3">
            <CreatePost />
            <div className="m-auto mt-3">
              <div>
                <div className="">
                  <Posts />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <Recomend />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
