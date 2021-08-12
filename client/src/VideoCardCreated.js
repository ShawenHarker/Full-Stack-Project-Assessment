import React from "react";
import "./App.css";

const VideoCardCreated = ({ Data }) => {

  return (
    <div>
      {Data && Data.map((data, index) => (
        <div key={index} className="container card card-display">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${data.url.replace(
              "https://www.youtube.com/watch?v=",
              ""
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h4 className="card-title">{data.title}</h4>
          <h6 className="card-text">
            <button className="btn">
              <span className="material-icons thumb">thumb_up</span>
            </button>
            {data.rating}
            <button className="btn">
              <span className="material-icons thumb">thumb_down</span>
            </button>
          </h6>
          <button className="delete btn">
            <span className="material-icons delete">delete</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default VideoCardCreated;
