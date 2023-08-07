import styled from "styled-components/native";
import { Colors } from "./colors";
import {
  ContainerProps,
  EmptyContainerProps,
  ImageContainerProps,
  TextProps,
} from "./interface";
import React from "react";
import { hp, wp } from "./responsive-dimension";

export const FixContainer: React.FC<ContainerProps> = styled.View`
  flex: 1;
  background: ${(props: any) =>
    props.background ? props.background : Colors.white};
  padding-left: ${(props: any) => (props.px ? props.px : "10px")};
  padding-right: ${(props: any) => (props.px ? props.px : "10px")};
  padding-top: ${(props: any) => (props.py ? props.py : "10px")};
  padding-bottom: ${(props: any) => (props.py ? props.py : "10px")};
`;

export const Container: React.FC<ContainerProps> = styled.View`
  background: ${(props: any) =>
    props.background ? props.background : "transparent"};
  width: ${(props: any) => (props.width ? wp(props.width) : "100%")};
  height: ${(props: any) => (props.height ? hp(props.height) : "100%")};
  margin-top: ${(props: any) => (props.mt ? props.mt : "0px")};
  margin-bottom: ${(props: any) => (props.mb ? props.mb : "0px")};
  margin-right: ${(props: any) => (props.mr ? props.mr : "0px")};
  margin-left: ${(props: any) => (props.ml ? props.ml : "0px")};
  align-items: center;
  justify-content: center;
`;

export const EmptyContainer: React.FC<EmptyContainerProps> = styled.View`
  width: ${(props: any) => (props.width ? props.width : "100%")};
  height: ${(props: any) => (props.height ? props.height : "100px")};
`;

export const Paragraph: React.FC<TextProps> = styled.Text`
  font-size: ${(props: any) => (props.size ? props.size : "16px")};
  color: ${(props: any) => (props.color ? props.color : Colors.black)};
  ${(props: any) => (props.width ? `width: ${props.width}` : null)};
  text-transform: ${(props: any) =>
    props.textTransform ? props.textTransform : "none"};
  font-weight: ${(props: any) => (props.fontWeight ? props.fontWeight : "300")};
`;

export const ImageContainer: React.FC<ImageContainerProps> = styled.View`
  width: ${(props: any) => (props.width ? props.width : "100%")};
  height: ${(props: any) => (props.height ? hp(props.height) : "100%")};
  margin-top: ${(props: any) => (props.mt ? props.mt : "0px")};
  margin-bottom: ${(props: any) => (props.mb ? props.mb : "0px")};
  margin-right: ${(props: any) => (props.mr ? props.mr : "0px")};
  margin-left: ${(props: any) => (props.ml ? props.ml : "0px")};
  overflow: hidden;
`;

export const ImageTag = styled.Image`
  width: 100%;
  height: 100%;
`;
