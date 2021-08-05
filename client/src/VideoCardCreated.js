import React, { useState } from "react";
import Data from "./Data/exampleresponse.json";
import "./App.css";

const VideoCardCreated = () => {
  let [countPlusOne, setCountPlusOne] = useState();
  let [countMinusOne, setCountMinusOne] = useState();

  // const ratingPlusOne = () => {
  //   setCountPlusOne((prevCountPlusOne) => prevCountPlusOne + 1);
  // };

  return (
    <div>
      <div>
        {Data.map((data, index) => (
          <div key={index} className="container card card-display">
            <iframe
              src={data.url}
              title={data.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h4 className="card-title">{data.title}</h4>
            <h6 className="card-text">
              <button
                className="btn"
                onClick={() =>
                  setCountPlusOne((prevCountPlusOne) => prevCountPlusOne + 1)
                }
              >
                <span class="material-icons thumb">thumb_up</span>
              </button>
              {data.rating}
              <button className="btn">
                <span class="material-icons thumb">thumb_down</span>
              </button>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCardCreated;