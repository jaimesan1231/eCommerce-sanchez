import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ProductHeader from "../../components/ProductHeader/ProductHeader";
import ProductList from "../../components/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";
import { getProducts } from "../../actions/productActions";

function Category() {
  const products = useSelector((state) => state.product);
  const router = useRouter();
  const { category } = router.query;
  const dispatch = useDispatch();
  console.log(products);
  useEffect(() => {
    dispatch(getProducts("default", category));
    console.log(products);
  }, [category]);
  return (
    <>
      <ProductHeader category={category} />
      {products.products.length == 0 ? (
        <h1>No hay nada que mostrar</h1>
      ) : (
        <ProductList products={products} />
      )}

      {products.products.length > 1 && <Pagination />}
    </>
  );
}

export default Category;
