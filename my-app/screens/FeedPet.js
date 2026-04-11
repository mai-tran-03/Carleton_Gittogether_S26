// Feed pet page - See your pet's hunger level and start a timer to feed them

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { usePet } from '../PetContext';

export default function FeedScreen() {
  const {
    petName,
    hunger,
    setHunger,
  } = usePet();

  const curFoods = [
    { name: "cookie", time: 10 },
    { name: "strawberry", time: 20 },
    { name: "pizza", time: 30 },
    { name: "sushi", time: 60 },
    { name: "pie", time: 90 },
  ];

  const [canFeed, setCanFeed] = useState(true);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [activeFood, setActiveFood] = useState(null);
  const [timer, setTimer] = useState(0);
  const intervalRef = React.useRef(null);

  useEffect(() => {
    if (!canFeed && cooldownSeconds > 0) {
      const timer = setTimeout(() => {
        setCooldownSeconds(cooldownSeconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (cooldownSeconds === 0 && !canFeed) {
      setCanFeed(true);
    }
  }, [cooldownSeconds, canFeed]);

  const startFeedTimer = (food) => {
    if (intervalRef.current) return;

    setActiveFood(food);
    setTimer(5); // 5 seconds for demo purposes | food.time * 60 for real time

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;

          setHunger((prevHunger) => Math.min(100, prevHunger + food.time));

          setActiveFood(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Feed {petName}</Text>

      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>{petName}'s hunger: {hunger}%</Text>
        <View style={styles.barBackground}>
          <View style={[styles.barFilling, { width: `${hunger}%` }]} />
        </View>
      </View>

      <View style={styles.grid}>
        {curFoods.map((food) => (
          <View key={food.name} style={styles.row}>
            
            {/* Timer button */}
            <TouchableOpacity
              style={[
                styles.foodButton,
                activeFood?.name === food.name && styles.activeFoodButton,
              ]}
              onPress={() => startFeedTimer(food)}
            >
              <Text style={styles.foodButtonText}>
                {activeFood?.name === food.name ? `${timer}s` : `${food.time} minutes`}
              </Text>
            </TouchableOpacity>

             {/* Food image and name  */}
            <View style={styles.foodInfo}>
               <Image
                  source={
                    food.name === "strawberry"
                      ? require("../assets/strawberry.png")
                      : food.name === "sushi"
                      ? require("../assets/sushi.png")
                      : food.name === "pizza"
                      ? require("../assets/pizza.png")
                      : food.name === "cookie"
                      ? require("../assets/cookie.png")
                      : require("../assets/pie.png")
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
    marginBottom: 20,
  },

  statusContainer: {
    width: '80%',
    marginVertical: 20,
  },

  statusLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: "#022B3A"
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
    paddingVertical: 18,
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

  // when timer is on
  activeFoodButton: {
    borderWidth: 3,
    borderColor: "#022B3A", 
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    marginVertical: 10,
    marginLeft: -12,
    gap: 12,
  },

  foodInfo: {
    alignItems: "center",
    justifyContent: "center",
  },

  foodImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },

  foodLabel: {
    fontSize: 14,
    color: "#022B3A",
    marginTop: -3,
  },
  
  buttonWrapper: {
    width: "45%",
    alignItems: "center",
    margin: 5,
  },

});