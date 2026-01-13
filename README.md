**Kyrex Inquiry Management System (MVP)**
_Overview_

- This is a full-stack web application built as an intern-level MVP for Kyrex.

- The app allows Kyrex employees to:

- Add new inquiries from multiple sources such as Website, WhatsApp, Email, and Referrals

- View all inquiries in a clean and simple interface

- Update inquiry status (New, Contacted, Closed)

- Filter inquiries by Source or Status

- The system is simple, responsive, and easy to use, showing how I think and work as a Web Developer Intern.

_Features_

-> Add Inquiry: Enter Name, Contact (email/phone), and Source

-> View Inquiry List: Shows inquiries in a card-style layout

-> Update Status: Change status with a dropdown; status badge updates automatically

-> Filters: Filter inquiries by Source or Status to find what you need

-> Validation: Name and Contact fields are required

-> Responsive Design: Works well on mobile, tablet, and desktop

-> Modern UI: Soft colors, minimal design, clear and easy-to-read layout

_Tech Stack_

Frontend: *React, Tailwind CSS, Axios*

Backend: *Node.js, Express*

Database: *MongoDB (with Mongoose)*

_Setup Instructions_

1. Clone the Repository
`git clone <YOUR_GITHUB_REPO_URL>`
`cd <REPO_NAME>`

2. Backend Setup
`cd backend`
`npm install`

2a. Create .env file in backend
`MONGO_URI=<your_mongodb_connection_string>`
`PORT=5000`

3. Frontend Setup
`cd ../frontend`
`npm install`

4. Run Backend Server
`cd ../backend`
`npx nodemon server.js`

Backend runs at: http://localhost:5000

5. Run Frontend
`cd ../frontend`
`npm run dev`

Frontend runs at: http://localhost:5173

_Usage_

- *Open the frontend URL in your browser*

- *Fill the form to add a new inquiry*

- *View all inquiries in the list below the form*

- *Change the status using the dropdown next to each inquiry*

- *Filter inquiries by Source or Status to find specific entries*

_Project Structure_

**frontend**

src/pages/AddInquiryForm.jsx → Form to add inquiries
src/pages/InquiryList.jsx → List of all inquiries
src/App.jsx → Main app component
src/main.jsx → React entry point
package.json → Frontend dependencies

**backend**

models/Inquiry.js → Mongoose schema
routes/inquiryRoutes.js → API routes
server.js → Express server
.env → Environment variables
package.json → Backend dependencies

_Notes_

This is a small MVP built for internship evaluation
Focus is on clarity, usability, and responsive design
MongoDB ensures data persists even after server restarts
App demonstrates basic CRUD operations, status management, and filters

Author
**Jatin Nayal**
