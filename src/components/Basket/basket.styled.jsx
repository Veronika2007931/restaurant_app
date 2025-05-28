import styled from "styled-components";

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
`;

export const Footer = styled.div`
  padding: 16px;
  border-top: 1px solid #ccc;
  background-color: #fff;
  position: sticky;
  bottom: 0;
  z-index: 10;
`;
export const CloseButton = styled.button`
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background-color: #D4AF37;
  color: black;
  font-size: 16px;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.3s;

  &:hover {
    background-color: #0a8a0a;
  }
`;

export const CartItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background-color: #f2f2f2;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: #000;
  }
`;