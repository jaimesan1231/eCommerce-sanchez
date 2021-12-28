import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Categorias,
  HeaderContainer,
  Logo,
  Navbar,
  Search,
  SearchLogo,
} from "./HeaderElements";

import {
  faBars,
  faHome,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const handleCategories = () => {
    setSidebar(!sidebar);
  };
  return (
    <HeaderContainer>
      <Logo src="/images/logo.png" width={220} height={40} objectFit="cover" />
      <Categorias onClick={handleCategories}>
        <FontAwesomeIcon icon={faBars} />
        <span>Categorias</span>
      </Categorias>
      <Search>
        <input type="text" />
        <SearchLogo>
          <FontAwesomeIcon icon={faSearch} />
        </SearchLogo>
      </Search>
      <Navbar>
        <ul>
          <li>
            <Link href="/">
              <div className="list_item">
                <FontAwesomeIcon icon={faHome} />
                <span>Inicio</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="list_item">
                <FontAwesomeIcon icon={faUser} />
                <span>Mi cuenta</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/carrito">
              <div className="list_item">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Carrito</span>
              </div>
            </Link>
          </li>
        </ul>
      </Navbar>
      <Sidebar sidebar={sidebar} handleHide={handleCategories} />
    </HeaderContainer>
  );
}

export default Header;
