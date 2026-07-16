

# 🚀 UtiliX – Smart Utility Tools Platform

Utilix is a modern, full-stack web application that provides a collection of essential developer and productivity tools in one place.  
It features secure authentication, protected routes, and a clean, responsive UI built with modern technologies.
---
## ✨ Features
### 🔐 Authentication & Security

User Signup & Login with JWT-based authentication
Secure password hashing using bcrypt
Protected routes using role-agnostic auth guards

### 🧰 Developer Tools (Protected)

Text Utility Tool – format and process text
Word Counter – count words and characters
JSON Formatter – prettify and validate JSON
Base64 Encoder / Decoder
Password Strength Checker

### ⚠️ Tools are accessible only after login (route protection implemented).

### 🧭 UI & UX

Responsive and modern UI using Tailwind CSS
Dynamic navbar (Login/Signup/Logout)
Smooth navigation using React Router

### 🔐 Authentication
- User Signup & Login
- JWT-based authentication
- Auto-login after signup
- Protected routes for tools
- Secure logout

### 🧰 Utility Tools
- Text Formatter
- Word Counter
- JSON Formatter
- Base64 Encoder / Decoder
- Password Strength Checker

---
## 📁 Project Structure
```bash
│
├── frontend/ # Frontend (React + Vite)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── tools/
│ │ ├── routes/
│ │ └── assets/
│ ├── public/
│ └── .env
│
├── backend/ # Backend (Node + Express)
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── server.js
│ └── .env
│
├── .gitignore
└── README.md
```


## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt.js

---
##  Setup instructions

Clone this repository

```bash
  git clone https://github.com/tanisha4846/UtiliX
cd Assistly-chat-AI
cd UtiliX
```
Backend Setup
```bash 
cd backend
npm install
npm run dev
```
Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend will run at 
```bash
http://localhost:5173

```



## 🤝 Contributions

Contributions, suggestions, and feedback are welcome.

- Fork the repo
- Create your feature branch (git checkout -b feature-name)
- Commit changes (git commit -m "Add new feature")
- Push to branch (git push origin feature-name)
- Open a pull request 🎉
## 👩‍💻 Author

[Tanisha](https://www.github.com/tanisha4846)
 B.Tech – Instrumentation & Control Engineering NIT Jalandhar 

