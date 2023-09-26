import express from "express";
import routes from "./routes";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();

app.use(cors());
app.use(routes);
app.use(express.json());

app.listen(process.env.PORT || 3333);
