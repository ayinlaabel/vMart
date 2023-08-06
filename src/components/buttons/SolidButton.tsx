import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Colors } from "../../utils/shared/colors";
import { ButtonProps } from "./interface";
import { Button, ButtonText } from "./styles";

const SolidButton = ({
  width,
  height,
  size,
  color,
  border,
  borderColor,
  borderRadius,
  background,
  title,
  mt,
  mb,
  mr,
  ml,
  isLoading,
  onPress,
}: ButtonProps) => {
  return (
    <Button
      ml={ml}
      mr={mr}
      mt={mt}
      mb={mb}
      border={border}
      borderColor={borderColor}
      width={width}
      borderRadius={borderRadius}
      background={background}
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

export default SolidButton;
