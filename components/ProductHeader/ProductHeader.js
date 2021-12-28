import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import {
  FilterContainer,
  FilterProducts,
  Title,
} from "./ProductHeaderElements";

function ProductHeader({ category }) {
  const title = category ? category.toUpperCase().toString() : "";
  return (
    <>
      <Title>{title}</Title>
      <FilterProducts>
        <FilterContainer>
          <Dropdown
            title="Ordenar por"
            items={[
              "Precio de menor a mayor",
              "Precio de mayor a menor",
              "A-Z (Alfabeticamente)",
              "Z-A (Alfabeticamente)",
            ]}
            category={category}
          />
        </FilterContainer>
      </FilterProducts>
    </>
  );
}

export default ProductHeader;
