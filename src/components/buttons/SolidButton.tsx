import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Colors } from "../../utils/shared/colors";
import { ButtonProps } from "./interface";
import { Button, ButtonText, IconContainer } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

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
  icon,
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
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : icon ? (
        <>
          <IconContainer>
            <Icon name={icon} size={20} />
          </IconContainer>
          <ButtonText size={size} color={color}>
            {title}
          </ButtonText>
        </>
      ) : (
        <ButtonText size={size} color={color}>
          {title}
        </ButtonText>
      )}
    </Button>
  );
};

export default SolidButton;
