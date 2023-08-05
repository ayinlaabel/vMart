import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { OutlineButton, SolidButton } from "./src/components/buttons";
import { Colors } from "./src/utils/shared/colors";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handlePress = () => {
    setIsLoading(!isLoading);
  };
  return (
    <View>
      <OutlineButton
        mt="50px"
        border="2px"
        borderColor={Colors.brandColor}
        borderRadius="50px"
        title="Submit"
        color={Colors.brandColor}
        size="18px"
        isLoading={isLoading}
        onPress={handlePress}
      />
      <SolidButton
        width="100px"
        mt="10px"
        title="Submit"
        size="20px"
        borderRadius="50px"
        background={Colors.brandColor}
        isLoading={isLoading}
        onPress={handlePress}
      />
    </View>
  );
}
