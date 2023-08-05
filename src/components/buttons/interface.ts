export interface ButtonProps {
  width?: String;
  height?: String;
  background?: String;
  border?: String;
  borderRadius?: String;
  borderColor?: String;
  children?: any;
  title?: String;
  color?: String;
  size?: String;
  activeOpacity?: any;
  mt?: String;
  mb?: String;
  mr?: String;
  ml?: String;
  isLoading?: Boolean;
  onPress: (props: any) => any;
}

export interface ButtonTextProps {
  // title: String;
  color?: String;
  size?: String;
  children?: any;
}
