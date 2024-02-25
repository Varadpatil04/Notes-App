
# Notes App with Google Authentication

"This repository contains a simple notes application with authentication using Google OAuth. Users can create, delete, and update their notes securely. The project is built using HTML, CSS, JavaScript for the front end, and Node.js, Express.js, and EJS for the backend."

## Features

**Google Authentication**: Users can sign in securely using their Google accounts.
- **Create Notes**: Users can create new notes with a title and content.
- **Update Notes**: Users can edit and update existing notes.
- **Delete Notes**: Users can delete notes they no longer need.
- **Responsive Design**: The application is designed to be responsive and work well on various devices.

## Tech Stack

- **Frontend**:
  - HTML: Structure of web pages.
  - CSS: Styling the web pages.
  - JavaScript: Handling client-side interactions.

- **Backend**:
  - Node.js: JavaScript runtime for server-side development.
  - Express.js: Web application framework for Node.js.
  - EJS: Templating engine for generating dynamic HTML pages.

- **Authentication**:
  - Google OAuth: Secure authentication using Google accounts.

## Run Locally





Go to the project directory

```bash
  cd notes-app
```
Install dependencies:
```bash
  npm install
```
Create a .env file in the root directory and add the following environment variables:
```bash
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
```
Replace your_google_client_id, your_google_client_secret, and your_session_secret with your actual Google OAuth client ID, client secret, and a random session secret respectively.

Start the application:
```bash
npm Start
```

