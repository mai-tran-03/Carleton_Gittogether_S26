import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { usePet } from '../PetContext';
import { pets } from '../PetImagesDict';
import { petFoods } from '../PetFoodList';

export default function FeedScreen() {
  const { selectedPet, petName } = usePet();
  const curPetData = pets.find((pet) => pet.animal === selectedPet);
  const curFoods = [...(petFoods[selectedPet] || []), "water"];
  
  const [progress, setProgress] = useState(10);

  const handleSelect = (food) => {
    console.log(`Feeding ${petName} some ${food}`);
    setProgress((prev) => (prev + 10 > 100 ? 100 : prev + 10));
  };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Feed {petName}</Text>

      <Image
        source={curPetData.image}
        style={styles.petImage}
      />

      <View style={styles.grid}>
        {curFoods.map((food) => (
          <View key={food} style={styles.buttonWrapper}>
            <Button
              title={food}
              onPress={() => handleSelect(food)}
            />
          </View>
        ))}
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>{petName}'s hunger: {progress}%</Text>
        <View style={styles.barBackground}>
          <View style={[styles.barFilling, { width: `${progress}%` }]} />
        </View>
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
  statusContainer: {
    width: '80%',
    marginVertical: 20,
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  barBackground: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  barFilling: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  petImage: {
    width: 150,
    height: 180,
    resizeMode: "contain",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  buttonWrapper: {
    width: "45%",
    alignItems: "center",
    margin: 5,
  },
});