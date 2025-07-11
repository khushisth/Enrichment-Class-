import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ["male", "female", "other"] },
  contactNumber: { type: String },
  address: { type: String },
  hireDate: { type: Date },
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  position: { type: String },
  salary: { type: Number },
  employmentType: {
    type: String,
    enum: ["full-time", "part-time", "contract"],
  },
  leaveBalance: {
    annual: { type: Number, default: 0 },
    sick: { type: Number, default: 0 },
    number: { type: Number, default: 0 },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Employee", employeeSchema);
