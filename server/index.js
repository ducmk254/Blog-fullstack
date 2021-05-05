import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import posts from "./routers/postRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;
const URL =
  "mongodb+srv://admin:baconmeoBACONMEObaconmeo@cluster0.cn2uq.mongodb.net/blogs-db?retryWrites=true&w=majority";

// use middleware:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30Mb" })); // limit: gioi han dung luong file client co the dua len server
app.use(cors());

// route:
app.get("/", (req, res) => {
  res.send("Get Sucess");
});
app.use("/posts", posts);

//connect db adn start server
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`Server is running with ${PORT} port`));
  })
  .catch((err) => {
    console.log("Loi ket noi DB : ", err);
  });
