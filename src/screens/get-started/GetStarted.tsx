import React, { useState } from "react";
import {
  FixContainer,
  ImageContainer,
  ImageTag,
  Paragraph,
} from "../../utils/shared/styles";
import { Colors } from "../../utils/shared/colors";
import { Image, SafeAreaView, View } from "react-native";
import { getStartedImage } from "../../assets";
import { SolidButton } from "../../components/buttons";
import { ButtonContainer } from "./styles";

const GetStarted = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handlePress = () => {
    setIsLoading(!isLoading);
  };
  return (
    <FixContainer background={Colors.brandColor} px="30px" py="60px">
      <SafeAreaView>
        <Paragraph
          width="75%"
          size="34px"
          fontWeight="600"
          textTransform="capitalize"
          color={Colors.white}
        >
          Buy everything you want
        </Paragraph>
        <ImageContainer height={450} mt="20px">
          <ImageTag source={getStartedImage} resizeMode="cover" />
        </ImageContainer>
        <ButtonContainer height={250} position="relative" bottom="0px">
          <SolidButton
            title="Get Started"
            onPress={handlePress}
            background={Colors.primaryColor}
            borderRadius="50px"
            isLoading={isLoading}
          />
        </ButtonContainer>
      </SafeAreaView>
    </FixContainer>
  );
};

export default GetStarted;
