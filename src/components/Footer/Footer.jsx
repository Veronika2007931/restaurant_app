import { FooterContainer, FooterSection, FooterLinks, FooterContacts } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <h3>Ми в соцмережах:</h3>
        <div>[🟩️ 🟩️ 🟩️]</div>
      </FooterSection>
      
      <FooterSection>
        <h3>НАШЕ МЕНЮ</h3>
        <FooterLinks>
          <a href="/">Доставка</a>
          <a href="/">Бургери з доставкою</a>
          <a href="/">Резерв столу</a>
        </FooterLinks>
      </FooterSection>
      
      <FooterSection>
        <h3>КОНТАКТИ</h3>
        <FooterContacts>
          <p>Київ, вул. Велика Васильківська, 114</p>
          <p>+380 (67) 382 01 52</p>
          <p>Пн - Нд: 11:00–22:00</p>
        </FooterContacts>
      </FooterSection>
      
      <div>
        <p>© Kufa, вул. Велика Васильевская, 114</p>
        <p>+380 (67) 382 01 52</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;