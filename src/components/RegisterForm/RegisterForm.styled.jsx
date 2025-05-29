import styled from 'styled-components';

export const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const FormContainer = styled.div`
  background: white;
  padding: 1.3rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 24px;
  background: transparent;
  border: none;
  color: grey;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #d00;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const Text = styled.p`
  color: #d4a762;
  display: flex;
  justify-content: center;
  margin: 0;
  padding-top: 20px;
  font-size: 32px;
  font-weight: bold;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin-bottom: 10px;
  margin-right: 40px;
  color: #1c1717;
`;

export const FormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 30px;
`;

export const FormButton = styled.button`
  padding: 0.75rem;
  background-color: #d4a762;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  margin: 0 150px 0 150px;
  transition: all 0.4s ease;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.4);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.9),
                0 0 40px rgba(212, 175, 55, 0.6);
  }
`;

export const Ul = styled.ul`
  margin-bottom: 0;
  list-style: none;
`;
