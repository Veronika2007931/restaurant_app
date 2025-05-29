import styled from "styled-components";

export const Content = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
  background-color: #fff9e6;
  box-sizing: border-box;
`;

export const Breadcrumbs = styled.div`
  color: #555;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: Italic;
  margin-left: 115px;
  padding-top: 21px;
`;

export const BreadcrumbLink = styled.a`
  text-decoration: none;
  color: #333;
  margin-right: 5px;
`;

export const TitleWithDivider = styled.h2`
  font-size: 32px;
  position: relative;
  padding-bottom: 15px;
  font-family: Italic;
  margin: 80px 0 20px 270px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25%;
    height: 2px; 
    background: 
      linear-gradient(90deg, 
        #D4AF37 0%, 
        #D4AF37 20%, 
        transparent 100% 
      );
  }
`;

export const Text = styled.div`
  font-size: 18px; 
  font-family: Italic;
  margin-left: 270px;
  margin-bottom: 50px;
`;

export const List = styled.div`
  margin: 8px 0 100px 270px;
  display: flex;
  font-size: 18px;
  font-family: Italic;
  line-height: 1.7;
`;


export const TextConditions = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-left: 270px;
  font-weight: bold;
  font-family: Italic;
`;