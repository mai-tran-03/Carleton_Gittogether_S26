import { Alert, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { usePet } from '../PetContext';
import { pets } from '../PetImagesDict';
import { supabase } from "../lib/supabase.js";

export default function SelectPet({ navigation }) {
  const { setSelectedPet } = usePet();

  const savePetSelection = async (pet) => {
    const { error } = await supabase.from("pet_selections").insert({
      user_id: "user_123",
      pet_id: pet.id,
      animal: pet.animal,
    });

    if (error) {
      console.error("Error saving pet:", error);
      Alert.alert("Error", "Could not save pet selection.");
      return false;
    }
    return true;
  };

  const handleSelect = async (pet) => {
    const saved = await savePetSelection(pet);
    if (!saved) return;

    setSelectedPet(pet.animal);
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
            onPress={() => handleSelect(pet)}
          >
            <Image source={pet.image} style={styles.petImage} />
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