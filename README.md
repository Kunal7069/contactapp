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

## Challenges Faced and How They Were Resolved
### 1. **Database Integration Issues**
   - **Challenge:** Connecting the frontend to the backend and correctly handling database operations initially led to some errors due to incorrect connection strings and asynchronous fetching.
   - **Solution:** I used proper error handling, ensured correct connection settings, and integrated Mongoose for better schema management and data validation.

### 2. **State Management and Data Flow**
   - **Challenge:** Synchronizing the state after adding, editing, or deleting contacts was a bit tricky, as the UI wasn’t always updated correctly.
   - **Solution:** I used React's `useState` and `useEffect` hooks to manage the state and ensured the UI re-renders after each operation by calling the `loadContacts` function.

### 3. **Pagination and Sorting**
   - **Challenge:** Adding pagination and sorting the contact table was a bit challenging due to the need to dynamically sort by first name and last name.
   - **Solution:** I used Material-UI's built-in sorting functionality and implemented pagination with a limit of two contacts per page.

### 4. **Handling Form Submissions and Validations**
   - **Challenge:** Validating user input and ensuring that only valid data is sent to the backend was another obstacle.
   - **Solution:** I implemented simple form validation that required users to fill out all fields before submission, ensuring correct data integrity.



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
