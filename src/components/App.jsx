
import React, { useState } from "react";
import { Header } from "./Header/Header";
import { MenuList } from "./Menu/MenuList";
import { Contacts } from "./Contacts/contacts"
import {Delivery} from "./Delivery/delivery"

export function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>

      {activeSection === "home" && <Header setActiveSection={setActiveSection} />}

      <main style={{ padding: "20px" }}>
        {activeSection === "menu" && <MenuList setActiveSection={setActiveSection}/>}

        {activeSection === "contacts" && (
          <Contacts/>
        )}

        {activeSection === "delivery" && (
          <Delivery/>
        )}
      </main>
    </>
  );
}
