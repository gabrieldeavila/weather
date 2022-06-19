import React, { lazy, Suspense } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { LoadingIndicator } from "../base/components";
import { navigationRef } from "./RootNavigation";

const Home = lazy(() => import("../screens/home"));
const MoreDays = lazy(() => import("../screens/moreDays"));

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MoreDays" component={MoreDays} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default Routes;
