import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  CartItemDescription,
  CartItemContainer,
  CartItemImage,
} from "./CartItemElements";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteItemCart } from "../../actions/cartActions";

function CartItem({ item }) {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(item);
  console.log(products);
  const handleDeleteButton = () => {
    dispatch(deleteItemCart(item, products));
  };
  return (
    <CartItemContainer>
      <CartItemImage>
        <Image src="/images/producto1.jpg" layout="fill" objectFit="contain" />
      </CartItemImage>
      <CartItemDescription>
        <div className="name">{item.product.name}</div>
        <div className="price">S/ {item.product.price}</div>
        <div className="cant">{item.cant}</div>
        <div className="subtotal">S/ {item.subtotal}</div>
      </CartItemDescription>
      <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteButton()} />
    </CartItemContainer>
  );
}

export default CartItem;
