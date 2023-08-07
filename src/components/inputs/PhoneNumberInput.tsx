import React from "react";
import { PhoneInput, PhoneNumberInputContainer } from "./styles";
import CountryCodeInput from "./CountryCodeInput";
import { InputProps, PhoneNumberInputContainerProps } from "./interface";

const PhoneNumberInput = ({
  borderColor,
  mt,
  mb,
  mr,
  ml,
}: PhoneNumberInputContainerProps) => {
  return (
    <PhoneNumberInputContainer
      borderColor={borderColor}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
    >
      <CountryCodeInput width="70px " />
      <PhoneInput placeholder="Phone Number" />
    </PhoneNumberInputContainer>
  );
};

export default PhoneNumberInput;
