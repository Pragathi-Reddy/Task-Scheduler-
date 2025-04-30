const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./models/Task');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/taskscheduler', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/api/tasks', async (req, res) => {
  const { title, dueDate, recurrence } = req.body;
  const task = new Task({ title, dueDate, recurrence });
  await task.save();
  res.status(201).json(task);
});

app.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  await Task.findByIdAndUpdate(id, { completed });
  res.sendStatus(200);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

