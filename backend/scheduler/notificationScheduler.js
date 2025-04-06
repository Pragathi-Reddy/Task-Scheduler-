const cron = require('node-cron');
const Task = require('../models/taskModel');

cron.schedule('*/10 * * * * *', async () => {
  console.log('🔔 Checking for upcoming task reminders...');
  const now = new Date();
  const tenMinutesLater = new Date(now.getTime() + 10 * 60000); // 10 min from now

  try {
    const upcomingTasks = await Task.find({
      dueDate: { $gte: now, $lte: tenMinutesLater },
      completed: false,
    });

    for (const task of upcomingTasks) {
      console.log(`🔔 Reminder: "${task.title}" is due at ${task.dueDate}`);
    }
  } catch (err) {
    console.error('❌ Error in notification scheduler:', err);
  }
});

