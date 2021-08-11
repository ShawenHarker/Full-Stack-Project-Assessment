import React, { useState } from "react";
import "./App.css";
import Data from "./Data/exampleresponse.json";
import Header from "./Header";
import PostNewVideo from "./PostNewVideo";
import VideoCardCreated from "./VideoCardCreated";


function App() {
  const [data, setData] = useState(Data);

  return (
    <div className="App">
      <Header />
      <PostNewVideo Data={data} setData={setData} />
      <VideoCardCreated Data={data} setData={setData} />
    </div>
  );
}

export default App;
