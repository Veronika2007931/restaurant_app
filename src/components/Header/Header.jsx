import  { useEffect, useState } from "react";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { Footer } from "../Footer/Footer"
import { HeaderContainer, NavBar, TopBar, NavLink, RightSection, LeftSection, CenterSection, SignUpButton, ReservationButton, IconWrapper, UserIcon, Name, LanguageSelector, Logo, WorkingHours, BottomLef, BottomRigh, SignInButton } from "./Header.styled";

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
        <LeftSection>
          <NavLink onClick={() => setActiveSection("home")}>ДОСТАВКА</NavLink>
          <span>|</span>
          <NavLink onClick={() => setActiveSection("menu")}>МЕНЮ</NavLink>
          <span>|</span>
          <NavLink onClick={() => setActiveSection("contacts")}>КОНТАКТИ</NavLink>
        </LeftSection>

        <CenterSection>
          <Logo>МІТЕРІЯ</Logo>
        </CenterSection>

        <RightSection>
          <WorkingHours>Пн - Нд 11:00–22:00</WorkingHours>
          <ReservationButton>РЕЗЕРВ СТОЛУ</ReservationButton>
          {account ? (
            <IconWrapper>
              <UserIcon src="../Images/free-icon-profile-7710521.png" alt="photo" />
              <Name>{account.name}</Name>
            </IconWrapper>
          ) : (
            <SignInButton type="button" onClick={switchModal}>
              Sign in
            </SignInButton>
          )}
          <LanguageSelector>UA</LanguageSelector>
          {showModal && (
            <RegisterForm closeModal={switchModal} regis={newAcc} check={check} />
          )}
        </RightSection>
      </NavBar>

      <Footer />
    </HeaderContainer>

  );
};