Task Scheduler
A simple and intuitive task scheduler app built with React. This app allows users to add, edit, complete, and delete tasks with specific due dates and times, and provides reminders for upcoming tasks. The app also supports dark mode and task persistence across sessions.

Features
📝 Task Management:

Add new tasks with a title, due date, due time, priority, and category.

Edit existing tasks.

Mark tasks as completed.

Delete tasks.

📅 Date and Time:

Set due date and time for tasks.

Real-time reminders 5 minutes before the task's due time.

⏰ Reminders:

Notifications via react-toastify when tasks are due soon (within 5 minutes).

Audio reminder plays when a task is due soon.

⚖️ Priority & Category:

Tasks can have different priority levels: High, Medium, Low.

Tasks can be categorized as Work or Personal.

🌙 Dark Mode:

Toggle dark mode for a better visual experience.

User preferences are saved in localStorage, so the dark mode setting persists across sessions.

💾 Task Persistence:

Tasks are saved in localStorage to persist even after page reloads.

Tech Stack
React: Frontend library for building the user interface.

Material-UI: For UI components like DatePicker, TextField, and buttons.

react-toastify: For showing toast notifications for reminders.

Local Storage: For saving tasks and dark mode settings across sessions.

Installation
To run the Task Scheduler app locally, follow these steps:

Clone this repository:

bash
Copy
Edit
git clone https://github.com/your-username/task-scheduler.git
cd task-scheduler
Install dependencies:

bash
Copy
Edit
npm install
Run the app:

bash
Copy
Edit
npm start
Open your browser and navigate to http://localhost:3000 to see the app in action.

Usage
➕ Add a Task:

Enter the task name, select a due date, time, priority, and category, then click "Add Task" to create a new task.

✏️ Edit a Task:

Click the edit button on a task to modify its details.

✅ Mark a Task as Completed:

Click the checkmark button to mark a task as completed.

🗑️ Delete a Task:

Click the trash icon to delete a task.

🌙 Toggle Dark Mode:

Click the "Dark Mode" button to toggle between light and dark themes.

Screenshots

Known Issues
🎵 Audio reminder may not work in some browsers due to autoplay restrictions. If you experience issues, ensure your browser allows autoplay for audio.

Future Enhancements
🔍 Task Search: Allow users to search for tasks by name or category.

🔁 Recurring Tasks: Support for recurring tasks with daily, weekly, or monthly options.

🧑‍💻 Task Sorting: Ability to sort tasks by priority or due date.

☁️ Cloud Sync: Sync tasks across devices using a backend service.

License
This project is licensed under the MIT License.


