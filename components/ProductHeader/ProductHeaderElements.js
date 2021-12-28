import styled from "styled-components";

export const Title = styled.div`
  width: 70%;
  height: var(--header-height);
  margin: 10px auto;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const FilterProducts = styled.div`
  width: 70%;
  height: var(--header-height);
  margin: 10px auto;
  background-color: white;
  display: flex;
  align-items: center;
`;

export const FilterContainer = styled.div`
  width: 300px;
  height: 40px;
  background-color: white;
  margin-left: 20px;
  border: 1px solid var(--gray);
`;
