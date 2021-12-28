import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledForm = styled.form`
  width: 80%;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  height: 700px;
  justify-content: space-between;
  padding: 50px 20px;
  h2 {
    width: 100%;
    text-align: center;
  }
`;
export const FormLabel = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid #c7c7c7;
  span {
    position: absolute;
    bottom: 15px;
    left: 20px;
    transition: all 0.3s ease;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0%;
    bottom: -1px;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid var(--primary-color);
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }
`;
export const FormInput = styled.input`
  outline: none;
  padding: 0 20px;
  align-items: center;
  width: 100%;
  height: 49px;
  margin-top: 11px;
  border: none;
  background: none;
  &:focus + ${FormLabel} span,
  &:valid + ${FormLabel} span {
    transform: translateY(-150%);
    font-size: 14px;
    color: var(--primary-color);
  }
  &:focus + ${FormLabel}:after, &:valid + ${FormLabel}:after {
    transform: translateX(0%);
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075);
  z-index: auto;
`;
export const FormSection = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  overflow: hidden;
`;
export const SemiInput = styled.div`
  width: 45%;
  height: 40px;
`;

export const FormButton = styled.input`
  width: 50%;
  color: white;
  height: 40px;
  margin-top: 60px;
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  margin-left: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FormError = styled.div``;
