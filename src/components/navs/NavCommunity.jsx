import React from "react";
import { Link } from "react-router-dom";

const NavCommunity = () => {
  return (
    <>
      <div className="navcom pt-3 d-flex align-items-center">
        <div>
          <div className="navcom__header">
            <div className="d-flex align-items-center navcom__link__content">
              <i className="bi bi-globe m-0"></i>
              <h5 className="p-0 m-0 ms-2 ">Communidad</h5>
            </div>
          </div>
          <Link to="/community/*" className="navcom__link">
            <div className="d-flex navcom__link__content">
              <i className="bi bi-wifi"></i>
              <p className="p-0 m-0 ms-2 mt-1">Feed</p>
            </div>
          </Link>
          <Link to="/community/trending" className="navcom__link">
            <div className="d-flex navcom__link__content">
              <i className="bi bi-hash"></i>
              <p className="p-0 m-0 ms-2 mt-1">Temas</p>
            </div>
          </Link>
          <Link to="/community/mypage" className="navcom__link">
            <div className="d-flex navcom__link__content">
              <i className="bi bi-person"></i>
              <p className="p-0 m-0 ms-2 mt-1">Mi pagina</p>
            </div>
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default NavCommunity;
