import React from "react";
import styled from "styled-components/native";
import { ButtonContainerProps } from "./interface";
import { Colors } from "../../utils/shared/colors";
import { hp } from "../../utils/shared/responsive-dimension";

export const ButtonContainer: React.FC<ButtonContainerProps> = styled.View`
  width: 100%;
  height: ${(props: any) => (props.height ? hp(props.height) : "100%")};
  justify-content: flex-end;
  ${(props: any) => (props.position ? `position: ${props.position}` : null)};
  ${(props: any) => (props.top ? `top: ${props.top}` : null)};
  ${(props: any) => (props.bottom ? `bottom: ${props.bottom}` : null)};
  ${(props: any) => (props.right ? `right: ${props.right}` : null)};
  ${(props: any) => (props.left ? `left: ${props.left}` : null)};
`;
