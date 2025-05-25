import { HeaderContainer, TopBar, NavBar, Logo, NavLink, WorkingHours, ReservationButton, LanguageSelector, IconWrapper,UserIcon, Name, RightSection, } from './Header.styled';
import { RegisterForm} from "../RegisterForm/RegisterForm.jsx"
import { useState, useEffect } from "react"

export const Header = () => {

  const [showModal, shown] = useState(false)
  const [account, newAcc] = useState(null)

  const switchModal = () => {
    shown(!showModal)
  }

  const check = () => {
     const info = JSON.parse(localStorage.getItem('accInfo'))
        return info?info.name&&info.email&&info.password?true:false:false
  }

  useEffect(() => {
  const info = JSON.parse(localStorage.getItem('accInfo'));
  if (check()) {
    newAcc(info);
  }
}, []);

  return (
    <>
      <HeaderContainer>
      <TopBar>

          Київ, вул. Велика Васильківська, 114<br />
          +380 (67) 478 99 38

      </TopBar>

      <NavBar>
  <Logo>МІТЕРІЯ</Logo>

  <nav>
    <NavLink href="#">МЕНЮ</NavLink>
    <NavLink href="#">ДОСТАВКА</NavLink>
    <NavLink href="#">КОНТАКТИ</NavLink>
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
      <RegisterForm
        closeModal={switchModal}
        regis={newAcc}
        check={check}
      />
    )}

    <LanguageSelector>UA</LanguageSelector>
  </RightSection>
</NavBar>


      </HeaderContainer>




    </>
  )
}
