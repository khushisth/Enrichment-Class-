import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    employeeID: {
      type: String,
      required: [true, "ID is required"],
      unique: true,
    },
    salary: {
      type: Number,
      required: [true, "salary is required"],
      select: false,
    },
    department: {
      type: String,

      enum: ["IT", "BBA", "Resource"],
    },
  },
  {
    timestamps: true,
  }
);

export const Employee = mongoose.model("Employee", EmployeeSchema);
