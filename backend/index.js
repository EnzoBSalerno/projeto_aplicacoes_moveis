const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend GiftNow Running');
});

// USERS
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.get("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (row) {
            res.json(row);
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const avatar = 'https://randomuser.me/api/portraits/lego/1.jpg'; // Default avatar
    db.run("INSERT INTO users (name, email, password, avatar) VALUES (?, ?, ?, ?)", [name, email, password, avatar], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID, name, email, avatar });
    });
});

app.get('/user/:id', (req, res) => {
    db.get("SELECT * FROM users WHERE id = ?", [req.params.id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(row);
    });
});


// CATEGORIES
app.get('/categories', (req, res) => {
    db.all("SELECT * FROM categories", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// SHOPS
app.get('/shops', (req, res) => {
    db.all("SELECT * FROM shops", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Parse badges if necessary, but here we kept simple columns
        // Mock data had badges, but I didn't add badges column for simplicity or just ignored it for now.
        // Let's stick to the main fields.
        res.json(rows);
    });
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
