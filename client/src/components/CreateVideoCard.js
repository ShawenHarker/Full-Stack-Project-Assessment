import React, { useState } from "react";

const CreateVideoCard = ({ video }) => {
  const { title, url, rating } = video;

  const [newRating, setNewRating] = useState(rating);

  const upVote = (rating) => {
    setNewRating(rating + 1);
  };

  const downVote = (rating) => {
    setNewRating(rating - 1);
  };

  return (
    <div className="card">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${url.replace(
          "https://www.youtube.com/watch?v=",
          ""
        )}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>{title}</h3>
      <div className="rating-section-styling">
        <button className="btn" onClick={() => upVote(newRating)}>
          <span className="material-icons thumb">thumb_up</span>
        </button>
        <h3>{newRating}</h3>
        <button className="btn" onClick={() => downVote(newRating)}>
          <span className="material-icons thumb">thumb_down</span>
        </button>
      </div>
    </div>
  );
};

export default CreateVideoCard;
