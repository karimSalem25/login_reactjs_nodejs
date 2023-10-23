const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add  name"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
    status: {
      type: Boolean,
      default: true,
    },
    resume: {
      data: Buffer, // Store the file data as a binary buffer
      contentType: String, // Store the content type of the file (e.g., 'application/pdf')
      fileName: String,
      // default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
