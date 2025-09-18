# VIT ProjectMate

VIT ProjectMate is a web-based project portal designed specifically for VIT University students to simplify the process of team formation and project collaboration. Built with a modern full-stack JavaScript architecture (Node.js, Express.js, MongoDB, EJS), it brings streamlined workflows and rich profile features to inspire innovation and professional growth within the university community.

# Key Features

- Student registration/login, profile creation, and editing

- **Team management:** Create, join, accept/reject project teams

- **Project dashboard:** Browse, filter, apply to projects

- Notifications for application, acceptance, and status changes

- Secure authentication (Passport.js) and encrypted password storage (bcrypt)

- File uploads for richer profiles (Multer)

- Real-time project and status updates

- Responsive and accessible web UI

# Tech Stack

- **Frontend:** HTML, CSS, JavaScript, EJS

- **Backend:** Node.js, Express.js

- **Database:** MongoDB (NoSQL)

- **Authentication:** Passport.js, bcrypt

- **File Handling:** Multer

- **Deployment:** Local server or any Node-compatible cloud provider

# Installation

**1. Clone the repository**

- git clone https://github.com/aarushichaddha/VIT_ProjectMate.git
cd VIT_ProjectMate

**2. Install dependencies**

- npm install

**3. Configure environment variables**

- Create a .env file for MongoDB URI, session secrets, etc.

**4. Run MongoDB**

- Ensure MongoDB is installed and running on your system (or use a cloud MongoDB Atlas cluster).

**5. Start the server**

- npm start
  
The application will run on http://localhost:4000 by default.

# Usage

- Register as a new student or login as an existing user

- Create a project or apply to join ongoing projects

- Manage your profile and track your project/team status

- Project owners can accept/reject applicants in real time

- Receive notifications (visual/text) for project/application status changes

# Screenshots

# Architecture

- MVC Pattern: The application is modularized into Model-View-Controller layers for maintainability.

- RESTful Routing: Follows REST principles for project, user, and team actions.

# Hardware & Software Requirements

- 1GHz or faster processor, 1-2GB+ RAM, 4-6GB+ disk space

- Node.js v11+, MongoDB v4.4+, modern desktop browser

# Deployment

- Can be run locally or deployed to cloud-based Node servers (Heroku, AWS, etc.)

- Static assets and file uploads are handled securely
