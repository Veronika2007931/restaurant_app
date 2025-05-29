import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; 
  position: relative; 
`;

export const MainContent = styled.main`
  flex: 1 0 auto; 
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1440px; 
  box-sizing: border-box; 

  @media (max-width: 1480px) {
    padding: 0 20px; 
  }
`;

export const StyledFooter = styled.footer`
  flex-shrink: 0; 
  background-color: #000;
  color: #fff;
  width: 100%;
  margin: 0;
  padding: 20px 0;
  box-sizing: border-box;
`;