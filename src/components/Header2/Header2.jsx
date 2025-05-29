import { useEffect, useState } from "react";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { Reservation } from "components/Reservation/reservation";
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
    ReservationButton,
    IconWrapper,
    UserIcon,
    Name,
    LanguageSelector,
    Logo,
    SignInButton,
} from "./Header2.styled";

export const Header2 = ({ setActiveSection }) => {
  const [showModal, shown] = useState(false);
  const [showModalReserve, setShowModalReserve] = useState(false);
    const [account, newAcc] = useState(null);

    const switchModal = () => {
        shown(!showModal);
    };

     const switchModalReserv = () => {
    setShowModalReserve(!showModalReserve);
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
                <TopBarContent>
                    <span>📍Київ, вул. Берестейський проспект, 37</span>
                    <span>📞+380 (44) 204 91 00</span>
                </TopBarContent>
                <TopBarTime>🕒Пн - Нд: 11:00–22:00</TopBarTime>
            </TopBar>

            <NavBar>
                <LeftSection>
                    <NavLink onClick={() => setActiveSection("delivery")}>ДОСТАВКА</NavLink>
                    <span>|</span>
                    <NavLink onClick={() => setActiveSection("menu")}>МЕНЮ</NavLink>
                    <span>|</span>
                    <NavLink onClick={() => setActiveSection("contacts")}>КОНТАКТИ</NavLink>
                </LeftSection>


                <CenterSection>
                    <Logo>МІТЕРІЯ</Logo>
                </CenterSection>

                <RightSection>
                    <ReservationButton onClick={switchModalReserv}>РЕЗЕРВ СТОЛУ</ReservationButton>
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
            {showModalReserve && (
              <Reservation closeModal={switchModalReserv } />
            )}
                    {showModal && (
                        <RegisterForm closeModal={switchModal} regis={newAcc} check={check} />
                    )}
                </RightSection>
            </NavBar>


        </HeaderContainer>

    );
};