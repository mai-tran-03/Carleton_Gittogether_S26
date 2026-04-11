import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";

import { usePet } from "../PetContext";
import { pets } from "../PetImagesDict";

export default function EnterName({ navigation }) {
  const { selectedPet, petName, hunger } = usePet();

  const curPetData = pets.find(
    (pet) => pet.animal === selectedPet
  );

  return (
    <View style={styles.container}>

      
{hunger >= 90 && (
  <>
    <Image
      source={require("../assets/heart.gif")}
      style={{
        width: 35,
        height: 100,
        position: "absolute",
        top: 110,
        left: 290,
        resizeMode: "contain",
        zIndex: 999,
      }}
    />

    <Image
      source={require("../assets/speech.png")}
      style={{
        width: 150,
        height: 200,
        position: "absolute",
        top: 70,
        left: 278,
        resizeMode: "contain",
        zIndex: 998,
      }}
    />
    <Text
            style={{
              position: "absolute",
              top: 145,
              left: 328,
              zIndex: 999,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            I love you!
          </Text>
  </>
)}

      {hunger < 20 && (
        <>
          <Image
            source={require("../assets/speech.png")}
            style={{
              width: 150,
              height: 200,
              position: "absolute",
              top: 70,
              left: 278,
              resizeMode: "contain",
              zIndex: 998,
            }}
          />

          <Image
            source={require("../assets/sad.png")}
            style={{
              width: 50,
              height: 40,
              position: "absolute",
              top: 138,
              left: 278,
              resizeMode: "contain",
              zIndex: 999,
            }}
          />

          <Text
            style={{
              position: "absolute",
              top: 145,
              left: 328,
              zIndex: 999,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Feed me!
          </Text>
        </>
      )}

      <Text style={styles.title}>
        {petName}
      </Text>

      <View style={{ alignItems: "center" }}>
        <Image
          source={curPetData.gif}
          style={styles.petImage}
        />

       
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>
            Pet's hunger: {hunger ?? 0}%
          </Text>

          <View style={styles.barBackground}>
            <View
              style={[
                styles.barFilling,
                {
                  width: `${Math.max(
                    0,
                    Math.min(hunger ?? 0, 100)
                  )}%`,
                },
              ]}
            />
          </View>
        </View>
      </View>

      <Image
        source={require("../assets/gen_food.png")}
        style={styles.foodImage}
      />

      <View style={styles.foodButton}>
        <Button
          title="Feed Pet"
          onPress={() => navigation.navigate("FeedPet")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFDBF7",
    paddingTop: 60,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    color: "#D1495B",
    textAlign: "center",
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: "#E1E5F2",
    padding: 40,
    backgroundColor: "#E1E5F2",
    borderRadius: 20,
    fontWeight: "bold",
    
  },

  petImage: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },

  statusContainer: {
    width: 250,
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
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },

  barFilling: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },

  foodImage: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },

  foodButton: {
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E1E5F2",
    borderRadius: 10,
  },
});