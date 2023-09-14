import React from "react";
import NavCommunity from "../../components/navs/NavCommunity";
import Posts from "../../components/feed/Posts.jsx";
import Recomend from "../../components/feed/Recomend";

const Feed = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <NavCommunity />
          </div>
          <div className="col-8">
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-2">
                <img
                  src="https://s2.coinmarketcap.com/static/cloud/img/avatars/default.png"
                  alt=""
                />
                <h5>Guest</h5>
              </div>
              <div className="col-10">
                <div className="col-2"></div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                </div>
                <div className="text-end">
                  <div type="submit" className="btn btn-primary" value="">
                    Comment
                  </div>
                </div>
              </div>
            </div>
            <div className="m-auto mt-3">
              <div>
                <div className="">
                  <Posts />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <Recomend />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
