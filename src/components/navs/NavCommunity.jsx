import React from "react";
import { Link } from "react-router-dom";

const NavCommunity = () => {
  return (
    <>
      <div className="navcom">
        <div className="navcom__link">
          <div className="d-flex">
            {/* <a>logo</a> */}
            <h5>Communidad</h5>
          </div>
        </div>
        <Link to="/community/*" className="navcom__link">
          <div className="d-flex">
            {/* <a>logo</a> */}
            <p>Feed</p>
          </div>
        </Link>
        <Link to="/community/trending" className="navcom__link">
          <div className="d-flex">
            {/* <a>logo</a> */}
            <p>Temas</p>
          </div>
        </Link>
        <Link to="/community/mypage" className="navcom__link">
          <div className="d-flex">
            {/* <a>logo</a> */}
            <p>Mi pagina</p>
          </div>
        </Link>{" "}
      </div>
    </>
  );
};

export default NavCommunity;
