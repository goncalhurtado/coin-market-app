import React from "react";
import PublicationGrid from "./PublicationGrid";

const Posts = () => {
  return (
    <>
      <div>
        <h4>For You</h4>
        <div>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Buscar publicaciones o usuarios"
          />
        </div>
        <div className="text-center mt-4">
          <PublicationGrid />
        </div>
      </div>
    </>
  );
};

export default Posts;
