import React from "react";
import Data from "./Data/exampleresponse.json";
import "./App.css";

const VideoCardCreated = () => {
  return (
    <div>
      <div>
        {Data.map((data, index) => (
          <div key={index} className="container card card-display">
            <iframe
              src={data.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <h4 className="card-title">{data.title}</h4>
            <h6 className="card-text">{data.rating}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCardCreated;