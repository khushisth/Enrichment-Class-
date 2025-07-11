const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "manager", "employee"],
    required: true,
  },
  isActive: { type: Boolean, default: true },
  isTempPassword: { type: Boolean, default: false },
  tempPasswordExpiry: { type: Date },
  requiresPasswordReset: { type: Boolean, default: false },
  lastLogin: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
