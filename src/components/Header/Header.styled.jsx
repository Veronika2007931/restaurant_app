import styled from 'styled-components';

export const HeaderContainer = styled.header`
  font-family: 'Arial', sans-serif;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: #1d1210; /* темний фон */
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  background-color: #1d1210;
  color: #fff;
  padding: 5px 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.4;
  border-bottom: 1px solid #3a2e2a;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin: 0;
`;

export const NavLink = styled.a`
  margin: 0 15px;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  padding: 6px 10px;
  transition: color 0.3s;

  &:hover {
    color: #d4a762;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #d4a762;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const WorkingHours = styled.span`
  font-size: 13px;
  color: #d4a762;
  margin-right: 20px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  color: #fff;
`;


export const ReservationButton = styled.button`
  background-color: transparent;
  color: #d4a762;
  border: 1px solid #d4a762;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d4a762;
    color: #1d1210;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(212, 167, 98, 0.3);
  }
`;


export const SignInButton = styled.button`
  background-color: transparent;
  color: #d4a762;
  border: 1px solid #d4a762;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d4a762;
    color: #1d1210;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(212, 167, 98, 0.3);
  }
`;


export const LanguageSelector = styled.span`
  cursor: pointer;
  font-weight: 500;
  position: relative;
  padding-right: 15px;
  color: #fff;

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

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 50px;
  color: #fff;
`;

export const UserIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #d4a762;
`;

export const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin-top: 4px;
  color: #d4a762;
`;
