const express = require("express");
const {
  getAllEvents,
  createNewEvent,
  eventById,
  editEvent,
  deleteEvent
} = require("../controllers/event-controller");

const router = express.Router();

// Route to get all events
router.get("/events", getAllEvents);

// Route to create a new event
router.post("/new/event", createNewEvent);

// Route to get a specific event by ID
router.get("/read/event/:id", eventById);

// Route to edit a specific event by ID
router.put("/edit/event/:id", editEvent);

// Route to delete a specific event by ID
router.delete("/delete/event/:id", deleteEvent);

module.exports = router;
