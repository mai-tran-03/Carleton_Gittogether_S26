import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import { useState } from "react";

export default function EnterName({ navigation, route }) {
  const [name, setName] = useState("");

  const { pet } = route.params || {};

  const petImages = {
    Dog: require("../assets/dog.png"),
    Cat: require("../assets/cat.png"),
    Cow: require("../assets/cow.png"),
    Fish: require("../assets/fish.png"),
    Panda: require("../assets/panda.png"),
    Bunny: require("../assets/bunny.png"),
    Penguin: require("../assets/penguin.png"),
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Give your {pet} a name:
      </Text>

      <Image
        source={petImages[pet]}
        style={{ width: 150, height: 150, marginBottom: 20 }}
      />

      <TextInput
        placeholder="Enter your pet's name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
          borderRadius: 5,
        }}
      />

      <Button
        title="Next"
        onPress={() =>
          navigation.navigate("PetHome", {
            pet,
            name
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
  },
});