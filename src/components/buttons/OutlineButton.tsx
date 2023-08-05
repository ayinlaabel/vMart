import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Button, ButtonText } from "./styles";
import { ButtonProps } from "./interface";

const OutlineButton = ({
  border,
  borderRadius,
  title,
  width,
  borderColor,
  height,
  size,
  color,
  mt,
  mb,
  mr,
  ml,
  isLoading,
  onPress,
}: ButtonProps) => {
  return (
    <Button
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      width={width}
      border={border}
      borderRadius={borderRadius}
      borderColor={borderColor}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <ButtonText size={size} color={color}>
        {isLoading ? <ActivityIndicator /> : null}
        {title}
      </ButtonText>
    </Button>
  );
};

export default OutlineButton;
