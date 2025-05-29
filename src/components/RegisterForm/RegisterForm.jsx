import { FormOverlay, FormContainer, CloseButton, StyledForm, Text, FormLabel, FormInput, FormButton, Ul } from "./RegisterForm.styled"
import { useEffect } from "react"


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
    // else {
    //         const logOut=()=>{
    //             regis(null)
    //             localStorage.removeItem("accInfo")
    //             closeModal()
    //         }
    //         check()?confirm("Log out")&&logOut():alert('You have to fill all fields')
    //     }
  }

    return (

      <FormOverlay onClick={closeOnOverlay}>
        <FormContainer>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
           <StyledForm onSubmit={signUp}>
            <Text>Форма реєстрації:</Text>
          <Ul>
            <li>
              <FormLabel> Ім'я користувача
                <FormInput type="text" name="name" placeholder="Username" />
              </FormLabel></li>
            <li>
              <FormLabel>Електронна пошта
                <FormInput type="text" name="email" placeholder="Email" />
              </FormLabel>
            </li>
            <li>
              <FormLabel>Пароль
                <FormInput type="password" name="password" placeholder="Password" />
                </FormLabel>
                

            </li>
          </Ul>
          <FormButton type="submit">Sign in</FormButton>
        </StyledForm>
       </FormContainer>
      </FormOverlay>

    )
  }
