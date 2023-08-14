import React from "react";
import { ButtonProps, FloatButtonProps } from "./interface";
import { ButtonText, FloatButtonContainer, IconContainer } from "./styles";
import { ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const FloatButton = ({
  position,
  top,
  bottom,
  left,
  right,
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
}: FloatButtonProps) => {
  return (
    <FloatButtonContainer
      position={position}
      top={top}
      bottom={bottom}
      right={right}
      left={left}
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
    </FloatButtonContainer>
  );
};

export default FloatButton;
