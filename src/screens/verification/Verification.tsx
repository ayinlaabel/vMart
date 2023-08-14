import React from "react";
import {
  Container,
  FixContainer,
  Paragraph,
  TextLink,
} from "../../utils/shared/styles";
import { SafeAreaView } from "react-native";
import { Colors } from "../../utils/shared/colors";
import OtpInput from "../../components/inputs/OTPInput";
import FloatButton from "../../components/buttons/FloatButton";
import { ButtonContainer } from "../get-started/styles";
import { SolidButton } from "../../components/buttons";

const Verification = () => {
  const handleChange = () => {};
  return (
    <FixContainer px="20px">
      <SafeAreaView />
      <Container mt="150px">
        <Paragraph size="24px" fontWeight="bold">
          Verify your mobile number
        </Paragraph>
        <Paragraph size="14px" fontWeight="300" color={Colors.offWhite}>
          Enter the 4-digit code sent to
        </Paragraph>
        <Paragraph size="14px" color={Colors.offWhite} fontWeight="700">
          +234 90 **** *** 322
        </Paragraph>
        <Container height={100} mt="30px">
          <OtpInput length={4} onChange={handleChange} />
        </Container>
        <TextLink onPress={handleChange} activeOpacity={0.9}>
          <Paragraph color={Colors.redColor} fontWeight="700">
            Resend
          </Paragraph>
        </TextLink>
        <ButtonContainer height={460} position="relative" bottom="0px">
          <SolidButton
            title="Confirm"
            background={Colors.brandColor}
            onPress={handleChange}
            borderRadius="50px"
            size="16px"
          />
        </ButtonContainer>
      </Container>
    </FixContainer>
  );
};

export default Verification;
