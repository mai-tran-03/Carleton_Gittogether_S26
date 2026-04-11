// Pet home page - see you pet's hunger level and click to feed them

import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity
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
          left: 270,
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
          left: 258,
          resizeMode: "contain",
          zIndex: 998,
        }}
      />
      <Text
          style={{
            position: "absolute",
            top: 145,
            left: 308,
            zIndex: 999,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
            I love you!
          </Text>
        </>
      )}

      {hunger < 40 && (
        <>
          <Image
            source={require("../assets/speech.png")}
            style={{
              width: 150,
              height: 200,
              position: "absolute",
              top: 70,
              left: 258,
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
              left: 258,
              resizeMode: "contain",
              zIndex: 999,
            }}
          />

          <Text
            style={{
              position: "absolute",
              top: 145,
              left: 308,
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
            {petName}'s hunger: {hunger ?? 0}%
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

    

      <TouchableOpacity
        onPress={() => navigation.navigate("FeedPet")}
        style={styles.foodButton}
      >
        <Text style={styles.buttonText}>Feed pet</Text>
      </TouchableOpacity>
      
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
    fontSize: 40,
    color: "#022B3A",
    textAlign: "center",
    paddingVertical: 10,
    fontWeight: "bold",
  },

  petImage: {
    width: 250,
    height: 250,
    padding: 20,
    resizeMode: "contain",
    borderColor: "white",
    borderWidth: 2,
    resizeMode: "contain",
    borderRadius: 200,
    backgroundColor: "#30638E",
    marginTop: 20,
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
    color: "#022B3A",
  },

  barBackground: {
    height: 20,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "white",
  },

  barFilling: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },


  foodButton: {
    height: 60,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E1E5F2",
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    marginTop: 50,
  },

  buttonText:{
    fontSize: 22,
    color: "#022B3A",
  }
});