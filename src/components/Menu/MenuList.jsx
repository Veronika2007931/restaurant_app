import { useEffect, useState } from "react";
import axios from "axios";
import { Basket } from "components/Basket/basket";
import { Overlay } from "../Basket/basket.styled";
import { MenuContainer, CategorySection, CategoryTitle, ItemsRow, MenuItem } from "./Menu.styled";
import { CategoryBar } from "./CategoryBar"; 

export const MenuList = ({ setActiveSection }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/menu")
      .then((responce) => setMenuItems(responce.data))
      .catch((error) => console.error("Помилка отримання меню"));
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const categories = Object.keys(groupedItems);

  return (
    <>
      <CategoryBar
        categories={categories}
        setActiveSection={setActiveSection}
        setIsCartOpen={setIsCartOpen}
      />

      <MenuContainer>
        {Object.entries(groupedItems).map(([category, items]) => (
          <CategorySection
            key={category}
            id={category.toLowerCase().replace(/\s/g, "-")}
          >
            <CategoryTitle>{category}</CategoryTitle>
            <ItemsRow>
              {items.map((item, index) => (
                <MenuItem key={index}>
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.name} />
                  )}
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Ціна: {item.price} грн</p>
                  <p>Вага: {item.weight} г</p>
                  <button onClick={() => addToCart(item)}>Замовити</button>
                </MenuItem>
              ))}
            </ItemsRow>
          </CategorySection>
        ))}
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