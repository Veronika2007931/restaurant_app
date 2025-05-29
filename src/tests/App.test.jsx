
import { render, screen } from "@testing-library/react";
import { App } from "../components/App";

test("рендер головного компонента і наявність логотипу", () => {
  render(<App />);
  const logoElement = screen.getByText(/МІТЕРІЯ/i);
  expect(logoElement).toBeInTheDocument();
});
