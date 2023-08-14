import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { OutlineButton, SolidButton } from "./src/components/buttons";
import { Colors } from "./src/utils/shared/colors";
import { useState } from "react";
import { PhoneNumberInput } from "./src/components/inputs";
import OtpInput from "./src/components/inputs/OTPInput";
import GetStarted from "./src/screens/get-started/GetStarted";
import Signup from "./src/screens/signup/Signup";
import Verification from "./src/screens/verification/Verification";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handlePress = () => {
    setIsLoading(!isLoading);
  };
  return (
    <Verification />
    // <Signup />
    // <GetStarted />
  );
}
