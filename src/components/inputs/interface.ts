export interface PhoneNumberInputContainerProps {
  children?: any;
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  borderColor?: string;
}

export interface InputProps {
  width?: string;
  height?: string;
  placeholder?: string;
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  onChange: (props: any) => any;
}

export interface OtpInputProps {
  length: number;
  onChange: (props: any) => any;
}
