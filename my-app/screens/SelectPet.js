import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const pets = [
  { name: "Dog", image: require("../assets/dog.png") },
  { name: "Cat", image: require("../assets/cat.png") },
  { name: "Cow", image: require("../assets/cow.png") },
  { name: "Fish", image: require("../assets/fish.png") },
  { name: "Panda", image: require("../assets/panda.png") },
  { name: "Bunny", image: require("../assets/bunny.png") },
  { name: "Penguin", image: require("../assets/penguin.png") },
];

export default function SelectPet({ navigation }) {
  const handleSelect = (pet) => {
  navigation.navigate("EnterName", {
    pet: pet.name,
  });
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select your pet:</Text>

      <View style={styles.grid}>
        {pets.map((pet, index) => (
          <TouchableOpacity
            key={index}
            style={styles.petCard}
            onPress={() => handleSelect(pet.name)}
          >
            <Image source={pet.image} style={styles.petImage} />
            <Text style={styles.petName}>{pet.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  petCard: {
    width: "45%",
    alignItems: "center",
    marginVertical: 15,
  },

  petImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  petName: {
    marginTop: 5,
    fontSize: 14,
  },
});