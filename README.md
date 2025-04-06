
A Task Scheduler application built using Node.js, Express, MongoDB, and React. This project allows users to manage tasks, set recurring events, mark tasks as completed, and receive notifications for reminders. The application features a clean user interface with date and time pickers, and uses cron jobs to handle task scheduling.

## ✨ Features

- ✅ **Task Creation**: Add tasks with a title and due date.
- 🔁 **Recurring Tasks**: Schedule tasks to repeat daily, weekly, or at custom intervals.
- ✔️ **Mark Tasks as Completed**: Track completed tasks and move them to a separate list.
- 🗂️ **Completed Tasks View**: View completed tasks in a separate list.
- 🔔 **Notifications/Reminders**: Receive reminders for upcoming or active tasks.
- 🧩 **REST APIs**: Create, update, delete, and retrieve tasks via API.
- ⏰ **Cron Jobs**: Automatically handle recurring tasks and scheduled reminders.
- 📅 **UI with Date and Time Pickers**: Clean, user-friendly interface for scheduling.

## 🛠️ Technologies Used

### Backend:
- Node.js
- Express.js
- MongoDB
- Cron (for task automation)
- Push Notifications (optional)

### Frontend:
- React
- Axios
- React Calendar
- Date & Time Pickers

## 🚀 Setup Instructions

### ✅ Prerequisites
Make sure the following are installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

---

### 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Pragathi-Reddy/Task-Scheduler.git
cd Task-Scheduler
Install backend dependencies:

bash
Copy
Edit
cd backend
npm install
Install frontend dependencies:

bash
Copy
Edit
cd ../frontend
npm install
Set up environment variables: Create a .env file in backend/:

env
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/task-scheduler
▶️ Running the Application
Start the backend:

bash
Copy
Edit
cd backend
npm start
Start the frontend:

bash
Copy
Edit
cd ../frontend
npm start
🌐 Access the App
Backend API: http://localhost:5000

Frontend UI: http://localhost:3000

📚 API Endpoints
Method	Endpoint	Description
POST	/tasks	Create a new task
GET	/tasks	Retrieve all tasks
GET	/tasks/completed	Retrieve completed tasks
PUT	/tasks/:id	Update or mark task as completed
DELETE	/tasks/:id	Delete a task
POST	/tasks/recurring	Create recurring tasks
🤝 Contributing
Fork the repo, create a branch, and submit a pull request. Contributions are welcome!

📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.

yaml
Copy
Edit

---

### 📌 Next Steps:
1. Create a file in your project root: `README.md`.
2. Paste the above content.
3. Commit and push:
```bash
git add README.md
git commit -m "Add project README"
git push
