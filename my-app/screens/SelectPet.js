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
      <Text style={styles.title}>Select your pet:</Text>

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
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  petName: {
    marginTop: 5,
    fontSize: 14,
  },
});