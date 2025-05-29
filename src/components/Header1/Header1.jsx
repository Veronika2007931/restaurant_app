import { useEffect, useState } from "react";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { Footer } from "../Footer/Footer";
import {
  HeaderContainer,
  NavBar,
  TopBar,
  TopBarContent,
  TopBarTime,
  NavLink,
  RightSection,
  LeftSection,
  CenterSection,
  SignUpButton,
  ReservationButton,
  IconWrapper,
  UserIcon,
  Name,
  LanguageSelector,
  Logo,
  BottomLef,
  BottomRigh,
  SignInButton,
} from "./Header1.styled";

export const Header1 = ({ setActiveSection }) => {
  const [showModal, setShowModal] = useState(false);
  const [account, setAccount] = useState(null);

  const switchModal = () => {
    setShowModal(!showModal);
  };

  const check = () => {
    const info = JSON.parse(localStorage.getItem("accInfo"));
    return info ? info.name && info.email && info.password : false;
  };

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("accInfo"));
    if (check()) {
      setAccount(info);
    }
  }, []);

  return (
    <>
      <HeaderContainer>
        <TopBar>
          <TopBarContent>
            <span>Київ, вул. Берестейський проспект, 37</span>
             <span>📞 +380 (44) 204 91 00</span>
          </TopBarContent>
           <TopBarTime>🕒 Пн - Нд: 11:00–22:00</TopBarTime>


        </TopBar>

        <NavBar>
          <LeftSection>
            <NavLink onClick={() => setActiveSection("delivery")}>ДОСТАВКА</NavLink>
            <span>|</span>
            <NavLink onClick={() => setActiveSection("menu")}>МЕНЮ</NavLink>
            <span>|</span>
            <NavLink onClick={() => setActiveSection("contacts")}>КОНТАКТИ</NavLink>
          </LeftSection>

          <RightSection>
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
              <RegisterForm closeModal={switchModal} regis={setAccount} check={check} />
            )}
          </RightSection>
        </NavBar>
      </HeaderContainer>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Logo>МІТЕРІЯ</Logo>
      </div>


    </>
  );
};
