# 🏫 School Management API

## 📌 Project Overview

This project is a Node.js-based REST API for managing school data. It allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

The application is built using:

* **Node.js**
* **Express.js**
* **MySQL (Aiven Cloud Database)**
* **MVC Architecture**

---

## 🚀 Features

* ➕ Add a new school with location details
* 📍 Retrieve schools sorted by distance
* ⚡ Optimized query using latitude-longitude filtering
* 🧠 Distance calculated using Haversine formula
* 🗂️ Structured using MVC architecture

---

## 🛠️ Tech Stack

* Backend: Node.js, Express.js
* Database: MySQL (Aiven Cloud)
* API Testing: Postman
* Architecture: MVC

---

## 📁 Project Structure

```
project/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── schoolController.js
│
├── models/
│   └── schoolModel.js
│
├── routes/
│   └── schoolRoutes.js
│
├── .env
├── server.js
└── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
//this is github repo
git clone https://github.com/Takshsri/Educase_NodeJs

cd project
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```
DB_HOST=your_host
DB_PORT=your_port
DB_USER=avnadmin
DB_PASSWORD=your_password
DB_NAME=school_db
```

---

### 4. Run the server

```
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### ➕ Add School

* **POST** `/api/schools/add`

#### Request Body:

```json
{
  "name": "ABC School",
  "address": "Hyderabad",
  "latitude": 17.385,
  "longitude": 78.4867
}
```

#### Response:

```json
{
  "message": "School added Successfully"
}
```

---

### 📍 List Schools

* **GET** `/api/schools/listSchools?latitude=17.385&longitude=78.4867`

#### Response:

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Hyderabad",
    "latitude": "17.3850000",
    "longitude": "78.4867000",
    "distance": 0
  }
]
```

---

## 📊 Database Schema

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude DECIMAL(10,7) NOT NULL,
  longitude DECIMAL(10,7) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🧠 Distance Calculation

The API uses the **Haversine formula** to calculate geographical distance between two coordinates and sort schools accordingly.

---

## 🧪 Testing

APIs were tested using **Postman** with a collection containing:

* Add School requests
* List Schools request

---

## 📦 Deliverables

* Source code (GitHub repository)
* Working API endpoints
* Postman collection (JSON file)
## 📬 Postman Collection

You can import the Postman collection from:

[Download Collection]
https://github.com/Takshsri/Educase_NodeJs/blob/main/postman/School%20API.postman_collection.json
---


## 🌍 Live Deployment

The API is deployed on Render and connected to Aiven MySQL cloud database.

🔗 Base URL:
https://educase-nodejs.onrender.com

### Example Endpoints:

- Add School:
POST https://educase-nodejs.onrender.com/api/schools/add

- List Schools:
GET https://educase-nodejs.onrender.com/api/schools/listSchools?latitude=17.385&longitude=78.4867



## ⚡ Performance Optimization

- Added index on latitude and longitude for faster querying:

```sql
CREATE INDEX idx_location ON schools (latitude, longitude);

```




## 🎯 Conclusion

This project demonstrates backend API development with proper architecture, database integration, and geolocation-based sorting logic.

---
