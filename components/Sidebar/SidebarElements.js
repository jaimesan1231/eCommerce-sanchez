import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 300px;
  height: calc(100vh - var(--header-height));
  position: fixed;
  top: var(--header-height);
  left: -100%;
  background-color: var(--header-color);
  z-index: 100;
  li {
    padding: 20px 10px;
    cursor: pointer;
  }
  li:hover {
    background-color: var(--primary-color);
  }
  transition: 850ms;
  ${({ active }) =>
    active &&
    `
    left:0;
    transition:350ms
  `}
`;
