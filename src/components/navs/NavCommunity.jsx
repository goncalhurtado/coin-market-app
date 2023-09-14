import React from "react";
import { Link } from "react-router-dom";

const NavCommunity = () => {
  return (
    <>
      <div>
        <Link to="/community/*" className="">
          Comunidad
        </Link>
      </div>
      <div>
        <Link to="/community/feed" className="">
          Feed
        </Link>
      </div>
      <div>
        <Link to="/community/trending" className="">
          Temas
        </Link>
      </div>{" "}
      <div>
        <Link to="/community/mypage" className="">
          Mi página
        </Link>{" "}
      </div>
    </>
  );
};

export default NavCommunity;
