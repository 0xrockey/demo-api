# Express Authentication Example

This is an example Express.js application demonstrating user authentication using Passport.js middleware with local strategy and bcrypt for password hashing. The application allows users to register, login, and logout.

## Features

- **User Registration**: Users can register by providing a name, email, and password. The password is hashed using bcrypt before storing it in the database.
- **User Login**: Registered users can log in using their email and password. Passport.js handles authentication using the local strategy, with redirection based on success or failure.
- **Session Management**: The application uses Express sessions to manage user sessions. Sessions are stored server-side and initialized with a secret key stored in the environment variable `SESSION_SECRET`.
- **Route Protection**: Certain routes are protected and can only be accessed by authenticated users. Middleware functions `checkAuthenticated` and `checkNotAuthenticated` are used to ensure proper authentication before accessing protected routes.
- **Flash Messages**: Flash messages are used to display authentication-related messages (e.g., success messages after successful login or failure messages after failed login attempts).

## Usage

1. **Installation**: Clone the repository and install dependencies using `npm install`.

2. **Environment Setup**: Create a `.env` file and set the `SESSION_SECRET` variable. Optionally, you can also set other environment variables.

3. **Run the Application**: Start the application using `npm run dev` or `nodemon server.js`. By default, the application runs on port 3000, but you can specify a different port using the `PORT` environment variable.

4. **Access the Application**: Open a web browser and navigate to `http://localhost:3000` to access the application. You can register as a new user, login with existing credentials, and log out.

## Dependencies

- **Express**: Web framework for Node.js.
- **bcrypt**: Library for hashing passwords securely.
- **Passport**: Authentication middleware for Node.js.
- **express-flash**: Middleware for displaying flash messages.
- **express-session**: Session middleware for Express.
- **method-override**: Middleware for HTTP method override.
- **dotenv**: Module for loading environment variables from a `.env` file.

