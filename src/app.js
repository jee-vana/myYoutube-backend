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

// Middleware to parse JSON requests with a limit of 16kb
app.use(express.json({ limit: "16kb" }));

// Middleware to parse URL-encoded requests with a limit of 16kb and extended option set to true
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serving static files from the "public" directory
app.use(express.static("public"));

// Middleware to parse cookies
app.use(cookieParser());

export { app };
