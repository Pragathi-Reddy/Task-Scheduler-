const Task = require('../models/task');

const reminderScheduler = async () => {
  const now = new Date();
  const inOneHour = new Date(now.getTime() + 60 * 60 * 1000);

  const upcomingTasks = await Task.find({
    completed: false,
    dueDate: { $gte: now, $lte: inOneHour },
  });

  for (const task of upcomingTasks) {
    console.log(`🔔 Reminder: ${task.title} is due by ${task.dueDate}`);
  }
};

module.exports = reminderScheduler;
