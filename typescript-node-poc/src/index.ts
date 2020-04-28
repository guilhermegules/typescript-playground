import express, { Request, Response } from "express";

const app = express();

interface Params {
  a: number;
  b: number;
}

type Add = (x: Params) => number;

const add: Add = (x) => {
  return x.a + x.b;
};

app.get("/", (req: Request, res: Response) => {
  res.send(add({ a: 1, b: 2 }));
});

app.listen(3001, () => {
  console.log("Server started");
});
