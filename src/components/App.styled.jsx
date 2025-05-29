import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: clip; /* дозволяє sticky працювати */
  position: relative;
`;

export const MainContent = styled.main`
  flex: 1;
`;

export const StyledFooter = styled.footer`
  flex: 1;
  background-color: #000;
  color: #fff;
  width: 100%;
`;

