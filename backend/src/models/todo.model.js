const mongoose = require("mongoose");

const ToDoSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  done: Boolean,
  priority: {
    type: Number,
    default: 0,
    min: 0,
    max: 2,
  },
});

module.exports = mongoose.model("ToDo", ToDoSchema);
