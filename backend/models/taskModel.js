const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  repeat: {
    type: String,
    enum: ['none', 'daily', 'weekly', 'monthly'],
    default: 'none',
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);
