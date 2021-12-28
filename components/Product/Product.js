import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import {
  AddCart,
  CountCard,
  ImageCard,
  PayContainer,
  PriceCard,
  ProductCard,
  TitleCard,
} from "./ProductElements";
import { faMinus, faPlus, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { addItemCart } from "../../actions/cartActions";

function Product({ product }) {
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);
  const handlePlusButton = () => {
    setNumber(number + 1);
  };
  const handleMinusButton = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  const handleCartButton = () => {
    Swal.fire({
      title: "<strong>Producto agregado al carrito</strong>",
      icon: "success",
      showCancelButton: true,
      focusConfirm: false,
      focusCancel: false,
      cancelButtonText: `<p>Seguir comprando</p>`,
      confirmButtonColor: "var(--primary-color)",
      confirmButtonText:
        '<a href="/carrito" style="text-decoration:none; color:white;">Ir al carrito</a> ',
    });
    dispatch(addItemCart(product, number));
  };

  return (
    <ProductCard>
      <ImageCard>
        <Image src={product.url} layout="fill" objectFit="contain" />
      </ImageCard>
      <TitleCard>{product.name}</TitleCard>
      <PriceCard>S/ {product.price}</PriceCard>
      <PayContainer>
        <CountCard>
          <div className="number">{number}</div>
          <div className="controllers">
            <div className="plus" onClick={handlePlusButton}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="minus" onClick={handleMinusButton}>
              <FontAwesomeIcon icon={faMinus} />
            </div>
          </div>
        </CountCard>
        <AddCart>
          <FontAwesomeIcon icon={faCartPlus} onClick={handleCartButton} />
        </AddCart>
      </PayContainer>
    </ProductCard>
  );
}

export default Product;
