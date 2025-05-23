import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin: 0 auto 2rem;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

export const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;