import  { useEffect, useState } from "react"
import axios from "axios"
import { Basket } from "components/Basket/basket";
import {Overlay} from "../Basket/basket.styled"

export const MenuList = ({ setActiveSection }) => {
  const [menuItems, setMenuitems] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    axios.get('/menu')
      .then(responce => setMenuitems(responce.data))
      .catch(error => console.error("Помилка отримання меню"))
  }, [])

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );

  }
    return (
      <>
        <button onClick={() => setIsCartOpen(true)} >
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10L18.5145 17.4276C18.3312 18.3439 18.2396 18.8021 18.0004 19.1448C17.7894 19.447 17.499 19.685 17.1613 19.8326C16.7783 20 16.3111 20 15.3766 20H8.62337C7.6889 20 7.22166 20 6.83869 19.8326C6.50097 19.685 6.2106 19.447 5.99964 19.1448C5.76041 18.8021 5.66878 18.3439 5.48551 17.4276L4 10M20 10H18M20 10H21M4 10H3M4 10H6M6 10H18M6 10L9 4M18 10L15 4M9 13V16M12 13V16M15 13V16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button onClick={() => setActiveSection("home")}>На головну</button>
        <div >
          {menuItems.map((item, index) => (
            <div key={index} >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}

                />
              )}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Ціна:</strong> {item.price} грн</p>
              <p><strong>Вага:</strong> {item.weight} г</p>
              <button onClick={() => addToCart(item, cartItems)}>Замовити</button>
            </div>

          ))}
        </div>
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
    )
  }
