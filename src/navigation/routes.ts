import React from "react";
import {
  RouteConfig,
  DefaultNavigatorOptions,
  ParamListBase,
  StackNavigationState,
} from "@react-navigation/core";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationEventMap,
  StackNavigationProp,
} from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

//Imported Screens
import GetStarted from "../screens/get-started/GetStarted";
import Signup from "../screens/signup/Signup";
import Verification from "../screens/verification/Verification";

export type AppStackParamsList = {
  GetStarted: undefined;
  SignUp: undefined;
  Verification: undefined;
};

type StackNavigatorOptions<ParamList extends ParamListBase> =
  DefaultNavigatorOptions<
    ParamList,
    StackNavigationState<ParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >;

type StackRoutesType<ParamList extends ParamListBase> = Array<
  RouteConfig<
    ParamList,
    keyof ParamList,
    StackNavigationState<ParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >
>;

type AppStackRoutesType = StackRoutesType<AppStackParamsList>;

export const appStackNavigatorProps: Omit<
  StackNavigatorOptions<AppStackParamsList>,
  "children"
> = {
  initialRouteName: "GetStarted",
  screenOptions: {
    headerShown: false,
    cardOverlayEnabled: true,
    gestureEnabled: false,
  },
};

export const Stack = createStackNavigator<AppStackParamsList>();

export const routes: AppStackRoutesType = [
  {
    name: "GetStarted",
    component: GetStarted,
  },
  {
    name: "SignUp",
    component: Signup,
  },
  {
    name: "Verification",
    component: Verification,
  },
];
