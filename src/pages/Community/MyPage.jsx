import React from "react";
import NavCommunity from "../../components/navs/NavCommunity";

const MyPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <NavCommunity />{" "}
          </div>
          <div className="col-10">Mi página</div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
