import React, { useState } from "react";
import Data from "./Data/exampleresponse.json";
import "./App.css";
import NewVideoInput from "./NewVideoInput";

const VideoCardCreated = () => {
  let [countPlusOne, setCountPlusOne] = useState();
  let [countMinusOne, setCountMinusOne] = useState();
  let [deleteVideo, setDeleteVideo] = useState();

  const RatingPlusOne = () => {
    setCountPlusOne((prevCountPlusOne) => prevCountPlusOne + 1);
  };

  return (
    <div>
      <NewVideoInput />
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
              <button className="btn" onClick={RatingPlusOne}>
                <span class="material-icons thumb">thumb_up</span>
              </button>
              {data.rating}
              <button className="btn">
                <span class="material-icons thumb">thumb_down</span>
              </button>
            </h6>
            <button
              className="delete btn"
              // onClick={setDeleteVideo(
              //   (Data.filter((data) => {
              //     if (data.title === {index}) {
              //       return false;
              //     } else {
              //       return true;
              //     }
              //   }))
              // )}
            >
              <span class="material-icons delete">delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCardCreated;