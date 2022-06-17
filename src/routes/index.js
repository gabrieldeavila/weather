import React, { lazy, Suspense } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { Container } from "../base/style";

const Home = lazy(() => import("../screens/home"));

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default Routes;
