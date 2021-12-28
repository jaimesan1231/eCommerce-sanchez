import React from "react";
import Product from "../Product/Product";
import { ProductListContainer } from "./ProductListElements";

function ProductList({ products }) {
  console.log(products);
  return (
    <ProductListContainer>
      {products.currentProducts !== undefined ? (
        products.currentProducts.map((item, index) => {
          return <Product key={index} product={item} />;
        })
      ) : (
        <h1>loading</h1>
      )}
    </ProductListContainer>
  );
}

export default ProductList;
