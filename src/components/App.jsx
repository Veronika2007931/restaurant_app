import React, { useState } from "react";
import { Header1 } from "./Header1/Header1";
import { Header2 } from "./Header2/Header2";
import { MenuList } from "./Menu/MenuList";
import { Contacts } from "./Contacts/contacts";
import { Delivery } from "./Delivery/delivery";
import { Footer } from "./Footer/Footer"
import {AppContainer,MainContent,StyledFooter} from "./App.styled"

export function App() {
  const [activeSection, setActiveSection] = useState("home");




  return (

    <AppContainer >
  {activeSection === "home" ? (
    <Header1 setActiveSection={setActiveSection} />
  ) : (
    <Header2 setActiveSection={setActiveSection} />
  )}

  <MainContent>
    {activeSection === "delivery" && <Delivery />}
    {activeSection === "menu" && <MenuList />}
    {activeSection === "contacts" && <Contacts />}
    {/* інші сторінки */}
  </MainContent>

  {activeSection !== "home" && (
    <StyledFooter>
          <Footer setActiveSection={setActiveSection} />
        </StyledFooter>
  )}
</AppContainer>

  );
}
