import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app: express.Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

import indexRouter from "./routes/index";
app.use("/", indexRouter);



const PORT: number = (!!process.env.PORT) ? parseInt(process.env.PORT) : 3000;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
});