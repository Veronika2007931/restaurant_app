import { HeaderContainer, TopBar, NavBar, Logo, NavLink, WorkingHours, ReservationButton, LanguageSelector } from './Header.styled';
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
    return info ? info.name&&info.email&&info.password? true:false:false
  }

  // useEffect(() => {
  //   const info = JSON.parse(localStorage.getItem('accInfo'))
  //   if (check()) {
  //     newAcc(info)
  //   }
  // })

  return (
    <>
      <HeaderContainer>
      <TopBar>
        <div>
          Київ, вул. Велика Васильківська, 114<br />
          +380 (67) 478 99 38
        </div>
      </TopBar>

      <NavBar>
        <Logo>МІТЕРІЯ</Logo>

        <nav>
          <NavLink href="#">ПРО НАС</NavLink>
          <NavLink href="#">ДОСТАВКА</NavLink>
          <NavLink href="#">КОНТАКТИ</NavLink>
        </nav>

        <div>
          <WorkingHours>Пн - Нд 11:00–22:00</WorkingHours>
          <ReservationButton>РЕЗЕРВ СТОЛУ</ReservationButton>
          <LanguageSelector>UA ▼</LanguageSelector>
        </div>
      </NavBar>
      </HeaderContainer>
      


      <div >
        {/* це тернарник, якщо зареєстрований покаже ім'я якщо ні кнопку зареєструватись */}
        {account ? <span>{account.name }</span>: <button  type = "button" onClick={switchModal}>Sign up</button>}
      </div>
      {showModal && <RegisterForm closeModal={switchModal} regis={newAcc} check={ check} />}
    </>
  )
}
