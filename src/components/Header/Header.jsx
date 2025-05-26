import React, { useEffect, useState } from "react";
import {RegisterForm} from "../RegisterForm/RegisterForm";
import { HeaderContainer, NavBar, TopBar,NavLink, RightSection, ReservationButton, IconWrapper, UserIcon, Name, LanguageSelector, Logo, WorkingHours } from "./Header.styled";

export const Header = ({ setActiveSection }) => {
  const [showModal, shown] = useState(false);
  const [account, newAcc] = useState(null);

  const switchModal = () => {
    shown(!showModal);
  };

  const check = () => {
    const info = JSON.parse(localStorage.getItem("accInfo"));
    return info ? info.name && info.email && info.password : false;
  };

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("accInfo"));
    if (check()) {
      newAcc(info);
    }
  }, []);

  return (
    <HeaderContainer>
      <TopBar>
        Київ, вул. Велика Васильківська, 114<br />+380 (67) 478 99 38
      </TopBar>

      <NavBar>
        <Logo>МІТЕРІЯ</Logo>
        <nav>
          <NavLink onClick={() => setActiveSection("home")}>ДОСТАВКА</NavLink>
          <NavLink onClick={() => setActiveSection("menu")}>МЕНЮ</NavLink>
          <NavLink onClick={() => setActiveSection("contacts")}>КОНТАКТИ</NavLink>
        </nav>

        <RightSection>
          <WorkingHours>Пн - Нд 11:00–22:00</WorkingHours>
          <ReservationButton>РЕЗЕРВ СТОЛУ</ReservationButton>

          {account ? (
            <IconWrapper>
              <UserIcon src="../Images/free-icon-profile-7710521.png" alt="photo" />
              <Name>{account.name}</Name>
            </IconWrapper>
          ) : (
            <ReservationButton type="button" onClick={switchModal}>
              Sign up
            </ReservationButton>
          )}

          {showModal && (
            <RegisterForm closeModal={switchModal} regis={newAcc} check={check} />
          )}

          <LanguageSelector>UA</LanguageSelector>
        </RightSection>
      </NavBar>
    </HeaderContainer>
  );
};
