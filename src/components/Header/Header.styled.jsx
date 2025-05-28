import styled from 'styled-components';

const GOLD = '#D4AF37';
const BURGUNDY = '#5B0707';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${BURGUNDY};
  color: white;
  font-family: 'Arial', sans-serif;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 10px 0;
  background-color: ${BURGUNDY};
  color: #fff;
  font-size: 14px;
  border-bottom: 1px solid ${GOLD};
`;

export const Address = styled.span`
  text-align: center;
  transition: color 0.3s ease;
  &:hover {
    color: ${GOLD};
  }
`;

export const Phone = styled.span`
  text-align: center;
  transition: color 0.3s ease;
  &:hover {
    color: ${GOLD};
  }
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 3px;
  margin: 0;
  text-transform: uppercase;
  transition: color 0.3s ease;
  &:hover {
    color: ${GOLD};
    cursor: pointer;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  flex: 1;
`;

export const NavItem = styled.a`
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: ${GOLD};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${GOLD};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const WorkingHours = styled.span`
  color: #fff;
  font-size: 16px;
  transition: color 0.3s ease;
  &:hover {
    color: ${GOLD};
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid ${GOLD};
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${GOLD};
    color: ${BURGUNDY};
    box-shadow: 0 0 10px rgba(212, 167, 98, 0.5);
  }
`;

export const LanguageSelector = styled.span`
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;

  &::after {
    content: '▼';
    font-size: 10px;
    margin-left: 5px;
    color: ${GOLD};
  }

  &:hover {
    color: ${GOLD};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: ${GOLD};
  }
`;

export const UserIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${GOLD};
  color: ${BURGUNDY};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
