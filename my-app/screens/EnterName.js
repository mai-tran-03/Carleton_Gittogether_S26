import {
  View, Text, TextInput, Button, Image, StyleSheet
} from "react-native";
import { useState } from "react";
import { usePet } from '../PetContext';
import { pets } from '../PetImagesDict';

export default function EnterName({ navigation }) {
  const { selectedPet, setPetName, petName } = usePet();
  const [name, setName] = useState(petName || "");
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
      <Text style={styles.title}>Give your {curPetData.animal} a name:</Text>

      <Image
        source={curPetData.image}
        style={styles.petImage}
      />

      <TextInput
        placeholder="Your pet's name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Button
        title="Next"
        onPress={handleNext}
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
  petImage: {
    width: 100,
    height: 180,
    resizeMode: "contain",
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: '#ccc'
  }
});