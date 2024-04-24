import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware for CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allowing requests from a specific origin defined in environment variable CORS_ORIGIN
    credentials: true, // Allowing credentials to be sent with CORS requests
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };
