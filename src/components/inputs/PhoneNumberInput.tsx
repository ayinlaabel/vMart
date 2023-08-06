import React from "react";
import { PhoneInput, PhoneNumberInputContainer } from "./styles";
import CountryCodeInput from "./CountryCodeInput";
import { InputProps } from "./interface";

const PhoneNumberInput = () => {
  return (
    <PhoneNumberInputContainer>
      <CountryCodeInput width="70px " />
      <PhoneInput placeholder="Phone Number" />
    </PhoneNumberInputContainer>
  );
};

export default PhoneNumberInput;
