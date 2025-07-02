// mongodb+srv://khushi:12345@learning.n9k6j1p.mongodb.net/?retryWrites=true&w=majority&appName=learningimport mongoose from "mongoose";
import dotenv from "dotenv";
import mongoose from "mongoose";

// mongodb+srv://khushi:khushi@enrichment.jneavqj.mongodb.net/?retryWrites=true&w=majority&appName=enrichment

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://kushi:kushi@enrichment.jneavqj.mongodb.net/?retryWrites=true&w=majority&appName=enrichment", {
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDB;
