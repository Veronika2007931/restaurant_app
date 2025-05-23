import styled from 'styled-components';

export const StyledMenu = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MenuSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;