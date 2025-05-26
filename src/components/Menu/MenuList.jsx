import React, { useEffect, useState } from "react"
import axios from "axios"

export const MenuList = () => {
  const [menuItems, setMenuitems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/menu')
      .then(responce => setMenuitems(responce.data))
      .catch(error => console.error("Помилка отримання меню"))
  }, [])

  return (
   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {menuItems.map((item, index) => (
        <div key={index} className="menu-card" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '300px' }}>
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }}
            />
          )}
          <h3 style={{ marginTop: '12px' }}>{item.name}</h3>
          <p>{item.description}</p>
          <p><strong>Ціна:</strong> {item.price} грн</p>
          <p><strong>Вага:</strong> {item.weight} г</p>
        </div>
      ))}
    </div>
  )
}