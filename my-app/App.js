import * as React from "react";
import { ActivityIndicator, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PetProvider, usePet } from "./PetContext";

import EnterName from "./screens/EnterName";
import SelectPet from "./screens/SelectPet";
import PetHome from "./screens/PetHome";
import PetStore from "./screens/PetStore";
import FeedPet from "./screens/FeedPet";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const { selectedPet, petName, isHydrated } = usePet();

  if (!isHydrated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const initialRoute = selectedPet
    ? (petName ? "PetHome" : "EnterName")
    : "SelectPet";

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
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

        <Stack.Screen
          name="PetStore"
          component={PetStore}
          options={{ title: '' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <PetProvider>
      <RootNavigator />
    </PetProvider>
  );
}