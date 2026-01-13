📩 Kyrex Inquiry Management System (MVP)
Overview

This is a full-stack web application built as an intern-level MVP for Kyrex.

The app helps Kyrex employees to:

📝 Add new inquiries from multiple sources (Website, WhatsApp, Email, Referral)

👀 View all inquiries in a clean and modern interface

🔄 Update inquiry status (New, Contacted, Closed)

🔍 Filter inquiries by Source and Status

The system is simple, responsive, and easy to use, showing the skills and thought process expected from a Web Developer Intern.

Features

Add Inquiry: Name, Contact (email/phone), Source

View Inquiry List: Card-style responsive display

Update Status: Change status using a dropdown; status badge updates automatically

Filters: Filter inquiries by Source or Status

Validation: Name and Contact are required

Responsive Design: Mobile-first layout, works on all screen sizes

Modern UI: Soft colors, minimal design, and clear typography

Tech Stack

Frontend: React, Tailwind CSS, Axios

Backend: Node.js, Express

Database: MongoDB (with Mongoose)

MongoDB is used to persist data, and Mongoose is used for schema definition, validation, and easy CRUD operations.

Setup Instructions
1️⃣ Clone the Repository
git clone <YOUR_GITHUB_REPO_URL>
cd <REPO_NAME>

2️⃣ Backend Setup
cd backend
npm install

2a. Create .env file in backend
MONGO_URI=<your_mongodb_connection_string>
PORT=5000

3️⃣ Frontend Setup
cd ../frontend
npm install

4️⃣ Run Backend Server
cd ../backend
npx nodemon server.js


The backend will run on http://localhost:5000.

5️⃣ Run Frontend
cd ../frontend
npm run dev


The frontend will run on http://localhost:5173.

Usage

Open the frontend URL in your browser.

Add a new inquiry using the form.

View all inquiries in the list below the form.

Change the status using the dropdown next to each inquiry.

Use filters to display inquiries by Source or Status.

Project Structure
frontend/
├── src/
│   ├── pages/
│   │   ├── AddInquiryForm.jsx
│   │   └── InquiryList.jsx
│   ├── App.jsx
│   └── main.jsx
└── package.json

backend/
├── models/
│   └── Inquiry.js          # Mongoose schema
├── routes/
│   └── inquiryRoutes.js    # API routes
├── server.js               # Express server
├── .env                    # Environment variables
└── package.json

Notes

This is a small MVP built for internship evaluation.

Focus was on clarity, usability, and responsive design.

MongoDB ensures data persists even if the server restarts.

The app demonstrates core CRUD operations, status management, and client-side filters.

Author
Jatin Nayal
