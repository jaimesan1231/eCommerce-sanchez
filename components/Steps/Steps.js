import React from "react";
import { StepsContainer } from "./StepsElements";

function Steps({ currentStep }) {
  console.log(currentStep);
  return (
    <StepsContainer>
      <div className={currentStep == "1" ? "circle active" : "circle"}>
        <span>Carrito</span>
      </div>
      <div className={currentStep == "2" ? "circle active" : "circle"}>
        <span>Datos</span>
      </div>
      <div className={currentStep == "3" ? "circle active" : "circle"}>
        <span>Pago</span>
      </div>
      <div className="line"></div>
    </StepsContainer>
  );
}

export default Steps;
