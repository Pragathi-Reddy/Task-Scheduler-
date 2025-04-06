const Task = require('../models/task');

const reminderScheduler = async () => {
  const now = new Date();
  const inOneHour = new Date(now.getTime() + 60 * 60 * 1000);

  const upcomingTasks = await Task.find({
    dueDate: { $gte: now, $lte: inOneHour },
    completed: false,
  });

  upcomingTasks.forEach(task => {
    console.log(`⏰ Reminder: "${task.title}" is due at ${task.dueDate.toLocaleString()}`);
    // In production, you'd send an email/push notification here
  });
};

module.exports = reminderScheduler;
