import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bgImage from '../Images/3.avif'; 

const GOLD = '#D4AF37';
const BURGUNDY = '#5B0707';

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  min-height: 100vh;
  color: white;
  font-family: 'Arial', sans-serif;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.6);
    z-index: -1;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  background-color: url(${bgImage});
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
  margin-left: 75px; 
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
  margin-left: 100px;
`;

export const RightSection = styled.div`
  font-family: Italic;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 100px;
`;

export const Logo = styled.h1`
  position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Italic;
  font-size: 125px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 3px;
  margin: 0;
  text-transform: uppercase;
  pointer-events: none; 
  user-select: none;
  z-index: 10000;
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
    color: ${BURGUNDY};
    box-shadow: 0 0 10px rgba(212, 167, 98, 0.5);
  }
`;

export const SignInButton = styled(ReservationButton)`
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