// Importing dotenv and configuring it to load environment variables from a .env file
// import dotenv from 'dotenv'; dotenv.config();

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// Establishing a connection to the MongoDB database
connectDB()
  .then(() => {
    // Starting the Express server to listen for incoming requests
    app.listen(process.env.PORT || 8000, () => {
      // Logging a message indicating that the server is running and on which port
      console.log(`Server is running at port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    // Logging an error message if the MongoDB connection fails
    console.log("MongoDB connection failed !!! ", err);
  });
