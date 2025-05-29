import { useEffect, useState } from "react";
import axios from "axios";
import { Basket } from "components/Basket/basket";
import { Overlay } from "../Basket/basket.styled";
import { CategoryBar } from "./CategoryBar";
import {
  Cart,
  MenuContainer,
  CategorySection,
  CategoryTitle,
  ItemsRow,
  MenuItem,
  CategoryList,
  CategoryButton,
  Breadcrumbs,
  BreadcrumbLink,
  TopRow,
  MenuWrapper
} from "./Menu.styled";
import basket from '../Images/basket.png';


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




  return (
  <MenuWrapper>
    <TopRow>
      <Breadcrumbs>
        <BreadcrumbLink href="/">🏠</BreadcrumbLink> / <span>Меню</span>
      </Breadcrumbs>
      <Cart onClick={() => setIsCartOpen(true)}>
        <img src={basket} alt="Кошик" />
      </Cart>
    </TopRow>

    <CategoryBar
      categories={Object.keys(groupedItems)}
      setActiveSection={setActiveSection}
      setIsCartOpen={setIsCartOpen}
    />

    <CategoryList>
      {Object.keys(groupedItems).map((category) => (
        <CategoryButton
          key={category}
          onClick={() => {
            const el = document.getElementById(category.toLowerCase().replace(/\s/g, "-"));
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {category}
        </CategoryButton>
      ))}
    </CategoryList>

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
          setcart={setCartItems}
          cartItems={cartItems}
          removeItem={removeFromCart}
          onClose={() => setIsCartOpen(false)}
        />
      </>
    )}
  </MenuWrapper>
);
};