import styled from "styled-components";

export const PaginationContainer = styled.div`
  height: 60px;
  width: ${(props) => (props.scroll ? "100vw" : "100%")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.scroll ? "flex-start" : "center")};
  position: absolute;
  top: 0;
  left: 0;
`;
export const PaginationButton = styled.input`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  outline: none;
  margin-left: 20px;
  border: none;
  &:hover {
    background-color: var(--primary-color);
    cursor: pointer;
    color: white;
  }
  &.active {
    background-color: var(--primary-color);
    color: white;
  }
`;

export const PaginationWrapper = styled.div`
  width: 300px;
  height: 60px;
  position: relative;
  overflow: hidden;
`;

export const PaginationBar = styled.div`
  width: 400px;
  height: 60px;
  margin: 0 auto 30px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    color: var(--primary-color);
    font-size: 40px;
    cursor: pointer;
  }
`;
