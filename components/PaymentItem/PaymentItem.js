import React from "react";
import {
  ItemContainer,
  ItemDescription,
  ItemImageContainer,
} from "./PaymentItemElements";
import Image from "next/image";
import { useSelector } from "react-redux";

function PaymentItem({ item }) {
  const products = useSelector((state) => state.cart);
  console.log(item);
  return (
    <ItemContainer>
      <ItemDescription>
        <div>{item.cant}</div>
        <ItemImageContainer>
          <Image
            src="/images/producto1.jpg"
            layout="fill"
            objectFit="contain"
          />
        </ItemImageContainer>
        <div>{item.product.name}</div>
      </ItemDescription>
      <div className="subtotal">S/ {item.subtotal}</div>
    </ItemContainer>
  );
}

export default PaymentItem;
