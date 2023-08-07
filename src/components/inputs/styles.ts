import styled from "styled-components/native";
import { InputProps, PhoneNumberInputContainerProps } from "./interface";
import React from "react";
import { Colors } from "../../utils/shared/colors";

export const PhoneNumberInputContainer: React.FC<PhoneNumberInputContainerProps> = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  border-width: 1px;
  border-radius: 100px;
  border-color: ${(props: any) =>
    props.borderColor ? props.borderColor : Colors.offWhite};
  margin-top: ${(props: any) => (props.mt ? props.mt : "0px")};
  margin-bottom: ${(props: any) => (props.mb ? props.mb : "0px")};
  margin-right: ${(props: any) => (props.mr ? props.mr : "0px")};
  margin-left: ${(props: any) => (props.ml ? props.ml : "0px")};
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
