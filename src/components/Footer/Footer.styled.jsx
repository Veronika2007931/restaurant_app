import styled from 'styled-components';
import footerBg from '../Images/footer_background.png';


const GOLD = '#D4AF37';
// const BURGUNDY = '#5B0707';

export const FooterContainer = styled.footer`
  background-image: url(${footerBg});
  color: #fff;
  padding: 40px 20px 30px;
`;

export const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FooterColumn1 = styled.div`
  flex: 1 1 140px;
  padding-left: 70px;

  h2{
  font-family: Italic;}

`;

export const FooterColumn2 = styled.div`
  flex: 1 1 180px;
`;

export const FooterColumn3 = styled.div`
  flex: 1 1 120px;
`;

export const FooterColumn4 = styled.div`
  flex: 1 1 150px;
  margin-left: auto;
`;

export const FooterTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
  font-family: Italic;
`;

export const FooterLine = styled.div`
  margin: 0 0 15px 0;
`;

export const FooterLink = styled.a`
  display: block;
  margin-bottom: 8px;
  color: #ccc;
  text-decoration: none;
  line-height: 1.5;
  font-family: Italic;
  transition: transform 0.2s ease;


  &:hover {
    color: ${GOLD};
    transform: scale(1.05);
  }
`;

export const FooterContact = styled.p`
  margin-bottom: 8px;
  font-family: Italic;
`;

export const FooterContactAddress = styled.p`
  margin-bottom: 8px;
  font-family: Italic;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
export const FooterContactSchedule = styled.p`
  padding-top: 50px;
  font-family: Italic;
  
`;

export const Copyright = styled.p`
  margin-top: 15px;
  font-size: 12px;
  color: #aaa;
  font-family: Italic;
`;