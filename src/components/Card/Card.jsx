import { CartContainer, CartTable, CartTotal } from './Cart.styled';

const Cart = () => {
  return (
    <CartContainer>
      <h2>Замовлення</h2>
      <CartTable>
        <thead>
          <tr>
            <th>Фото</th>
            <th>Назва</th>
            <th>Кількість</th>
            <th>Сума</th>
            <th>Відмінити</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[Фото]</td>
            <td>Тартар яловичий від шефа</td>
            <td>1</td>
            <td>325 ₴</td>
            <td><button>×</button></td>
          </tr>
        </tbody>
      </CartTable>
      <CartTotal>
        <p>Сума: 325 ₴</p>
        <p>Мінімальне замовлення - 450 грн.</p>
      </CartTotal>
    </CartContainer>
  );
};

export default Cart;