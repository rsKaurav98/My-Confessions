const mongoose = require("mongoose");

const myConfessionSchema = new mongoose.Schema({
  ConfessionName: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming your user model is named "User"
    required: true,
  },
}, {
  timestamps: true,
});

const MyConfessionModel = mongoose.model("MyConfessionModel", myConfessionSchema);

module.exports = MyConfessionModel;
