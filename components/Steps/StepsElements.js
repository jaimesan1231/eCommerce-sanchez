import styled from "styled-components";

export const StepsContainer = styled.div`
  width: 60%;
  margin: 20px auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .circle {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: var(--gray);
    position: relative;
    span {
      position: absolute;
      white-space: nowrap;
      top: 120%;
      left: -15%;
      color: var(--gray);
    }
  }
  .active {
    background-color: var(--primary-color);
    span {
      color: black;
    }
  }
  .line {
    width: 100%;
    border: 1px solid var(--gray);
    position: absolute;
    z-index: -1;
  }
`;
