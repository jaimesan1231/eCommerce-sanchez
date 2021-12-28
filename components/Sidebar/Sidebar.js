import React, { useState } from "react";
import Link from "next/link";
import { SidebarContainer } from "./SidebarElements";
import { SidebarData } from "../SidebarData";

function Sidebar({ sidebar, handleHide }) {
  return (
    <SidebarContainer active={sidebar}>
      <ul>
        {SidebarData.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <li onClick={handleHide}>
                <span>{item.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </SidebarContainer>
  );
}

export default Sidebar;
