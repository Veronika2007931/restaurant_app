
import { render, screen } from "@testing-library/react";
import { Basket } from "../components/Basket/basket";

const mockItems = [
  { name: "Піца", price: "150", imageUrl: "test.jpg" },
];

test("рендер кошика з товаром", () => {
  render(
    <Basket
      cartItems={mockItems}
      onClose={() => {}}
      removeItem={() => {}}
      setcart={() => {}}
    />
  );
  const itemText = screen.getByText(/Піца/i);
  expect(itemText).toBeInTheDocument();
});
