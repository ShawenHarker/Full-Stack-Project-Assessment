import React from "react";

const CreateVideoCard = (props) => {

  const { title, url, rating } = props.video;

  return (
    <div>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${url.replace(
          "https://www.youtube.com/watch?v=",
          ""
        )}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>{title}</h3>
      <button className="btn">
        <span className="material-icons thumb">thumb_up</span>
      </button>
      <h3>{rating}</h3>
      <button className="btn">
        <span className="material-icons thumb">thumb_down</span>
      </button>
    </div>
  );
};

export default CreateVideoCard;
