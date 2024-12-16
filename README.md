# Applicant Management API

This API is built with Node.js, Express, and MongoDB. It provides endpoints to manage applicants' data, including registering new applicants, retrieving all applicants, and getting the total number of applicants.

## Prerequisites

Before running the API, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- A `.env` file with the following environment variables:
  ```env
  Mongo_URI=<your_mongo_connection_string>
  PORT=<your_preferred_port>
  ```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-folder>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node app.js
   ```

The server should be running on the port specified in your `.env` file.

## API Endpoints

### 1. Register an Applicant

**Endpoint:**
```http
POST /register
```

**Description:**
Registers a new applicant with the following details:

- `firstname` (required): First name of the applicant
- `lastname` (required): Last name of the applicant
- `email` (required): Email address of the applicant
- `phone_number` (required): Phone number of the applicant
- `reason` (required): Reason for application

**Request Body:**
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "phone_number": 1234567890,
  "reason": "Looking for opportunities"
}
```

**Response:**
- **201 Created**: Registration successful
- **400 Bad Request**: Missing required fields

**Example Response:**
```json
{
  "message": "registration successfully",
  "newApplicant": {
    "Firstname": "John",
    "Lastname": "Doe",
    "Email": "johndoe@example.com",
    "phone_Number": 1234567890,
    "Reason": "Looking for opportunities",
    "_id": "<generated-id>",
    "__v": 0
  }
}
```

### 2. Get All Applicants

**Endpoint:**
```http
GET /getAll
```

**Description:**
Fetches all registered applicants.

**Response:**
- **200 OK**: List of all applicants
- **400 Bad Request**: No applicants found

**Example Response:**
```json
{
  "all_Applicants": [
    {
      "Firstname": "John",
      "Lastname": "Doe",
      "Email": "johndoe@example.com",
      "phone_Number": 1234567890,
      "Reason": "Looking for opportunities",
      "_id": "<generated-id>",
      "__v": 0
    }
  ]
}
```

### 3. Get Total Applicants Count

**Endpoint:**
```http
GET /applicantsCount
```

**Description:**
Returns the total number of registered applicants.

**Response:**
- **200 OK**: Total count of applicants
- **404 Not Found**: No applicants found

**Example Response:**
```json
{
  "Count": 1
}
```

## License

This project is licensed under the MIT License.

## Postman Documentation

Here is the link to my Postman Documentation: 