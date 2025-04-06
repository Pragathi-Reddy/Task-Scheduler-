const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const recurringScheduler = require('./schedulers/recurringScheduler');
const reminderScheduler = require('./schedulers/reminderScheduler');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/task-scheduler')
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

setInterval(reminderScheduler, 60000); // every 60 seconds
setInterval(recurringScheduler, 3600000); // every hour
