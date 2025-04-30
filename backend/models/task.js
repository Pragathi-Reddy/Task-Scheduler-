const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dueDate: { type: String, required: true },
  recurrence: { type: String, default: 'One-Time' },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);
