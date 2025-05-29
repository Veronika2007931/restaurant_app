
import {
  Content,
  Breadcrumbs,
  BreadcrumbLink,
  TitleWithDivider,
  Text,
  List,
  TextConditions,
} from "./delivery.styled";

export const Delivery=() => {

  return (
    <Content>
      <Breadcrumbs>
        <BreadcrumbLink href="/">🏠</BreadcrumbLink>/ <span>Доставка</span>
      </Breadcrumbs>
      <TitleWithDivider>Доставка</TitleWithDivider>
      <Text>Зверніть увагу, що доставка здійснюється за допомогою сервісів Uklon або Uber.</Text>
      <TextConditions>УМОВИ ДОСТАВКИ:</TextConditions>
      <List>мінімальне замовлення — 450 грн;
      <br />замовлення по місту Київ — 150 грн;
      <br />замовлення за межі міста — по тарифу таксі.</List>
    </Content>
)
}