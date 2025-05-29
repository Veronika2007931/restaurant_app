import { useState } from "react";
import {Overlay,Modal,Label,Input,Button,SuccessToast} from "./payment.styled";

export const PaymentModal = ({ total, onClose, onConfirm }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = () => {

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onConfirm();
      onClose();
    }, 2500);
  };

  return (
    <Overlay>
      <Modal>
        <h2>Оплата</h2>
        <Label>Номер картки
          <Input
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Label>

        <Label>Сума до оплати
          <Input type="text" value={`${total.toFixed(2)} грн`} readOnly />
        </Label>

        <Button onClick={handlePayment}>Оплатити</Button>

        {showSuccess && <SuccessToast>✅ Оплату успішно завершено!</SuccessToast>}
      </Modal>
    </Overlay>
  );
};
