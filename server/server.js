const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATA,
  password: process.env.PASSWORD,
  port: process.env.POSTHOST,
});

const cors = require("cors");
app.use(cors());

const videos = app.get("/videos_recommendation", (req, res) => {
  pool.query("SELECT * FROM video_recommendation", (error, result) => {
    res.json(result.rows);
  });
});

app.get("/", (req, res) => res.json(videos));

app.get("/:id", (req, res) => {
  const found = videos.some(video => video.id === parseInt(req.params.id));

  found ? res.json(videos.filter(video => video.id === parseInt(req.params.id))) :
  res.status(400).json({ msg: `No id of ${req.params.id} was found.`})
})

app.post("/videos", (req, res) => {
  const newVideo = {
    id: videos.length + 1,
    timeVideoSaved: new Date(),
    title: req.body.title,
    url: req.body.url,
    rating: 0
  }

  !newVideo.title || !newVideo.url ? 
  res.status(400).json({ result: "failure", msg: "Video could not be saved"}) :
  videos.push(newVideo);
  res.json(videos);
})

app.delete("/delete/:id", (req, res) => {
  const found = videos.some((video) => video.id === parseInt(req.params.id));

  found
    ? res.json({
        msg: `The video with the id of ${req.params.id} was deleted.`,
        videos: videos.filter((video) => video.id === parseInt(req.params.id)),
      })
    : res.status(404).json({ result: "Failure", msg: `No id of ${req.params.id} was found.` });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));