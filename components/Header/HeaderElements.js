import styled from "styled-components";
import Image from "next/image";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: var(--header-color);
  height: var(--header-height);
  display: flex;
  align-items: center;
  color: white;
  padding: 0px 20px;
  justify-content: space-around;
`;

export const Logo = styled(Image)``;

export const Categorias = styled.div`
  height: 40px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 16px;
  }
  cursor: pointer;
`;

export const Search = styled.div`
  width: 30%;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 10px;
  justify-content: space-between;

  input {
    width: calc(100% - 40px);
    outline: none;
    border: none;
  }
`;
export const SearchLogo = styled.div`
  width: 40px;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #b6aeae;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navbar = styled.div`
  width: 20%;
  height: 40px;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  .list_item {
    width: auto;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    cursor: pointer;
  }
`;
