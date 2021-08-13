import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import PostNewVideo from "./PostNewVideo";
import SearchBar from "./SearchBar";
import VideoCardCreated from "./VideoCardCreated";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/video_recommendation")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <PostNewVideo Data={data} setData={setData} />
      <SearchBar />
      <VideoCardCreated Data={data} setData={setData} />
    </div>
  );
}

export default App;
