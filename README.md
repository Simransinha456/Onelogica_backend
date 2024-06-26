# Thesis-EduVerse-Backend

A backend project built with Node.js, Express.js, and MongoDb. This project serves as the server-side application of an E-learning platform built using the MERN Stack as a part of the Computer Science BSc Thesis Work.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Setup](#database-setup)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/HanyAyad/Thesis-EduVerse-Backend.git
```

2. Install Dependencies:
```bash
npm install
```
## Usage
Nodemon monitors the project directory and automatically restarts the node application when it detects any changes. So a manual restart is not needed for changes to take place.
To run the project using Nodemon, use the following command:

```bash
npm run dev
```
## Database Setup
Create a MongoDB database and configure connection details in the ./config/dbConnection.js directory.
```bash
 const connection = await mongoose.connect(<Your DB URI>)
```

## Dependencies

| Package | Usage | Dev Dependency | 
| ------------- | ------------- | ------------- |
| bcrypt | Password Encryption/Decryption | ❌ |
| body-parser | Parsing Incoming JSON Requests To req.body | ❌ |
| dotenv | Reading Environment Variables From a .env File | ❌ |
| express | Routing, Handling HTTP Requests, and Managing Views | ❌ |
| express-async-handler | Wrapping Express Async Operations TO Handle Uncaught Exceptions Or Rejected Promises | ❌ |
| jsonwebtoken | Generating User Login Access Tokens | ❌ |
| mongoose | Modeling Data, Enforcing Schemas, and Manipulating Data | ❌ |
| slugify | Generating Human-Readable Url Slugs  | ❌ |
| nodemon | Restarting The Node Application When Changes Are Detected | ✔ |

* Dev Dependencies are only needed during development and are not required during production.

## Author

Eskandar Hany Ayad Boshra Ayad 



