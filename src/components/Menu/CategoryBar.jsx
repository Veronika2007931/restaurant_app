import React from "react";
import { CategoryList, CategoryButton, MenuTitle, Cart, Breadcrumbs, BreadcrumbLink } from "./Menu.styled";
import styled from "styled-components";
import basket from "../Images/basket.png";

export const CategoryBar = ({ categories, setActiveSection, setIsCartOpen }) => {
  return (
    <StickyWrapper>
      <TopBar>
        <Breadcrumbs>
          <BreadcrumbLink href="/">🏠</BreadcrumbLink> / <span>Меню</span>
        </Breadcrumbs>

        <MenuTitle>МЕНЮ</MenuTitle>

        <Cart onClick={() => setIsCartOpen(true)}>
          <img src={basket} alt="Кошик" />
        </Cart>
        
      </TopBar>

      <CategoryList>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            onClick={() => {
              const el = document.getElementById(
                category.toLowerCase().replace(/\s/g, "-")
              );
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryList>
    </StickyWrapper>
  );
};

const StickyWrapper = styled.div`
  position: sticky;
  top: 0; 
  z-index: 999;
  padding: 0.5rem 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff9e6;
  width: 100vw;
`;

const TopBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
`;
