import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddNewVideo from "./components/AddNewVideo";
import CreateVideoCard from "./components/CreateVideoCard";

import "./App.css";

function App() {
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/video_data")
      .then((res) => res.json())
      .then((data) => setVideoData(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddNewVideo />
        {videoData && videoData.map(videoItem => {
          return <CreateVideoCard key={videoItem.id} video={videoItem} />
        })}
      </div>
    </div>
  );
}

export default App;
