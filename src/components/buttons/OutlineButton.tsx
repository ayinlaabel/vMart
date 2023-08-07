import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Button, ButtonText, IconContainer } from "./styles";
import { ButtonProps } from "./interface";
import Icon from "react-native-vector-icons/FontAwesome";

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
  icon,
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

export default OutlineButton;
