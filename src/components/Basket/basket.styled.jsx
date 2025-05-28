import styled from "styled-components";

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #ddd;
`;


export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    margin: 0 0 4px;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

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
  z-index: 1000;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Image = styled.img`
   width: 100px;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`

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
    background-color: #aa8301;
  }
`;
export const BasketHeader = styled.div`
  width: 100%;
  text-align: center;
  padding: 16px 0;
  border-bottom: 1px solid #ddd;
`;

export const BasketTitle = styled.h2`
  font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #222;
  margin: 0;
`;


