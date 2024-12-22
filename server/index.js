import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;
const apiKey = process.env.OMDB_API_KEY;

app.get("/api", async (req, res) => {
  try {
    const title = req.query.title;
    if (!title) {
      res.status(400).send("Title is invalid");
    }
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
    );
    res.send(response.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
