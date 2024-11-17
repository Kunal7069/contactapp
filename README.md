# Contact Management App

## Overview
The Contact Management App is a web application built to manage and store contact information, such as names, email addresses, phone numbers, and job titles. This app allows users to add, edit, delete, and view contact details. The application is divided into two main parts: the frontend (React.js) and the backend (Node.js with Express).

## Features
- Add new contacts to the system.
- Edit existing contacts.
- Delete contacts.
- View a table of all contacts with pagination and sorting by first name and last name.

## Technologies Used
- **Frontend:** React.js, Material UI
- **Backend:** Node.js, Express
- **Database:** MongoDB (MongoDB Atlas)


## Technical Decisions
- **Frontend Framework:** React.js was chosen for its component-based architecture, making the app more maintainable and scalable.
- **UI Library:** Material UI was used for its pre-built components, which helped speed up the UI development process.
- **Backend Framework:** Express.js was chosen due to its simplicity and flexibility for building APIs quickly.
- **Database:**  As the app grows, MongoDB's horizontal scalability will be beneficial. It allows for easy sharding and distributing data across multiple servers to handle large amounts of data and traffic.

## How It Works
### Frontend
The frontend of the app is built using React.js. It handles:
- The user interface (UI), including forms to add/edit contacts and a table to display the contacts.
- State management using React's `useState` and `useEffect` hooks.
- Makes API requests to the backend to fetch, add, update, and delete contacts.
  
### Backend
The backend is built with Node.js and Express. It handles:
- API endpoints for creating, reading, updating, and deleting contact data.
- Uses MongoDB for storing contact data in a database.
- Secure authentication using JWT to ensure that only authorized users can manage contacts.

## Setup Instructions

### Prerequisites
- Node.js (>= 12.x)
- MongoDB (set up on MongoDB Atlas or locally)
- npm or yarn (for managing dependencies)

### Project Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Kunal7069/contactapp.git
   cd contactapp

2. Start the backend:
   ```bash
   cd backend
   npm install
   cd src
   npm run dev

3. Start the frontend:
   ```bash
   npm install
   cd src
   npm start
