const asyncHandler = require('express-async-handler');
const MyConfessionModel = require('../Models/myConfessionsModel');

// Function to get all confessions
const getAllConfessions = asyncHandler(async (req, res) => {
  const allConfessions = await MyConfessionModel.find().populate('user', 'name email pic');

  res.status(200).json(allConfessions);
});

// Function to create a confession for the current logged-in user
const createConfession = asyncHandler(async (req, res) => {
  const { ConfessionName, content } = req.body;

  const confession = await MyConfessionModel.create({
    ConfessionName,
    content,
    user: req.user._id, // Assuming req.user._id contains the current user's ID
  });

  res.status(201).json(confession);
});

module.exports = { getAllConfessions, createConfession };
