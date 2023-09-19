import React from "react";

const CardNews = ({ news }) => {
  const handle = (e) => {
    e.preventDefault();
    window.open(news.url, "_blank");
  };
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="w-50 mb-4">
          <div className="card news" onClick={handle}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={news.img} alt="" className="img-fluid news__img" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title news__title">{news.title}</h5>
                  <p className="card-text news__description m-0">
                    {news.description}
                  </p>
                  <div>
                    <p className="card-text">
                      <small className="text-secondary news__date">
                        {news.date}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNews;
