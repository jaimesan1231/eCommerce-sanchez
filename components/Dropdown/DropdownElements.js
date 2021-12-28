import styled, { css } from "styled-components";

export const DropdownWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const DropDownSelected = styled.div`
  font-size: 16px;
`;

export const DropdownHeader = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  z-index: auto;
  position: relative;
`;
export const DropdownTitle = styled.div`
  font-size: 16px;
  transition: all 0.3s ease;
  position: absolute;
  left: 20px;
`;
export const DropdownAction = styled.div`
  user-select: none;
  svg {
    font-size: 18px;
    cursor: pointer;
  }
`;
export const DropdownList = styled.ul`
  list-style: none;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075);
  z-index: 100;
  position: absolute;
`;
export const DropdownListItem = styled.li`
  width: 100%;
  margin: 0;
  &:first-of-type button {
    border-top: 1px solid #ccc;
  }
  &:last-of-type button {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const DropdownButton = styled.button`
  width: 100%;
  padding: 15px 20px;
  display: flex;
  background-color: white;
  border: 0;
  font-size: 16px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;
