
import { render, screen } from "@testing-library/react";
import { MenuList } from "../components/Menu/MenuList";

test("рендер компонента меню", () => {
  render(<MenuList setActiveSection={() => {}} />);
  const placeholderText = screen.getByText(/Меню/i);
  expect(placeholderText).toBeInTheDocument();
});
