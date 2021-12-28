import React, { useState } from "react";
import {
  FormButton,
  FormInput,
  FormLabel,
  FormSection,
  FormWrapper,
  StyledForm,
} from "./FormElements";
import axios from "axios";

function Form() {
  const [user, setUser] = useState({});
  const [prueba, setPrueba] = useState("pruebaxd");

  const handleSubmit = () => {
    const hiddenForm = () => {
      <form></form>;
    };
  };
  const handleInputChange = (e) => {
    const name = e.target.name;
    console.log(e.target.name);
    setUser({
      ...user,
      [name]: e.target.value,
    });
    console.log(user);
  };
  return (
    <FormWrapper>
      <StyledForm action="http://localhost:3500/checkout" method="POST">
        <h2>Datos Personales</h2>
        <FormSection>
          <FormInput
            required
            onChange={(e) => handleInputChange(e)}
            name="correo"
          ></FormInput>
          <FormLabel htmlFor="correo">
            <span>Correo</span>
          </FormLabel>
        </FormSection>
        <FormSection>
          <FormInput
            required
            onChange={(e) => handleInputChange(e)}
            name="nombre"
          ></FormInput>
          <FormLabel htmlFor="nombre">
            <span>Nombre</span>
          </FormLabel>
        </FormSection>
        <FormSection>
          <FormInput
            required
            onChange={(e) => handleInputChange(e)}
            name="apellidos"
          ></FormInput>
          <FormLabel htmlFor="apellidos">
            <span>Apellidos</span>
          </FormLabel>
        </FormSection>
        <FormSection>
          <FormInput
            required
            onChange={(e) => handleInputChange(e)}
            name="dni"
          ></FormInput>
          <FormLabel htmlFor="dni">
            <span>DNI</span>
          </FormLabel>
        </FormSection>
        <FormSection>
          <FormInput
            required
            onChange={(e) => handleInputChange(e)}
            name="telefono"
          ></FormInput>
          <FormLabel htmlFor="telefono">
            <span>Telefono Móvil</span>
          </FormLabel>
        </FormSection>
        <FormSection>
          <FormInput
            required
            onChange={(e) => handleInputChange(e)}
            name="direccion"
          ></FormInput>
          <FormLabel htmlFor="direccion">
            <span>Dirección</span>
          </FormLabel>
        </FormSection>

        <FormButton type="submit" value="pagar"></FormButton>
      </StyledForm>
      <form action="http://localhost:3500/checkout" method="POST">
        <input type="hidden" name="prueba" value={prueba} />
        <input type="submit" value="pagar" />
      </form>
    </FormWrapper>
  );
}

export default Form;
