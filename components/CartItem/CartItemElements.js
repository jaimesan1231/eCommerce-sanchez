import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #c1b4b4;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  svg {
    font-size: 20px;
    color: var(--primary-color);
  }
`;

export const CartItemImage = styled.div`
  width: 200px;
  height: 80%;

  position: relative;
`;

export const CartItemDescription = styled.div`
  width: 60%;
  height: 50px;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  div {
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
  }
  .name {
    text-transform: capitalize;
  }
  .price {
    display: flex;
    justify-content: center;
  }
  .cant {
    display: flex;
    justify-content: center;
  }
  .subtotal {
    display: flex;
    justify-content: center;
  }
`;
