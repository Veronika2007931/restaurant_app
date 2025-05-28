import React, { useState } from "react";
import { Header1 } from "./Header1/Header1";        
import { Header2 } from "./Header2/Header2";      
import { MenuList } from "./Menu/MenuList";
import { Contacts } from "./Contacts/contacts";
import { Delivery } from "./Delivery/delivery";

export function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      {/* Показуємо Header1 тільки на головній */}
      {activeSection === "home" && (
        <Header1 setActiveSection={setActiveSection} />
      )}

      {/* Показуємо Header2 на інших сторінках */}
      {activeSection !== "home" && (
        <Header2 setActiveSection={setActiveSection} />
      )}

      <main style={{ padding: "20px" }}>
        {activeSection === "menu" && (
          <MenuList setActiveSection={setActiveSection} />
        )}
        {activeSection === "contacts" && <Contacts />}
        {activeSection === "delivery" && <Delivery />}
      </main>
    </>
  );
}
