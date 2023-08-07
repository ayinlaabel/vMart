export interface ContainerProps {
  children: any;
  background?: string;
  px?: string;
  py?: string;
  width?: number;
  height?: number;
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
}

export interface TextProps {
  children: any;
  color?: string;
  size?: string;
  textTransform?: string;
  fontWeight?: string;
  width?: string;
}

export interface ImageContainerProps {
  children: any;
  width?: string;
  height?: number;
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
}

export interface EmptyContainerProps {
  height?: string;
  width?: string;
}
