import express, { Request, Response } from "express";

import cors from "cors";
import authRouter from "./routes/userRout";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// apis

app.use("/api/register", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
