import axios from "axios";

export const getProducts = (modifier, category) => async (dispatch) => {
  console.log(modifier);
  let products = [];
  switch (modifier) {
    case "Precio de mayor a menor":
      products = await axios(
        `https://library-api-eshop.herokuapp.com/api/productos/HigherLess/${category}`
      );
      break;
    case "Precio de menor a mayor":
      products = await axios(
        `https://library-api-eshop.herokuapp.com/api/productos/LessHigher/${category}`
      );
      break;
    case "A-Z (Alfabeticamente)":
      products = await axios(
        `https://library-api-eshop.herokuapp.com/api/productos/NameAscend/${category}`
      );
      break;
    case "Z-A (Alfabeticamente)":
      products = await axios(
        `https://library-api-eshop.herokuapp.com/api/productos/NameDescend/${category}`
      );
      break;
    default:
      products = await axios(
        `https://library-api-eshop.herokuapp.com/api/productos/${category}`
      );
      break;
  }
  console.log("aea");
  console.log(products);
  const productLength = products.data.length;
  const numPages = () => {
    if (productLength % 16 > 0) {
      return Math.floor(productLength / 16) + 1;
    } else {
      return Math.floor(productLength / 16);
    }
  };
  const productPages = [];
  for (let i = 0; i < numPages(); i++) {
    productPages.push(products.data.slice(16 * i, 16 * (i + 1)));
  }
  console.log(productPages);

  console.log(productLength);
  console.log(numPages());
  dispatch({
    type: "GET_PRODUCTS",
    payload: productPages,
    payloadCurrentProducts: productPages[0],
  });
};

export const changePage = (page, currentProducts) => {
  console.log(page);
  console.log(currentProducts);
  return {
    type: "CHANGE_PAGE",
    payload: page,
    payloadCurrentProducts: currentProducts,
  };
};

export const orderProducts = () => {
  return {
    type: "ORDER_PRODUCTS",
  };
};
