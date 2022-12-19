import express from "express";

const PORT: number = 3000;

const app = express();

app.listen(PORT || 8080, () => {
  console.log("app is runing");
});
