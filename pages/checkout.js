import React from "react";
import styled from "styled-components";
import Form from "../components/Form/form";
import Steps from "../components/Steps/Steps";

function checkout() {
  return (
    <>
      <Steps currentStep="2" />
      <FormContainer>
        <Form />
      </FormContainer>
    </>
  );
}

export default checkout;

const FormContainer = styled.div`
  width: 50%;
  margin: 10px auto;
  height: 700px;
  display: flex;
  justify-content: center;
`;
