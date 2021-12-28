export const addItemCart = (product, cant) => {
  const productCart = { product, cant: cant, subtotal: product.price * cant };
  const cartTotal = productCart.subtotal;
  return {
    type: "ADD_ITEM",
    payload: productCart,
    payloadTotal: cartTotal,
  };
};

export const deleteItemCart = (item, items) => {
  console.log("item");
  console.log(item);

  console.log("items");
  console.log(items);
  const newItems = items.items.filter(
    (items) => items.product._id !== item.product._id
  );
  const productPrice = item.subtotal;
  console.log("nuevos items");
  console.log(newItems);
  return {
    type: "CLEAN_CART",
    payload: newItems,
    payloadTotal: productPrice,
  };
};
