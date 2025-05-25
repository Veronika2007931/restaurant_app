// Установи зависимости командой:
// npm install express sequelize mysql2

const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Настройка подключения к MySQL
const sequelize = new Sequelize('restaurant_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

// Определение модели Клиента
const Client = sequelize.define('Client', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

// Определение модели Бронирования
const Reservation = sequelize.define('Reservation', {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    numberOfGuests: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Связь: один клиент — много бронирований
Client.hasMany(Reservation);
Reservation.belongsTo(Client);

// Инициализация Express
const app = express();
app.use(express.json());

// Синхронизация с БД
sequelize.sync().then(() => {
    console.log('База данных синхронизирована');
}).catch(err => {
    console.error('Ошибка подключения к базе:', err);
});

// Маршрут: добавление клиента
app.post('/clients', async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Маршрут: список клиентов
app.get('/clients', async (req, res) => {
    const clients = await Client.findAll();
    res.json(clients);
});

// Маршрут: добавление бронирования
app.post('/reservations', async (req, res) => {
    try {
        const { clientId, date, time, numberOfGuests } = req.body;
        const reservation = await Reservation.create({
            ClientId: clientId,
            date,
            time,
            numberOfGuests
        });
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Маршрут: список бронирований с клиентами
app.get('/reservations', async (req, res) => {
    const reservations = await Reservation.findAll({ include: Client });
    res.json(reservations);
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});
