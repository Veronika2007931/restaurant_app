import React, { useEffect, useState } from "react"
import axios from "axios"

export const MenuList = () => {
  const [menuItems, setMenuitems] = useState([])

  useEffect(() => {
    axios.get('/menu')
      .then(responce => setMenuitems(responce.data))
      .catch(error => console.error("Помилка отримання меню"))
  }, [])

  return (

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
          <button>Замовити</button>
        </div>
      ))}
    </div>
  )
}