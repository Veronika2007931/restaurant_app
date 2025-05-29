import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const PageContainer = styled.div`
  flex: 1;
  padding: 40px 60px;
  background-color: #fff9e6;
`;

export const Breadcrumbs = styled.div`
  color: #555;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: Italic;
  margin-left: 55px;
`;

export const BreadcrumbLink = styled.a`
  text-decoration: none;
  color: #333;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  padding: 2rem;
  margin-left: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 550px; 
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  margin-right: 2rem;
`; 
export const InfoWrapper = styled.div`
  flex: 1; 
  margin-left: 60px;
  font-family: Italic;
`;

export const TitleWithDivider = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 15px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 55%;
    height: 2px; 
    background: 
      linear-gradient(90deg, 
        #D4AF37 0%, 
        #D4AF37 20%, 
        transparent 100% 
      );
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 18px;
  color: #222;
`;

export const Icon = styled.span`
  font-size: 20px;
  margin-right: 10px;
  color: #b98250;
`;

export const Text = styled.span``;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #b98250; 
  margin: 40px 0;
`;
;