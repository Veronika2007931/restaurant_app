


const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');



// const sequelize = new Sequelize('restaurant_db', 'root', '0951207020', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false

//  });

const sequelize = new Sequelize('restaurant_db', 'root', 'Vika20082106', {

// });

const sequelize = new Sequelize('restaurant_db', 'root', '1510sofia2007', {

  host: 'localhost',
  dialect: 'mysql'
});

const MenuItem = sequelize.define('MenuItem', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING(1000),
        allowNull: true
    }
});


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


Client.hasMany(Reservation);
Reservation.belongsTo(Client);


const app = express();
app.use(express.json());


sequelize.sync().then(() => {
    console.log('База данных синхронизирована');
}).catch(err => {
    console.error('Ошибка подключения к базе:', err);
});


app.post('/clients', async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/menu', async (req, res) => {
    try {
        console.log("Тіло запиту:", req.body);
        const menuItem = await MenuItem.create(req.body);
        res.status(201).json(menuItem);
    } catch (error) {
      console.error("Помилка при створенні:", error); // повний об'єкт
res.status(400).json({ error: error.message || "Невідома помилка" });
    }
});

app.get('/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.findAll();
    res.json(menuItems);
  } catch (error) {
    console.error("Помилка отримання меню:", error);
    res.status(500).json({ error: error.message });
  }
});


app.get('/clients', async (req, res) => {
    const clients = await Client.findAll();
    res.json(clients);
});


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

app.get('/reservations', async (req, res) => {
    const reservations = await Reservation.findAll({ include: Client });
    res.json(reservations);
});


app.listen(4000, () => {
  console.log('Сервер запущен на http://localhost:4000');
});

app.delete('/menu/:id', async (req, res) => {
  try {
    const deleted = await MenuItem.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

