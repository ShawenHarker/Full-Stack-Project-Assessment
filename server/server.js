const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATA,
  password: process.env.PASSWORD,
  port: process.env.PORT
});

const cors = require("cors");
app.use(cors());

// app.get("/hotels", function (req, res) {
//   pool
//     .query("SELECT * FROM hotels")
//     .then((result) => res.json(result.rows))
//     .catch((e) => console.error(e));
// });

app.get("/video_data", (req, res) => {
  pool
  .query("SELECT * FROM video_recommendation")
  .then(result => res.json(result.rows))
  .catch(e => console.log(e));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));