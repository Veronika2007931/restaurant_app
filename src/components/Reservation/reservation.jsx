import { useEffect, useState } from "react"
import TableImage from '../Images/photo_5314650398621038594_y.jpg';
import {Overlay, Container, CloseButton, Input, Label, Select, Title, SubmitButton, SuccessToast} from "./reservatiomn.styled"
import { CenterSection } from "components/Header2/Header2.styled";
export const Reservation = ({ closeModal }) => {

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  setShowSuccess(true);
  setTimeout(() => {
    closeModal();
  }, 2000);

  setTimeout(() => setShowSuccess(false), 3000);
};


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

  return (
 <Overlay onClick={closeOnOverlay}>
  <Container>
    <CloseButton onClick={closeModal}>&times;</CloseButton>
    <Title>Резерв столу</Title>

        <img src={TableImage} alt="tables" style={{ width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

        <form onSubmit={handleSubmit}>

    <Label>
      Номер стола, який хочете забронювати
      <Input type="text" name="tableNumber" placeholder="Number" />
    </Label>

    <Label>
      Час бронювання
      <Select name="reservationTime">
        <option>Оберіть час</option>
        <option value="12:00">12:00</option>
        <option value="12:30">12:30</option>
        <option value="13:00">13:00</option>
        <option value="13:30">13:30</option>
        <option value="14:00">14:00</option>
        <option value="14:30">14:30</option>
        <option value="15:00">15:00</option>
        <option value="15:30">15:30</option>
        <option value="16:00">16:00</option>
        <option value="16:30">16:30</option>
        <option value="17:00">17:00</option>
        <option value="17:30">17:30</option>
        <option value="18:00">18:00</option>
        <option value="18:30">18:30</option>
        <option value="19:00">19:00</option>
        <option value="19:30">19:30</option>
        <option value="20:00">20:00</option>
        <option value="20:30">20:30</option>
      </Select>
    </Label>

    <SubmitButton type="submit">Забронювати</SubmitButton>
        </form>
      </Container>
      {showSuccess && (
  <SuccessToast>Стіл успішно заброньовано!</SuccessToast>
)}
    </Overlay>

  )
}
