# User Management Application

A Node.js web application for managing user information with a modern dark-themed interface.

## Overview

This application provides a complete CRUD (Create, Read, Update, Delete) interface for managing user records. Built with Node.js, Express, and MongoDB, it features a responsive dark-themed UI using Bootstrap and custom CSS.

## Features

- **User Management**: Add, view, edit and delete user information
- **Modern Dark Theme**: Easy on the eyes with a purple accent color scheme
- **Responsive Design**: Works on desktop and mobile devices
- **Live Reload**: Automatic browser refresh during development

## Tech Stack

- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **Template Engine**: EJS (Embedded JavaScript)
- **Frontend**: Bootstrap with custom CSS
- **Icons**: Bootstrap Icons 1.10.5

## Project Structure

```
├── app.js                # Main application file
├── pass.js               # Database connection configuration
├── models/
│   └── customerSchema.js # MongoDB schema definition
├── public/               # Static assets
│   ├── bootstrap-icons/  # Icon library
│   ├── css/              # Stylesheets
│   ├── img/              # Images
│   └── js/               # Client-side JavaScript
└── views/                # EJS templates
    ├── index.ejs         # Homepage with user list
    ├── Components/       # Reusable UI components
    └── user/             # User-related views
        ├── add.ejs       # Add user form
        ├── edit.ejs      # Edit user form
        └── view.ejs      # User details page
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/user-management-app.git
   cd user-management-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure MongoDB connection:
   Edit `pass.js` with your MongoDB connection string.

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3001
   ```

## Usage

### View All Users
Navigate to the homepage to see a list of all users in a table format.

### Add a New User
Click the "Add User" button and fill out the form with the user's information.

### View User Details
Click on a user in the table to view their complete details.

### Edit User Information
From the user details page, click "Edit" to modify the user's information.

### Delete a User
From the user details or edit page, click "Delete" to remove the user from the database.

## Development

For development with live reload:

```
npm run dev
```

## Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- ejs: Template engine
- method-override: Allows using HTTP verbs like PUT or DELETE
- moment: Date formatting
- livereload: Development tool for automatic page refresh
- connect-livereload: Middleware for livereload

## License

[MIT License](LICENSE)