import {
  View, Text, Image, Button, StyleSheet
} from "react-native";
import { usePet } from '../PetContext';
import { pets } from '../PetImagesDict';

export default function EnterName({ navigation }) {
  const { selectedPet, petName } = usePet();
  const curPetData = pets.find((pet) => pet.animal === selectedPet);

  const progress = 60; // static value (food bar does nothing)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Say hi to {petName}!</Text>

      <View style={{ alignItems: "center" }}>
        <Image
          source={curPetData.gif}
          style={styles.petImage}
        />

        {/* Food bar (visual only, no interaction/state) */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>
            Pet's hunger: {progress}%
          </Text>

          <View style={styles.barBackground}>
            <View
              style={[styles.barFilling, { width: `${progress}%` }]}
            />
          </View>
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <Button
          title="Feed Pet"
          onPress={() => navigation.navigate("FeedPet")}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Button
          title="Go to Store"
          onPress={() => navigation.navigate("PetStore")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "blue",
    textAlign: "center",
    paddingVertical: 20,
  },
  petImage: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
  statusContainer: {
    width: "90%",
    marginVertical: 20,
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  barBackground: {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },
  barFilling: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
});