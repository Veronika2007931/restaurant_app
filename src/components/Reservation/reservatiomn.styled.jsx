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
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

export const Title = styled.h3`
 margin: 10px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #D4AF37;
  margin-bottom: 1.5rem;
  line-height: 1.3;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #333;
`;

export const Input = styled.input`
margin:10px;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 999px;
  outline: none;
  font-family: inherit;
  box-sizing: border-box;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #D4AF37;
  }
`;

export const Select = styled.select`
  margin:10px;
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
  margin-top: 2rem;
  padding: 0.7rem 2rem;
  background-color: #D4AF37;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #b9912e;
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