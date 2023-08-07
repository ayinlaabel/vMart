import styled from "styled-components/native";
import { designWidth, hp, wp } from "../../utils/shared/responsive-dimension";
import { ButtonProps, ButtonTextProps } from "./interface";
import { Colors } from "../../utils/shared/colors";
import { ButtonContainerProps } from "../../screens/get-started/interface";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
export const ButtonContainer = styled.TouchableOpacity``;
export const FloatingButtonContainer: React.FC<ButtonContainerProps>  = styled.View`
  width: 100%;
  height: ${(props: any) => (props.height ? hp(props.height) : "100%")};
  justify-content: flex-end;
  ${(props: any) => (props.position ? `position: ${props.position}` : null)};
  ${(props: any) => (props.top ? `top: ${props.top}` : null)};
  ${(props: any) => (props.bottom ? `bottom: ${props.bottom}` : null)};
  ${(props: any) => (props.right ? `right: ${props.right}` : null)};
  ${(props: any) => (props.left ? `left: ${props.left}` : null)};
`;
export const Button: React.FC<ButtonProps> = styled.TouchableOpacity`
  flex-direction: row;
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
  font-weight: 500;
  color: ${(props: any) => (props.color ? props.color : Colors.white)};
  padding: 0;
  margin: 0;
`;

export const IconContainer = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
