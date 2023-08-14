import React from "react";
import {
  Container,
  EmptyContainer,
  FixContainer,
  Paragraph,
} from "../../utils/shared/styles";
import { SafeAreaView } from "react-native";
import { Colors } from "../../utils/shared/colors";
import { PhoneNumberInput } from "../../components/inputs";
import { OutlineButton, SolidButton } from "../../components/buttons";
import { FloatingButtonContainer } from "../../components/buttons/styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamsList } from "../../navigation/routes";

const Signup = () => {
  const { navigate } = useNavigation<StackNavigationProp<AppStackParamsList>>();
  const handlePress = () => {
    navigate("Verification");
  };

  return (
    <FixContainer px="20px">
      <SafeAreaView>
        <EmptyContainer />
        <Paragraph size="24px" fontWeight="700">
          Let's get started
        </Paragraph>
        <Paragraph color={Colors.offWhite}>
          we're going to send you a verification code to make sure its you.
        </Paragraph>
        <PhoneNumberInput mt="30px" mb="20px" />
        <SolidButton
          onPress={handlePress}
          title="Continue"
          background={Colors.brandColor}
          borderRadius="50px"
        />
        <Container
          height={80}
          mt="10px"
          mb="10px"
          items="center"
          justify="center"
        >
          <Paragraph fontWeight="600">or</Paragraph>
        </Container>
        <Container height={100}>
          <OutlineButton
            onPress={handlePress}
            title="Continue with Apple"
            color={Colors.black}
            borderColor={Colors.offWhite}
            border="1px"
            borderRadius="50px"
            icon="apple"
          />
          <OutlineButton
            onPress={handlePress}
            title="Continue with Google"
            color={Colors.black}
            borderColor={Colors.offWhite}
            border="1px"
            borderRadius="50px"
            icon="google"
            mt="10px"
          />
        </Container>
        <FloatingButtonContainer height={280}>
          <OutlineButton
            onPress={handlePress}
            title="Continue without signing in"
            color={Colors.black}
          />
        </FloatingButtonContainer>
      </SafeAreaView>
    </FixContainer>
  );
};

export default Signup;
