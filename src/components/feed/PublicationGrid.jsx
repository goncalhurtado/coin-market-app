import React, { useEffect, useState } from "react";
import Publication from "./Publication";
import { getPublications } from "../../helpers/feedHelpers/getPublications";

const PublicationGrid = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let result = await getPublications(4);
        setPosts(result);
      } catch (error) {
        console.error("error", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center row">
        {posts.map((data) => {
          return <Publication post={data} key={data.post_id} />;
        })}
      </div>
    </>
  );
};

export default PublicationGrid;
