# Authentication Service

A scalable Authentication and Authorization microservice built using Node.js and Express. The service provides secure user registration, login, JWT token generation and validation, password hashing, and Role-Based Access Control (RBAC) for microservices-based applications.

## Features

- User Registration (Sign Up)
- User Authentication (Sign In)
- JWT Token Generation
- JWT Token Validation
- Password Hashing using Bcrypt
- Role-Based Access Control (RBAC)
- MySQL Database Integration
- Sequelize ORM
- Database Migrations & Seeders
- Request Validation Middleware
- Centralized Error Handling

## Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT (JSON Web Tokens)
- Bcrypt
- dotenv

---

## Architecture

```text
Client
   |
   v
Authentication Service
   |
   |---- User Registration
   |---- User Login
   |---- JWT Generation
   |---- JWT Verification
   |---- Role Management
   |
   v
MySQL Database
```

## Authentication Flow

### User Registration

1. User submits email and password.
2. Password is hashed using Bcrypt.
3. User information is stored in MySQL.
4. Success response is returned.

### User Login

1. User submits credentials.
2. Password is verified.
3. JWT token is generated.
4. Token is returned to the client.

### Authorization

1. Client sends JWT token.
2. Service verifies token validity.
3. User permissions are checked.
4. Access is granted or denied.

---

## API Endpoints

### Register User

```http
POST /api/v1/signup
```

### Login User

```http
POST /api/v1/signin
```

### Verify Authentication

```http
GET /api/v1/isAuthenticated
```

### Check Admin Privileges

```http
GET /api/v1/isAdmin
```

---

## Database Design

### Users Table

- id
- email
- password

### Roles Table

- id
- name

### User_Roles Table

- userId
- roleId

Supports many-to-many relationship between Users and Roles.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Configure environment variables:

```env
PORT=3001
JWT_KEY=your_secret_key
```

Run migrations:

```bash
npx sequelize-cli db:migrate
```

Run seeders:

```bash
npx sequelize-cli db:seed:all
```

Start server:

```bash
npm start
```

---

## Security Features

- Password Hashing using Bcrypt
- JWT-Based Authentication
- Request Validation Middleware
- Role-Based Access Control
- Secure Credential Verification

---

## Future Improvements

- Refresh Tokens
- Email Verification
- Password Reset Flow
- OAuth Authentication
- Multi-Factor Authentication (MFA)
- Account Locking & Rate Limiting
- Session Management

---

## Author

Developed as a backend microservice demonstrating authentication, authorization, JWT security, RBAC, database modeling, and scalable backend architecture.
