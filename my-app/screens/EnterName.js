// Enter name page - user inputs their pet's name and continues to pet home page

import {View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { usePet } from '../PetContext';
import { pets } from '../PetImagesDict';

export default function EnterName({ navigation }) {
  const [name, setName] = useState("");

  const { selectedPet, setPetName } = usePet();
  const curPetData = pets.find((pet) => pet.animal === selectedPet);

  const handleNext = () => {
    if (name.trim() === "") {
      alert("Please give your pet a name!");
      return;
    }
    setPetName(name);
    navigation.navigate("PetHome");
  };

  if (!curPetData) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give your {curPetData.animal} a name</Text>

      <Image
        source={curPetData.gif}
        style={styles.petImage}
      />

      <View style={styles.inputButton}>
        <TextInput
          placeholder="Your pet's name"
          value={name}
          onChangeText={setName}
          style={styles.inputText}
        />
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "#BFDBF7",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
  },
  petImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    borderColor: "white",
    borderWidth: 2,
    resizeMode: "contain",
    borderRadius: 400,
    backgroundColor: "#30638E",
    padding: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: "white"
  },

  inputButton: {
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E1E5F2",
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 2,
    marginTop: 40,
    marginBottom: 20,
  },

  inputText: {
    fontSize: 22,
    color: "#022B3A",
    width: "100%",
    textAlign: "center",
  },
  
  continueText: {
    fontSize: 18,
    color: "#30638E",
  },
});