import { Header2 } from "components/Header2/Header2";
import { Footer } from "../Footer/Footer";
import {
  PageWrapper,
  PageContainer,
  Breadcrumbs,
  BreadcrumbLink,
  ContentWrapper,
  ImagesWrapper,
  Image,
  InfoWrapper,
  TitleWithDivider,
  InfoItem,
  Icon,
  Text,
  Divider,
} from "./contacts.styled";

import dish_and_interior from "../Images/dish_and_interior.png";

export const Contacts = () => {
  return (
    <>
      <PageWrapper>
        <PageContainer>
          <Breadcrumbs>
            <BreadcrumbLink href="/">🏠</BreadcrumbLink> / <span>Контакти</span>
          </Breadcrumbs>

          <ContentWrapper>
            <ImagesWrapper>
              <Image src={dish_and_interior} alt="Restaurant interior and dish" />
            </ImagesWrapper>

            <InfoWrapper>
              <TitleWithDivider>Контакти</TitleWithDivider>
              <InfoItem>
                <Icon>📍</Icon>
                <Text>Київ, вул. Берестейський проспект, 37</Text>
              </InfoItem>
              <InfoItem>
                <Icon>📞</Icon>
                <Text>+380 (44) 204 91 00</Text>
              </InfoItem>
              <InfoItem>
                <Icon>🕒</Icon>
                <Text>Пн - Нд: 11:00-22:00</Text>
              </InfoItem>
            </InfoWrapper>
          </ContentWrapper>
        </PageContainer>
      </PageWrapper>
    </>
  );
};