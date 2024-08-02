const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Endpoint to insert data
app.post('/api/store', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO table1 (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            return res.json({ error: err.message });
        }
        return res.json({ message: 'User added successfully!', id: result.insertId });
    });
});


app.get("/student", (req, res) => {
    const sql = "SELECT * FROM table1";
    db.query(sql, (err, data) => {
        if (err) {

            return res.json({ error: err.message });
        }
        return res.json(data);
    });
});


app.get("/read/:id", (req, res) => {

    const sql = "SELECT * FROM table1 WHERE id=?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ error: err.message });
        }
        return res.json(data);
    });
});


app.put("/update/:id", (req, res) => {

    const sql = 'UPDATE table1 SET `name`=?, `email` =? WHERE id=? ';
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    db.query(sql, [name, email, id], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    })
})


app.delete('/delete/:id', (req, res) => {
    const sql = 'DELETE FROM table1 where id=?';
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ message: "Error" })
        return res.json(result);
    })
})

app.listen(8081, () => {
    console.log("listening on port 8081");
});
