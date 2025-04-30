const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB (Replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/task-scheduler', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Task Model
const taskSchema = new mongoose.Schema({
  title: String,
  dueDate: Date,
  completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

// Routes
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
