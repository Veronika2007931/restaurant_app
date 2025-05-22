import { } from "./RegisterForm.styled"
import { useState, useEffect } from "react"


export const RegisterForm = ({ closeModal, regis, check }) => {

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.code === 'Escape') {
        closeModal()
      }
    }


    window.addEventListener('keydown', closeOnEsc)


    return () => {
      window.removeEventListener('keydown', closeOnEsc)
    }
  }, [closeModal])

   const closeOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const signUp = (e) => {
    e.preventDefault()
    const form = e.currentTarget.elements
    if (form.name.value && form.email.value && form.password.value) {
      const accInfo = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value
      }
      regis(accInfo)
      localStorage.setItem("accInfo", JSON.stringify(accInfo))
      closeModal()
    }
    else {
      const logOut = () => {
        regis(null)
        localStorage.removeItem("accInfo")
        closeModal()
      }


    }

    return (

        <div onClick={closeOnOverlay}>
          <form onSubmit={signUp}>
            <ul>
              <li>
                <label >UserName
                  <input type="text" name="name" placeholder="Username" />
                </label></li>
              <li>
                <label>Email
                  <input type="text" name="email" placeholder="Email" />
                </label>
              </li>
              <li>
                <label >Password
                  <input type="password" name="password" placeholder="Password" />
                </label>
              </li>
            </ul>
            <button type="submit">Sign up</button>
          </form>
        </div>

    )
  }
}