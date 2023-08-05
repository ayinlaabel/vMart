import styled from "styled-components/native";
import { designWidth, wp } from "../../utils/shared/responsive-dimension";
import { ButtonProps, ButtonTextProps } from "./interface";
import { Colors } from "../../utils/shared/colors";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
export const ButtonContainer = styled.TouchableOpacity``;
export const Button: React.FC<ButtonProps> = styled.TouchableOpacity`
  width: ${(props: any) => (props.width ? props.width : "100%")};
  background: ${(props: any) =>
    props.background ? props.background : "transparent"};
  height: 50px;
  align-items: center;
  justify-content: center;
  border-width: ${(props: any) => (props.border ? props.border : "0")};
  border-color: ${(props: any) =>
    props.borderColor ? props.borderColor : Colors.black};
  border-radius: ${(props: any) =>
    props.borderRadius ? props.borderRadius : 0};
  padding: 0;
  margin-top: ${(props: any) => (props.mt ? props.mt : 0)};
  margin-bottom: ${(props: any) => (props.mb ? props.mb : 0)};
  margin-right: ${(props: any) => (props.mr ? props.mr : 0)};
  margin-left: ${(props: any) => (props.ml ? props.ml : 0)};
`;

export const ButtonText: React.FC<ButtonTextProps> = styled.Text`
  font-size: ${(props: any) => (props.size ? props.size : "14px")};
  color: ${(props: any) => (props.color ? props.color : Colors.white)};
  padding: 0;
  margin: 0;
`;
