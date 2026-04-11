import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { usePet } from '../PetContext';
import { pets } from '../PetImagesDict';

export default function FeedScreen() {
  const { selectedPet, petName, hunger, setHunger } = usePet();
  const curPetData = pets.find((pet) => pet.animal === selectedPet);

  const [progress, setProgress] = useState(hunger);

  // const handleSelect = (food) => {
  //   console.log(
  //     `Feeding ${petName} some ${food.name} for ${food.time} minutes`
  //   );

  //   setProgress((prev) => (prev + food.time > 100 ? 100 : prev + food.time));
  // };

  const [lastFeedTime, setLastFeedTime] = useState(null);
  const [canFeed, setCanFeed] = useState(true);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  
  // const COOLDOWN_TIME = 30000; 

  // useEffect(() => {
  //   if (!canFeed && cooldownSeconds > 0) {
  //     const timer = setTimeout(() => {
  //       setCooldownSeconds(cooldownSeconds - 1);
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   } else if (cooldownSeconds === 0 && !canFeed) {
  //     setCanFeed(true);
  //   }
  // }, [cooldownSeconds, canFeed]);

  // const handleSelect = (food) => {
  //   if (!canFeed) return;

  //   console.log(
  //     `Feeding ${petName} some ${food.name} for ${food.time} minutes`
  //   );

  //   const newProgress = progress + food.time > 100 ? 100 : progress + food.time;
  //   setProgress(newProgress);
  //   setHunger(newProgress); // Update context
  //   setCanFeed(false);
  //   setLastFeedTime(Date.now());
  //   setCooldownSeconds(COOLDOWN_TIME / 1000);
  // };



  const petFoods = {
    all: [
      { name: "tomato", time: 10 },
      { name: "grapes", time: 20 },
      { name: "pizza", time: 30 },
      { name: "sushi", time: 60 },
      { name: "cake", time: 90 },
    ],
  };
  const curFoods = petFoods.all;

  return (

    <View style={styles.container}>

      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>{petName}'s hunger: {progress}%</Text>
        <View style={styles.barBackground}>
          <View style={[styles.barFilling, { width: `${progress}%` }]} />
        </View>
      </View>


      <Text style={styles.title}>Start a timer to feed {petName}:</Text>
      {/* {!canFeed && (
        <Text style={styles.cooldownText}>
          Wait {cooldownSeconds}s before feeding again
        </Text>
      )} */}

      <View style={styles.grid}>
        {curFoods.map((food) => (
          <View key={food.name} style={styles.row}>
            
            {/* Timer button */}
            <TouchableOpacity
              style={[
                styles.foodButton,
                // !canFeed && styles.foodButtonDisabled,
              ]}
              onPress={() => handleSelect(food)}
            >
              <Text style={styles.foodButtonText}>
                {food.time} minutes
              </Text>
            </TouchableOpacity>

             {/* Food image and name  */}
            <View style={styles.foodInfo}>
               <Image
                  source={
                    food.name === "grapes"
                      ? require("../assets/grapes.png")
                      : food.name === "sushi"
                      ? require("../assets/sushi.png")
                      : food.name === "pizza"
                      ? require("../assets/pizza.png")
                      : food.name === "tomato"
                      ? require("../assets/tomato.png")
                      : require("../assets/cake.png")
                  }
                  style={styles.foodImage}
                />
              <Text style={styles.foodLabel}>{food.name}</Text>
            </View>
            
          </View>
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
    width: "100%",
    alignItems: "center",
  },

  foodButton: {
    backgroundColor: "#1F7A8C", 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: "80%",
    marginVertical: 8,
    alignItems: "center",
  },

  foodButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10,
  },

  foodInfo: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  foodImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },

  foodLabel: {
    fontSize: 14,
    color: "#022B3A",
    marginTop: -5,
  },
  
  buttonWrapper: {
    width: "45%",
    alignItems: "center",
    margin: 5,
  },

  cooldownText: {
    fontSize: 14,
    color: '#d32f2f',
    marginBottom: 10,
    fontWeight: '600',
  },
  foodButtonDisabled: {
    opacity: 0.5,
    backgroundColor: '#999',
  },
});