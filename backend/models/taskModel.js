const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  dueDate: Date,
  completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
