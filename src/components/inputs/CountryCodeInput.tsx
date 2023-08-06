import React from "react";
import { Text, View } from "react-native";
import { PhoneCodeContainer, PhoneCodeText } from "./styles";

const CountryCodeInput = ({ width }: any) => {
  return (
    <PhoneCodeContainer activeOpacity={0.9} width={width}>
      <PhoneCodeText>+234</PhoneCodeText>
    </PhoneCodeContainer>
  );
};

export default CountryCodeInput;
