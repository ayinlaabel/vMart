export interface ButtonProps {
  width?: string;
  height?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  borderColor?: string;
  icon?: any;
  children?: any;
  title?: string;
  color?: string;
  size?: string;
  activeOpacity?: any;
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  disabled?: Boolean;
  isLoading?: Boolean;
  onPress: (props: any) => any;
}

export interface ButtonTextProps {
  // title: string;
  color?: string;
  size?: string;
  children?: any;
}
