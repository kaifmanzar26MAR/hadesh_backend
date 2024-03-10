import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import homeRouter from "./routes/home.routes.js";
import adminRouter from "./routes/admin.routes.js"
import hadeshRouter from './routes/hadesh.routes.js'

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);


app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes declaration
app.use("/", homeRouter);
app.use("/admin",adminRouter);
app.use('/hadesh', hadeshRouter)


export { app };