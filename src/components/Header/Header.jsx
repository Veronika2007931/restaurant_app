import React, { useState, useEffect } from 'react';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import {
  HeaderContainer,
  TopBar,
  Address,
  Phone,
  MainHeader,
  LogoContainer,
  Logo,
  NavContainer,
  NavItem,
  WorkingHours,
  ActionButton,
  LanguageSelector,
  UserInfo,
  UserIcon
} from './Header.styled';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [account, setAccount] = useState(null);

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData?.name) setAccount(userData);
  }, []);

  return (
    <>
      <HeaderContainer>
        <TopBar>
          <Address>Київ, вул. Берестейський проспект, 37</Address>
          <Phone>+380 (67) 382 01 74</Phone>
        </TopBar>

        <MainHeader>
          <NavContainer>
            <NavItem>МЕНЮ</NavItem>
            <span>|</span>
            <NavItem>ДОСТАВКА</NavItem>
            <span>|</span>
            <NavItem>КОНТАКТИ</NavItem>
          </NavContainer>

          <LogoContainer>
            <Logo>МІТЕРІЯ</Logo>
          </LogoContainer>

          <NavContainer>
            <WorkingHours>Пн.-Нд 11.00-22:00</WorkingHours>
            <ActionButton>РЕЗЕРВ СТОЛУ</ActionButton>
            {account ? (
              <UserInfo>
                <UserIcon>{account.name.charAt(0)}</UserIcon>
                <span>{account.name}</span>
              </UserInfo>
            ) : (
              <ActionButton onClick={toggleModal}>SIGN IN</ActionButton>
            )}
            <LanguageSelector>UA</LanguageSelector>
          </NavContainer>
        </MainHeader>
      </HeaderContainer>

      {showModal && <RegisterForm onClose={toggleModal} />}
    </>
  );
};