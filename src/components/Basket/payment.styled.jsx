import styled from "styled-components";
export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Modal = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  margin: 1rem 0;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  background: #D4AF37;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
`;

export const SuccessToast = styled.div`
  margin-top: 1.5rem;
  background: #dff0d8;
  color: #3c763d;
  padding: 1rem;
  border-radius: 8px;
`;
