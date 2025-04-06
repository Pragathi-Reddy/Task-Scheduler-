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
  completed: {
    type: Boolean,
    default: false,
  },
  recurring: {
    type: String,
    enum: ['none', 'daily', 'weekly'],
    default: 'none',
  },
});

module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);
