import React from "react";
import Publication from "./Publication";
import { getPosts } from "../../helpers/feedHelpers/getPost";

const PublicationGrid = () => {
  getPosts();
  return (
    <>
      <div className="d-flex justify-content-center">
        <Publication />
      </div>
    </>
  );
};

export default PublicationGrid;
