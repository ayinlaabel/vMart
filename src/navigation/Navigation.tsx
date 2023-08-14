import React from "react";
import { Stack, appStackNavigatorProps, routes } from "./routes";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator {...appStackNavigatorProps}>
        {routes.map((routeConfig: any) => (
          <Stack.Screen key={routeConfig} {...routeConfig} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
