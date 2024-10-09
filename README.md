# User Authentication API

This project implements user authentication and authorization using Node.js, Express.js, Mongoose, and JSON Web Tokens (JWT). It provides endpoints for user registration, login, and retrieving user information.

## Technologies Used

- Node.js
- Express.js
- Mongoose (MongoDB)
- JSON Web Tokens (JWT)
- Postman (for API testing)
  
## Setup and Installation

1. Install Dependencies
 
- npm install

2. Create the .env File

- Create a file named .env in the root directory and add the following environment variables:
# MongoDB connection string
MONGO_URI=mongodb://127.0.0.1:27017/authapp

# JWT secret key
JWT_SECRET=your_jwt_secret_key

3. Run the Application

- npm start

## API Endpoints
1. Register User
Endpoint: POST /api/users/register
Description: Registers a new user.
Request Body:
json
Copy code
{
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "password123"
}
Response:
201 Created: {"message": "User registered successfully!"}
400 Bad Request: {"error": "Validation errors"}

2. Login User
Endpoint: POST /api/users/login
Description: Logs in an existing user and returns a JWT.
Request Body:
json
Copy code
{
  "email": "user@example.com",
  "password": "password123"
}
Response:
200 OK: {"token": "JWT_TOKEN_HERE"}
401 Unauthorized: {"error": "Invalid credentials"}

3. Get User Info
Endpoint: GET /api/users/me
Description: Retrieves the authenticated user's information.
Headers:
Authorization: Bearer JWT_TOKEN_HERE
Response:
200 OK:
json
Copy code
{
  "username": "exampleUser",
  "email": "user@example.com"
}
401 Unauthorized: {"error": "Invalid token"}