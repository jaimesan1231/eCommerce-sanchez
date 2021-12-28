import styled from "styled-components";
import Image from "next/image";

export const ProductCard = styled.div`
  width: 263px;
  height: 316px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: space-around;
  margin-bottom: 30px;
`;

export const ImageCard = styled.div`
  width: 80%;
  height: 150px;
  position: relative;
`;
export const TitleCard = styled.div`
  width: 100%;
  height: 20px;
  text-align: center;
`;

export const PriceCard = styled.div`
  width: 100%;
  height: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const PayContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
export const CountCard = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  .number {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #c1b4b4;
    border-radius: 10px;
  }
  .controllers {
    width: 28px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .plus {
    width: 18px;
    height: 18px;
    background-color: #605959;
    border-radius: 5px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }
  .minus {
    width: 18px;
    height: 18px;
    background-color: #dbdbdb;
    border-radius: 5px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }
`;
export const AddCart = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 30px;
    cursor: pointer;
  }
`;
