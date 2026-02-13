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
    const { name, email, password, phone } = req.body;
    const avatar = 'https://randomuser.me/api/portraits/lego/1.jpg'; // Default avatar
    // Try to insert with phone if column exists, otherwise it might fail if table wasn't migrated.
    // For simplicity in this dev environment, we assume the table is recreated or we alter it if needed.
    // However, sqlite ALTER TABLE ADD COLUMN is supported.
    // But since we use CREATE TABLE IF NOT EXISTS in database.js, existing table won't change.
    // We should handle this gracefully or ask user to delete db.
    // For now, let's just add it. If it fails, we catch it.

    db.run("INSERT INTO users (name, email, password, avatar, phone) VALUES (?, ?, ?, ?, ?)", [name, email, password, avatar, phone], function(err) {
        if (err) {
             // If error is due to missing column (because we didn't migrate existing DB), fallback?
             if (err.message.includes('has no column')) {
                 // Fallback for existing non-migrated DB
                  db.run("INSERT INTO users (name, email, password, avatar) VALUES (?, ?, ?, ?)", [name, email, password, avatar], function(err2) {
                    if (err2) return res.status(500).json({ error: err2.message });
                    res.json({ id: this.lastID, name, email, avatar });
                  });
             } else {
                 return res.status(500).json({ error: err.message });
             }
        } else {
            res.json({ id: this.lastID, name, email, avatar, phone });
        }
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

// PAYMENT METHODS
app.get('/payment-methods', (req, res) => {
    // In a real app, we would filter by logged user (req.user.id)
    // Here we just return all for demo, or filter by query param ?user_id=1
    const userId = req.query.user_id || 1;
    db.all("SELECT * FROM payment_methods WHERE user_id = ?", [userId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// CART/ORDER SUMMARY (Mocked endpoint for now)
app.get('/cart/summary', (req, res) => {
    // In a real app, calculate from cart items in DB
    const summary = {
        subtotal: 'R$ 149,90',
        delivery: 'R$ 12,00',
        discount: '- R$ 10,00',
        total: 'R$ 151,90',
    };
    res.json(summary);
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
