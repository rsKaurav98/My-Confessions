const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const { getAllConfessions, createConfession } = require('../controllers/ConfessionsController');


// Get all confessions
router.get('/',protect, getAllConfessions);

// Create a confession (requires authentication)
router.post('/', protect, createConfession);

module.exports = router;
