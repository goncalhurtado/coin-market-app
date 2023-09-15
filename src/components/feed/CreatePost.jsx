import React from "react";

const CreatePost = () => {
  return (
    <>
      <div className="row d-flex justify-content-center mt-3">
        <div className="col-2 d-flex flex-column justify-content-center">
          <div className="">
            <div className="text-center">
              <img
                className=""
                src="https://s2.coinmarketcap.com/static/cloud/img/avatars/default.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-center">
              <h5>Guest</h5>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="col-2"></div>
          <div className="form-floating">
            <textarea
              className="form-control text-area-post"
              placeholder="How do you feel about the markets today? Share your ideas here!"
              id="floatingTextarea"
            ></textarea>
          </div>
          <div className="d-flex align-items-center mt-1">
            <div className="me-auto p-2">
              <i className="bi bi-emoji-smile"></i>
            </div>

            <div type="submit" className="btn btn-primary" value="">
              Post
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
