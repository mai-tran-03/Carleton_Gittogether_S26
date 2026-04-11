// Select pet page - user selects a pet and continues to enter name page

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { usePet } from '../PetContext';
import { pets } from '../PetImagesDict';

export default function SelectPet({ navigation }) {
  const { setSelectedPet } = usePet();

  const handleSelect = (pet) => {
    setSelectedPet(pet);
    navigation.navigate("EnterName", {
      pet: pet.animal,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Study Buddy</Text>

      <View style={styles.grid}>
        {pets.map((pet, index) => (
          <TouchableOpacity
            key={index}
            style={styles.petCard}
            onPress={() => handleSelect(pet.animal)}
          >
            <Image source={pet.gif} style={styles.petImage} />
            <Text style={styles.petName}>{pet.animal}</Text>
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
    backgroundColor: "#BFDBF7",
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
    width: 130,
    height: 130,
    padding: 20,
    borderColor: "white",
    borderWidth: 2,
    resizeMode: "contain",
    borderRadius: 70,
    backgroundColor: "#30638E"
  },
  petName: {
    marginTop: 5,
    fontSize: 14,
  },
});