const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database ' + dbPath + ': ' + err.message);
  } else {
    console.log('Database connected.');
    initializeDatabase();
  }
});

function initializeDatabase() {
  db.serialize(() => {
    // Users Table
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT,
      avatar TEXT
    )`);

    // Categories Table
    db.run(`CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      icon TEXT
    )`);

    // Shops Table
    db.run(`CREATE TABLE IF NOT EXISTS shops (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      category TEXT,
      rating REAL,
      deliveryTime TEXT,
      image TEXT,
      deliveryFee TEXT
    )`);

    // Payment Methods Table
    db.run(`CREATE TABLE IF NOT EXISTS payment_methods (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      type TEXT,
      brand TEXT,
      last4 TEXT,
      name TEXT,
      icon TEXT,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )`);

    // Seed Data (Only if empty)
    db.get("SELECT count(*) as count FROM categories", (err, row) => {
        if (row && row.count === 0) {
            console.log("Seeding categories...");
            const stmt = db.prepare("INSERT INTO categories (name, icon) VALUES (?, ?)");
            const categories = [
                ['Flores', 'rose-outline'],
                ['Chocolates', 'nutrition-outline'],
                ['Bebidas', 'wine-outline'],
                ['Kids', 'rocket-outline'],
                ['Beleza', 'color-wand-outline'],
                ['Eletrônicos', 'headset-outline'],
                ['Livros', 'book-outline']
            ];
            categories.forEach(cat => stmt.run(cat));
            stmt.finalize();
        }
    });

    db.get("SELECT count(*) as count FROM shops", (err, row) => {
        if (row && row.count === 0) {
            console.log("Seeding shops...");
            const stmt = db.prepare("INSERT INTO shops (name, category, rating, deliveryTime, image, deliveryFee) VALUES (?, ?, ?, ?, ?, ?)");
            const shops = [
                ['Giuliana Flores', 'Flores e Bouquets', 4.8, '60 min', 'https://images.unsplash.com/photo-1563241527-30058e5a7e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'Grátis'],
                ['Cacau Show', 'Chocolates e Doces', 4.9, '45 min', 'https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'R$ 5,90'],
                ['ToyMania', 'Brinquedos', 4.7, '90 min', 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'R$ 12,00'],
                ['Adega Express', 'Bebidas e Vinhos', 4.6, '30 min', 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'Grátis'],
                ['Beauty Box', 'Perfumaria e Beleza', 4.9, 'Same Day', 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'R$ 7,50']
            ];
            shops.forEach(shop => stmt.run(shop));
            stmt.finalize();
        }
    });

     db.get("SELECT count(*) as count FROM users", (err, row) => {
        if (row && row.count === 0) {
            console.log("Seeding user...");
            db.run("INSERT INTO users (name, email, password, avatar) VALUES (?, ?, ?, ?)", ['Jules', 'jules@email.com', '123456', 'https://randomuser.me/api/portraits/women/44.jpg']);
        }
    });
  });
}

module.exports = db;
