import mongoose from "mongoose";
const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  managerId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Department", departmentSchema);
