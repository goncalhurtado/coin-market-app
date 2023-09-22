import React, { useEffect, useState } from "react";
import CardNews from "../components/news/CardNews";
import { getNews } from "../helpers/newsHelpers/getNews";
import BannerCrypto from "../components/BannerCrypto";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let result = await getNews();
        setNews(result);
      } catch (error) {
        console.error("error", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div>
          <div className="d-flex">
            <h3 className="flex-fill">Noticias</h3>
            {/* <a href="" className="">
              Filtrar por etc
            </a> */}
          </div>
          <p>Insights into the biggest events shaping the crypto industry.</p>
        </div>
        <div>
          {news.map((data) => {
            return <CardNews news={data} key={data.news_id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default News;
