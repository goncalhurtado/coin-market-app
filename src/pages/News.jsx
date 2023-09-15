import React from "react";
import CardNews from "../components/news/CardNews";

const News = () => {
  return (
    <>
      <div className="container mt-3">
        <div>
          <div className="d-flex">
            <h3 className="flex-fill">Noticias</h3>
            <a href="" className="">
              Filtrar por etc
            </a>
          </div>
          <p>Insights into the biggest events shaping the crypto industry.</p>
        </div>
        <div>
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
      </div>
    </>
  );
};

export default News;
