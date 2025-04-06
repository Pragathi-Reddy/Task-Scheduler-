const Task = require('../models/task');

const recurringScheduler = async () => {
  const now = new Date();

  const tasks = await Task.find({ recurring: { $ne: 'none' }, dueDate: { $lte: now } });

  for (const task of tasks) {
    let nextDate = new Date(task.dueDate);
    if (task.recurring === 'daily') nextDate.setDate(nextDate.getDate() + 1);
    if (task.recurring === 'weekly') nextDate.setDate(nextDate.getDate() + 7);

    await Task.create({
      title: task.title,
      dueDate: nextDate,
      recurring: task.recurring,
    });

    console.log(`🔁 Recurring Task Added: ${task.title} for ${nextDate}`);
  }
};

module.exports = recurringScheduler;
