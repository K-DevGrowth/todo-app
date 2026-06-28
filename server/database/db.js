import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI, { family: 4 });

    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connection to DB", error.message);
    process.exit(1);
  }
};

export default connectToDatabase;
