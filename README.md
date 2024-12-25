
# The Time Capsule Web Application

## Project Overview
The **Time Capsule** project is a web application that allows users to send digital messages, documents, photos, and memories to the future. The application enables users to create a time capsule, store items (such as text, files, and media), and set a future date for these items to be unlocked and shared. The purpose of this project is to help preserve memories and create a digital time capsule that can be accessed in the future.

## Features
- **User Authentication**: Secure login and registration using passport.js with Google OAuth.
- **Create Time Capsules**: Users can create a time capsule to store messages, photos, and files.
- **Set Unlock Dates**: Users set a future date for their time capsule to be unlocked and shared.
- **View and Share Capsules**: Time capsules can be unlocked and viewed once the set date is reached.
- **Dashboard**: A user dashboard to manage and view the created time capsules.

## Technology Stack
- **Frontend**: 
  - HTML, CSS, JavaScript (React can be used for dynamic UI).
  - Bootstrap for responsive design.

- **Backend**: 
  - Node.js with Express.js for the server.
  - MongoDB for storing user data and time capsule contents.
  - Passport.js for user authentication with Google OAuth.

- **Libraries and Tools**:
  - `express`: Web framework for Node.js.
  - `mongoose`: MongoDB object modeling tool.
  - `passport`: Authentication middleware.
  - `dotenv`: For environment variable management.
  - `cors`: Cross-origin resource sharing.
  - `moment`: For handling date and time.
  - `uuid`: For generating unique identifiers for each time capsule.
  - `body-parser`: To parse incoming request bodies.



### Entities:
- **User**: Contains details like `username`, `email`, and `password`.
- **Time Capsule**: Contains items like `message`, `files`, `photos`, and `unlock date`.
- **Session**: Stores user sessions for authentication.

## Application Flow

1. **User Registration/Login**: 
   - Users sign up or log in using Google OAuth.
   - Once logged in, users are redirected to their dashboard.

2. **Creating Time Capsule**: 
   - Users can create a new time capsule by adding messages, uploading photos, and setting a date for unlocking.

3. **Unlocking the Time Capsule**: 
   - After the specified time, users can unlock and view the time capsule.
   
4. **Dashboard**: 
   - A central place where users can view all their created time capsules, delete them, or edit their content.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone https://github.com/saptarshi78/The_time_capsule
   ```

2. **Install dependencies**:
   Navigate to the project directory and run:
   ```
   npm install
   ```

3. **Environment Setup**:
   - Create a `.env` file in the root directory and add the necessary environment variables:
   ```
  its top secrect 

4. **Run the application**:
   - Start the server using:
   ```
   node app.js
   ```

5. **Visit the application**:
   Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Live Application

- You can visit the live version of the Time Capsule web application at [Time Capsule Live](https://the-time-capsule.onrender.com/).

## Preview Live Website

![Preview](https://github.com/saptarshi78/The_time_capsule/blob/main/image.png?raw=true) 

## Conclusion

This project helps users to store their memories in a digital time capsule and access them in the future. The application uses MongoDB for data storage and Node.js with Express.js for backend development. With a simple interface and user authentication, the app allows easy interaction with the time capsules.

---

## Contact Information

For more information, feel free to connect with me on LinkedIn: [Saptarshi Singh](https://www.linkedin.com/in/saptarshi-singh-349779275/).

