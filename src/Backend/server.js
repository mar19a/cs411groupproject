const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL database!");
});

app.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const query = `INSERT INTO users (first_name, last_name, email, password) VALUES ('${firstName}', '${lastName}', '${email}', '${password}')`;
  
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while inserting the user into the database" });
    } else {
      res.status(201).json({ message: "User created successfully", data: req.body });
    }
  });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });