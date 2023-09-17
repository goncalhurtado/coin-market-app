import React from "react";

const CardNews = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="w-50 mb-4">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://ipsnoticias.net/wp-content/uploads/2021/05/seguridad-de-criptomoneda-629x347-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero, vitae veniam? Mollitia.
                  </p>
                  <p className="card-text">
                    <small className="text-secondary">date</small>
                  </p>
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
