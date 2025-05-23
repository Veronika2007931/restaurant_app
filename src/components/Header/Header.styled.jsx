import styled from 'styled-components';

export const HeaderContainer = styled.header`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

export const TopBar = styled.div`
  background-color: #f5f5f5;
  padding: 8px 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.4;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  &:hover {
    color: #d4a762;
  }
`;

export const WorkingHours = styled.span`
  margin-right: 20px;
  font-size: 14px;
`;

export const ReservationButton = styled.button`
  background-color: #d4a762;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-right: 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #c09555;
  }
`;

export const LanguageSelector = styled.span`
  cursor: pointer;
  &:hover {
    color: #d4a762;
  }
`;