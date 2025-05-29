import styled from 'styled-components';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 1000;
`;

export const Container = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 1.3rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
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

export const Title = styled.h3`
  color: #d4a762;
  display: flex;
  justify-content: center;
  margin: 10px 0 20px 0;
  font-size: 32px;
  font-weight: bold;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 1rem;
  color: #333;
  margin: 5px 80px 10px 50px;
`;

export const Input = styled.input`
  margin: 10px 0 0 0;
  width: 100%;
  font-size: 1rem;
  outline: none;
  font-family: inherit;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 30px;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #D4AF37;
  }
`;

export const Select = styled.select`
  margin: 10px 0 0 0;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 999px;
  outline: none;
  font-family: inherit;
  background-color: white;
  box-sizing: border-box;
  color: ${({ value }) => (value === '' ? '#aaa' : 'inherit')};

  &:focus {
    border-color: #D4AF37;
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #d4a762;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;
  margin: 0 0 0 175px;
  transition: all 0.4s ease;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.4);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.9),
                0 0 40px rgba(212, 175, 55, 0.6);
  }
`;
export const SuccessToast = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #D4AF37;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 1100;
  animation: fadeInOut 3s ease forwards;

  @keyframes fadeInOut {
    0% { opacity: 0; transform: translate(-50%, 20px); }
    10% { opacity: 1; transform: translate(-50%, 0); }
    90% { opacity: 1; transform: translate(-50%, 0); }
    100% { opacity: 0; transform: translate(-50%, 20px); }
  }
`;