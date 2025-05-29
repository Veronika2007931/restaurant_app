const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');



// const sequelize = new Sequelize('restaurant_db', 'root', '0951207020', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false

//  });

// const sequelize = new Sequelize('restaurant_db', 'root', 'Vika20082106', {
// host: 'localhost',
// dialect: 'mysql'
// });

//  const sequelize = new Sequelize('restaurant_db', 'root', '1510sofia2007', {

//     host: 'localhost',
//     dialect: 'mysql'
//   });

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
  },
     category: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Інше'
  }
});



const categorizeItem = (name) => {
  const lower = name.toLowerCase();

  if (
    lower.includes("суп") ||
    lower.includes("харчо") ||
    lower.includes("борщ") ||
    lower.includes("солянка")
  ) return "Перші страви";

  if (
    lower.includes("салат") ||
    lower.includes("цезар") ||
    lower.includes("оселедець")
  ) return "Салати";

  if (
    lower.includes("куряче філе") ||
    lower.includes("вареники") ||
    lower.includes("деруни") ||
    lower.includes("паста") ||
    lower.includes("плов")
  ) return "Другі страви";

  if (lower.includes("піца")) return "Піца";

  if (
    lower.includes("гриль") ||
    lower.includes("шашлик") ||
    lower.includes("стейк")
  ) return "Мангал";

  if (
    lower.includes("чизкейк") ||
    lower.includes("сирник") ||
    lower.includes("штрудель") ||
    lower.includes("десерт") ||
    lower.includes("торт")
  ) return "Десерти";

  if (
    lower.includes("чай") ||
    lower.includes("кава") ||
    lower.includes("лимонад") ||
    lower.includes("сік") ||
    lower.includes("напій")
  ) return "Напої";

  return "Інше";
};





MenuItem.beforeCreate((item) => {
  item.category = categorizeItem(item.name);
});

const app = express();
app.use(express.json());


sequelize.sync().then(() => {
    console.log('База данных синхронизирована');
}).catch(err => {
    console.error('Ошибка подключения к базе:', err);
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

