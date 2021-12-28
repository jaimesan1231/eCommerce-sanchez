import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "../components/CartItem/CartItem";
import Steps from "../components/Steps/Steps";
import Link from "next/link";

function carrito() {
  const products = useSelector((state) => state.cart);
  console.log(products);
  return (
    <>
      <Steps currentStep="1" />
      <CartContainer>
        <CartList>
          <CartListTitle>
            <h2>Carrito de compras</h2>
          </CartListTitle>
          <CartListHeader>
            <div className="left"></div>
            <div className="mid">
              <span>Producto</span>
              <span>Precio</span>
              <span>Cantidad</span>
              <span>Subtotal</span>
            </div>
            <div className="right"></div>
          </CartListHeader>
          {products.items.map((item) => {
            return <CartItem item={item} />;
          })}
        </CartList>
        <CartPay>
          <h1>Resumen</h1>
          <div className="subtotal">
            <span>Subtotal</span>
            <span>S/{products.total}</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>S/{products.total}</span>
          </div>

          <Link href="/checkout">Continuar</Link>
        </CartPay>
      </CartContainer>
    </>
  );
}

export default carrito;

const CartContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const CartList = styled.div`
  width: 65%;
  height: 100%;
  background-color: white;
  padding: 0 10px;
`;
const CartPay = styled.div`
  width: 30%;
  height: 260px;
  background-color: white;
  position: sticky;
  top: 0;
  a {
    width: 200px;
    height: 40px;
    background-color: #f7941d;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    color: black;
  }
  h1 {
    width: 80%;
    margin: 10px auto 0px auto;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    border-bottom: 1px solid #c1b4b4;
    padding: 10px 0px;
  }
  .subtotal,
  .total {
    margin: 0 auto;
    width: 80%;
    height: 60px;
    border-bottom: 1px solid #c1b4b4;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
  }
  .total {
    font-weight: 600;
  }
`;
const CartListTitle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c1b4b4;
`;

const CartListHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #c1b4b4;
  display: flex;
  justify-content: space-around;
  .left {
    width: 200px;
  }
  .mid {
    width: 60%;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 1fr;
    align-items: center;
    font-size: 15px;
  }
  .right {
    width: 17.5px;
  }
`;
