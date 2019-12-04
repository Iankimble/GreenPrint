const Event = require("../models/event-model");
const _ = require("lodash");

// Logic for creating a new Event
exports.createNewEvent = (req, res) => {
  let newEvent = new Event(req.body);
  newEvent.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "something went wrong..."
      });
    }
    res.json({ message: "test Event has been added!" });
  });
};

// Logic for getting all Events
exports.getAllEvents = (req, res) => {
  Event.find((err, events) => {
    if (err) {
      res.status(400).json({
        err: err
      });
    }
    res.json(events);
  });
};

// Logic for getting an Event by ID
exports.eventById = (req, res) => {
  let id = req.params.id;
  Event.findById(id, (err, data) => {
    if (err) {
      return res.status(400).json({
        msg: `Can't find Event`
      });
    }
    res.json(data);
  });
};

// Logic to edit a Event
exports.editEvent = (req, res) => {
  Event.findById(req.params.id, (err, newData) => {
    if (err || !newData) {
      res.status(400).json({ msg: "nope" });
    }
    newData.title = req.body.title;
    newData.eventDate = req.body.eventDate;
    newData.description = req.body.description;

    newData.save().then(newData => {
      res.json(newData);
    });
  });
};

// Logice to delete an Event
exports.deleteEvent = (req, res) => {
  let id = req.params.id;
  Event.findById(id, (err, data) => {
    if (err || !data) {
      return res.status(400).json({ msg: "nope" });
    }
    data.remove();
    res.json({ msg: "done" });
  });
};
