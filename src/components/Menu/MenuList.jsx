import { useEffect, useState } from "react";
import axios from "axios";
import { Basket } from "components/Basket/basket";
import { Overlay } from "../Basket/basket.styled";
import { Footer } from "../Footer/Footer";
import {
  MenuContainer,
  MenuItem,
  CategoryList,
  CategoryButton,
  MenuTitle,
} from "./Menu.styled";

export const MenuList = ({ setActiveSection }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Перші страви");

  const categories = [
    "Перші страви",
    "Закуски",
    "Салати",
    "Другі страви",
    "Мангал",
    "Піца",
    "Десерти",
    "Напої",
  ];

  useEffect(() => {
    axios
      .get("/menu")
      .then((response) => {
        const itemsWithCategory = response.data.map((item) => ({
          ...item,
          category: item.category || "Перші страви", // fallback
        }));
        setMenuItems(itemsWithCategory);
      })
      .catch((error) => console.error("Помилка отримання меню", error));
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
  };

  const filteredItems = menuItems.filter(
    (item) =>
      item.category?.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <>
      <button onClick={() => setIsCartOpen(true)}>
        🛒 Кошик
      </button>
      <button onClick={() => setActiveSection("home")}>На головну</button>

      <MenuTitle>МЕНЮ</MenuTitle>

      <CategoryList>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryList>

      <MenuContainer>
        {filteredItems.length === 0 ? (
          <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>
            Страви відсутні у цій категорії
          </p>
        ) : (
          filteredItems.map((item, index) => (
            <MenuItem key={index}>
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.name} />
              )}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Ціна:</strong> {item.price} грн</p>
              <p><strong>Вага:</strong> {item.weight} г</p>
              <button onClick={() => addToCart(item)}>Замовити</button>
            </MenuItem>
          ))
        )}
      </MenuContainer>

      {isCartOpen && (
        <>
          <Overlay onClick={() => setIsCartOpen(false)} />
          <Basket
            cartItems={cartItems}
            removeItem={removeFromCart}
            onClose={() => setIsCartOpen(false)}
          />
        </>
      )}
    </>
  );
};
