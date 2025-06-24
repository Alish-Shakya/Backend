import mongoose from "mongoose";

const LibrarySchema = new mongoose.Schema({
  books: {
    type: String,
    required: true,
  },
  returnDate: {
    type: String,
    required: true,
  },
  bookAuthor: {
    type: String,
    required: true,
  },
  rackNo: {
    type: Number,
    required: true,
  },
});

export default LibrarySchema;
