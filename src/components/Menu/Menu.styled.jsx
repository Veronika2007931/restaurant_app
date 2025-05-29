import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  font-family: Italic;
`;

export const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: Italic;
  font-weight: 600;
  color: #000;
`;

export const ItemsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

export const MenuItem = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    margin: 1rem 0 0.5rem;
  }

  p {
    margin: 0.25rem 0;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #D4AF37;
    font-family: Italic;
    color: white;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

export const CategoryButton = styled.button`
  background: none;
  font-family: Italic;
  border: none;
  font-size: 1rem;
  color: ${({ active }) => (active ? "#D4AF37" : "#000")};
  border-bottom: ${({ active }) =>
    active ? "2px solid #D4AF37" : "2px solid transparent"};
  padding-bottom: 5px;
  cursor: pointer;

  &:hover {
    color: #D4AF37;
  }
`;

export const MenuTitle = styled.h2`
  text-align: center;
  margin-top: 1rem;
  font-family: Italic;
  font-size: 2.5rem;
  font-weight: 500;
  color: #333;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

