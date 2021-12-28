import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  DropdownAction,
  DropdownButton,
  DropdownHeader,
  DropdownList,
  DropdownListItem,
  DropDownSelected,
  DropdownTitle,
  DropdownWrapper,
} from "./DropdownElements";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { getProducts } from "../../actions/productActions";

function Dropdown({ title, items, category }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [moveDropdown, setMoveDropdown] = useState(false);
  const handleOpenClick = () => {
    setMoveDropdown(true);
    setIsOpen(true);
  };
  const handleCloseClick = () => {
    setMoveDropdown(true);
    setIsOpen(false);
    if (selectedItem !== "") {
      setMoveDropdown(true);
    } else {
      setMoveDropdown(false);
    }
  };
  const selectItem = (item) => {
    setSelectedItem(item);
    console.log(item);
    setIsOpen(false);
    dispatch(getProducts(item, category));
  };
  return (
    <DropdownWrapper>
      <DropdownHeader isOpen={moveDropdown}>
        <DropdownTitle isOpen={moveDropdown}>
          {selectedItem ? selectedItem : title}
        </DropdownTitle>
        <DropDownSelected>{selectedItem ? selectedItem : ""}</DropDownSelected>
        <DropdownAction>
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} onClick={handleCloseClick} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} onClick={handleOpenClick} />
          )}
        </DropdownAction>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {items.map((item, index) => (
            <DropdownListItem key={index}>
              <DropdownButton onClick={() => selectItem(item)}>
                <span>{item}</span>
              </DropdownButton>
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

export default Dropdown;
