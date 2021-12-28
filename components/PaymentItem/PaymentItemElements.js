import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .subtotal {
    width: 20%;
  }
`;

export const ItemImageContainer = styled.div`
  width: 100px;
  height: 80%;
  position: relative;
`;

export const ItemDescription = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
`;
