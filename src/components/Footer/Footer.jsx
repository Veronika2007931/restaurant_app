import {
  FooterContainer,
  FooterGrid,
  FooterColumn1,
  FooterColumn2,
  FooterColumn3,
  FooterColumn4,
  FooterTitle,
  FooterLink,
  FooterContactAddress,
  FooterContact,
  Copyright,
  FooterLine,
  FooterContactSchedule,
} from "./Footer.styled"
import starsImg from '../Images/stars.png';

export const Footer = ({ setActiveSection }) => {

  return (
    <FooterContainer>
      <FooterGrid>

        <FooterColumn1>
          <h2>МІТЕРІЯ</h2>
          <img src = {starsImg} />
          <Copyright>© 2025 Всі права захищені</Copyright>
        </FooterColumn1>

        <FooterColumn2>
          <FooterTitle>Для клієнтів</FooterTitle>
          <FooterLine>____________________________</FooterLine>
          <FooterLink href="#">Ресторан для двох</FooterLink>
          <FooterLink href="#">Ресторани в центрі Києва</FooterLink>
          <FooterLink href="#">Дегустаційні сети з доставкою</FooterLink>
          <FooterLink href="#">Ресторан американської кухні</FooterLink>
          <FooterLink href="#">Доставка їжі з ресторану в Києві</FooterLink>
          <FooterLink href="#">Де поїсти смачний стейк у Києві?</FooterLink>
          <FooterLink href="#">М'ясний ресторан — найкраще м'ясо, <br />кращі стейки</FooterLink>
          <FooterLink href="#">Стейк-хаус в центрі Києва</FooterLink>
        </FooterColumn2>

        <FooterColumn3>
          <FooterTitle>Наше меню</FooterTitle>
          <FooterLine>________________________</FooterLine>
          <FooterLink href="#">Доставка</FooterLink>
          <FooterLink href="#">Бургери з доставкою</FooterLink>
          <FooterLink href="#">Резерв столу</FooterLink>
        </FooterColumn3>

        <FooterColumn4>
          <FooterTitle>Контакти</FooterTitle>
          <FooterLine>____________________________</FooterLine>
          <FooterContactAddress>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Київ,+вул.+Велика+Васильківська,+114"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none' }}
            >
            📍 Київ, вул. Велика Васильківська, 114
            </a>
          </FooterContactAddress>
          <FooterContact>📞 +380 (44) 204 91 00</FooterContact>
          <FooterContactSchedule>🕒 Пн - Нд: 11:00–22:00</FooterContactSchedule>
        </FooterColumn4>

      </FooterGrid>
    </FooterContainer>
  )
}
