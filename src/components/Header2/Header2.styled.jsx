import styled from 'styled-components';

const GOLD = '#D4AF37';
const GRAPHITE = '	#1c1717';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${GRAPHITE};
  color: white;
  font-family: 'Arial', sans-serif;
  `;
;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${GRAPHITE};
  color: #fff;
  font-size: 16px;
  border-bottom: 1px solid ${GOLD};
  white-space: nowrap;
  padding: 15px 0;
  margin-left: 100px;
  margin-right: 100px;
`;
;

export const TopBarContent = styled.div`
  font-family: Italic; 
  font-size: 17px; 
  display: flex;
  gap: 40px;
  padding: 10px 0;
  margin-left: 75px; /* ← змінюй це значення */
`;

export const TopBarTime = styled.div`
  font-family: Italic;  
  white-space: nowrap;
  margin-left: 500px;
  color: #fff;
  font-size: 17px;
  transition: color 0.3s ease;
`;

export const NavBar = styled.div`
  position: relative;
  max-width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const LeftSection = styled.div`
   font-family: Italic;  
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 90px;
`;

export const CenterSection = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`;


export const RightSection = styled.div`
  font-family: Italic;  
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: flex-end;
  margin-right: 100px;
`;

export const Logo = styled.h1`
  font-family: Italic;  
  font-size: 60px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 3px;
  margin: 0;
  text-transform: uppercase;
  transition: color 0.3s ease;
  cursor: pointer;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.3s ease;
  position: relative;
  margin: 0 10px;

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


export const ReservationButton = styled.button`
  font-family: Italic; 
  background: transparent;
  color: #fff;
  border: 1px solid ${GOLD};
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${GOLD};
    color: ${GRAPHITE};
    box-shadow: 0 0 10px rgba(212, 167, 98, 0.5);
  }
`;

export const SignInButton = styled(ReservationButton)`
  font-family: Italic; 
  padding: 8px 16px;
  font-size: 18px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: ${GOLD};
  }
`;

export const UserIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.span`
  font-size: 16px;
  color: #fff;
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