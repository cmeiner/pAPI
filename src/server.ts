import express from "express";
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("server is running on on http://localhost:3000");
});
