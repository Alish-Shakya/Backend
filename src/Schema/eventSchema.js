import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
});

export default eventSchema;
