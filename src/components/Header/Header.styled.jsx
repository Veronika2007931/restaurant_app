import styled from 'styled-components';

export const HeaderContainer = styled.header`
  font-family: 'Arial', sans-serif;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const TopBar = styled.div`
  background-color: #f8f8f8;
  padding: 8px 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
  color: #555;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  max-width: 1400px;
  margin: 0 auto;
  height: 80px;
`;

export const Logo = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  color: #d4a762;
  letter-spacing: 1px;
`;

export const NavLink = styled.a`
  margin: 0 20px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #d4a762;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #d4a762;
    }
  }
`;

export const WorkingHours = styled.span`
  margin-right: 25px;
  font-size: 14px;
  color: #666;
`;

export const ReservationButton = styled.button`
  background-color: #d4a762;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-right: 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background-color: #c09555;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(212, 167, 98, 0.3);
  }
`;

export const LanguageSelector = styled.span`
  cursor: pointer;
  font-weight: 500;
  position: relative;
  padding-right: 15px;

  &::after {
    content: '▼';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 10px;
  }

  &:hover {
    color: #d4a762;
  }
`;
export const SignUpButton = styled.button`
  background-color: #ffb566; /* світло-помаранчевий */
  color: #000000; /* чорний текст */
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  `;

export const IconWrapper = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;

export const UserIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  /* margin-bottom: 8px; */
`;
export const Name = styled.span`
  display: flex;
  text-align: center;
`;
