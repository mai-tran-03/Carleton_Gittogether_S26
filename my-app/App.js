import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PetProvider } from "./PetContext";

import EnterName from "./screens/EnterName";
import SelectPet from "./screens/SelectPet";
import PetHome from "./screens/PetHome";
import FeedPet from "./screens/FeedPet";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PetProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SelectPet"
        >

          <Stack.Screen
            name="SelectPet"
            component={SelectPet}
            options={{ title: '' }}
          />

          <Stack.Screen
            name="EnterName"
            component={EnterName}
            options={{ title: '' }}
          />

          <Stack.Screen
            name="PetHome"
            component={PetHome}
            options={{ title: '' }}
          />

          <Stack.Screen
            name="FeedPet"
            component={FeedPet}
            options={{ title: '' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </PetProvider>
  );
}