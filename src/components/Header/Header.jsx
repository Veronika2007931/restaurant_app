import { } from "./Header.styled"
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
      <label>Name</label>
      <div >
        {/* це тернарник, якщо зареєстрований покаже ім'я якщо ні кнопку зареєструватись */}
        {account ? <span>{account.name }</span>: <button  type = "button" onClick={switchModal}>Sign up</button>}
      </div>
      {showModal && <RegisterForm closeModal={switchModal} regis={newAcc} check={ check} />}
    </>
  )
}
