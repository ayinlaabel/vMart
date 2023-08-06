import styled from "styled-components/native";
import { InputProps } from "./interface";

export const PhoneNumberInputContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  border-width: 1px;
  border-radius: 100px;
`;

export const PhoneInput: InputProps = styled.TextInput`
  font-size: 18px;
  width: ${(props: any) => (props.width ? props.width : "100%")};
  height: 100%;
`;

export const PhoneCodeContainer = styled.TouchableOpacity`
  width: ${(props: any) => (props.width ? props.width : "100%")};
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const PhoneCodeText = styled.Text`
  font-size: 16px;
`;

export const OtpInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
`;

export const OtpInputN = styled.TextInput`
  font-size: 20px;
  height: 100%;
  width: 70px;
  border-radius: 50px;
  border-width: 1px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
`;
