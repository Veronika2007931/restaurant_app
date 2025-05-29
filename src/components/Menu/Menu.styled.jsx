import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  font-family: Italic;
  background-color: #fff9e6;
`;

export const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
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
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const CategoryButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: #000;
  border-bottom: 2px solid transparent;
  cursor: pointer;
`;

export const MenuTitle = styled.h2`
  text-align: center;
  margin: 15px 0 0 0;
  font-family: Italic;
  font-size: 2.5rem;
  font-weight: 500;
  color: #333;
`;

export const Cart = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding-right: 95px;
  padding-bottom: 0;
  margin-bottom: 0;
  padding-top: 32px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const Breadcrumbs = styled.div`
  color: #555;
  font-size: 20px;
  font-family: Italic;
  margin-left: 107px;
  padding-top: 32px;
  margin-bottom: 0;
`;

export const BreadcrumbLink = styled.a`
  text-decoration: none;
  color: #333;
`;
