export interface ContainerProps {
  children: any;
  background?: string;
  px?: string;
  py?: string;
}

export interface TextProps {
  children: any;
  color?: string;
  size?: string;
  textTransform?: String;
  fontWeight?: String;
  width?: string;
}

export interface ImageContainerProps {
  children: any;
  width?: String;
  height?: number;
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
}
