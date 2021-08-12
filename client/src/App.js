import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import PostNewVideo from "./PostNewVideo";
import VideoCardCreated from "./VideoCardCreated";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5000")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <PostNewVideo Data={data} setData={setData} />
      <VideoCardCreated Data={data} setData={setData} />
    </div>
  );
}

export default App;
