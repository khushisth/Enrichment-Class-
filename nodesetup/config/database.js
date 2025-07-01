// mongodb+srv://khushi:12345@learning.n9k6j1p.mongodb.net/?retryWrites=true&w=majority&appName=learningimport mongoose from "mongoose";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(
      ()=>{
        console.log("Khushi le connect garo hai");
      }
    );
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
  }
};
connectDB()
  .then(() => {
    console.log("Database connection established successfully.");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

export default connectDB;
