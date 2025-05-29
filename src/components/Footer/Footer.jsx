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

export const Footer = () => {

  return (
    <FooterContainer>
      <FooterGrid>

        <FooterColumn1>
          <h2>МІТЕРІЯ</h2>
          <img src = {starsImg} alt="img" />
          <Copyright>© 2025 Всі права захищені</Copyright>
        </FooterColumn1>

        <FooterColumn2>
          <FooterTitle>Додатково</FooterTitle>
          <FooterLine>____________________________</FooterLine>
          <FooterLink href="#">Акції</FooterLink>
          <FooterLink href="#">Банкети</FooterLink>
          <FooterLink href="#">Дегустаційні дні</FooterLink>
          <FooterLink href="#">Відгуки та пропозиції</FooterLink>
          <FooterLink href="#">Працівники ресторану</FooterLink>
          <FooterLink href="#">Вакансії</FooterLink>
        </FooterColumn2>

        <FooterColumn3>
          <FooterTitle>Послуги</FooterTitle>
          <FooterLine>________________________</FooterLine>
          <FooterLink href="#">Доставка</FooterLink>
          <FooterLink href="#">Оцінка страв</FooterLink>
          <FooterLink href="#">Резерв столу</FooterLink>
        </FooterColumn3>

        <FooterColumn4>
          <FooterTitle>Контакти</FooterTitle>
          <FooterLine>____________________________</FooterLine>
          <FooterContactAddress>
            <a
              href="https://www.google.com/maps/place/%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9+%D0%BF%D0%BE%D0%BB%D1%96%D1%82%D0%B5%D1%85%D0%BD%D1%96%D1%87%D0%BD%D0%B8%D0%B9+%D1%96%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82+%D1%96%D0%BC%D0%B5%D0%BD%D1%96+%D0%86%D0%B3%D0%BE%D1%80%D1%8F+%D0%A1%D1%96%D0%BA%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE/data=!4m7!3m6!1s0x40d4ce82b9bc8a47:0x47514e5d91216bf3!8m2!3d50.4488974!4d30.456977!16zL20vMDhuMjVt!19sChIJR4q8uYLO1EAR82shkV1OUUc?authuser=0&hl=uk&rclk=1"
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
