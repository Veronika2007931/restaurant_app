import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // Завантажує змінні з .env

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Підключено до MongoDB"))
  .catch(err => console.error("❌ Помилка підключення:", err));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // Підключення до MongoDB

app.get('/', (req, res) => {
    res.send('API працює!');
});

app.listen(5000, () => console.log('Сервер запущений на порту 5000'));

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());

// Реєстрація користувача
app.post('/api/users/register', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, phone });
        await newUser.save();
        res.status(201).json({ message: "Користувач зареєстрований!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Отримання всіх користувачів
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


const MenuItem = require('./models/MenuItem');

// Додати нову страву в меню
app.post('/api/menu', async (req, res) => {
    try {
        const newItem = new MenuItem(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Отримати всі страви меню
app.get('/api/menu', async (req, res) => {
    try {
        const menu = await MenuItem.find();
        res.json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(5000, () => console.log('Сервер запущений на порту 5000'));

