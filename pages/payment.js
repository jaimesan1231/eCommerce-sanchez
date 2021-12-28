import React from "react";
import { useSelector } from "react-redux";
import PaymentItem from "../components/PaymentItem/PaymentItem";
import styled from "styled-components";
import Steps from "../components/Steps/Steps";

function payment() {
  const products = useSelector((state) => state.cart);
  const linkPay = "http://localhost:3500/checkout";
  console.log(products.items);
  return (
    <>
      <Steps currentStep="3" />
      <PaymentContainer>
        <PaymentHeader>
          <h3>Resumen de Compra</h3>
        </PaymentHeader>
        {products.items.map((item, index) => {
          return <PaymentItem key={index} item={item}></PaymentItem>;
        })}
        <Total>
          <span className="total__description">Total</span>
          <span className="total__amount">S/ 66</span>
        </Total>
      </PaymentContainer>
      <form action={linkPay} method="POST">
        <input type="hidden" name="prueba" value="xddd" />
        <PaymentButton type="submit" value="Pagar" />
      </form>
    </>
  );
}

const PaymentContainer = styled.div`
  width: 500px;
  height: auto;
  margin: 20px auto;
  background-color: white;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Total = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #c1b4b4;

  .total__description {
    width: 80%;
    padding-left: 20px;
  }
  .total__amount {
    width: 20%;
  }
`;
const PaymentHeader = styled.div`
  width: 100%;
  height: 60px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c1b4b4;
`;
const PaymentButton = styled.input`
  width: 150px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  padding: 10px 0px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-family: sans-serif;
  cursor: pointer;
`;

export default payment;
