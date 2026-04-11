import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

export default function FeedScreen() {
  const [progress, setProgress] = useState(10);
  const handleSelect = (foodType) => {
    console.log(`Feeding: ${foodType}`);
    setProgress((prev) => (prev + 10 > 100 ? 100 : prev + 10));
  };

  return (
    
    <View style={styles.container}>
        {/* <Text style={styles.title}>Feed Me</Text> */}

        {/* <View style={[{ marginTop: 50 }]}> */}
            <Image 
                source={require("../assets/dog.png")}
                style={styles.petImage}
            />
        {/* </View> */}

        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Pet's hunger: {progress}%</Text>
          <View style={styles.barBackground}>
            <View style={[styles.barFilling, { width: `${progress}%` }]} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
            <Text style={styles.subtitle}>Select food</Text>
            <Button title="Dog Kibble" onPress={() => handleSelect('Kibble')} />
            <Button title="Tuna" onPress={() => handleSelect('Tuna')} />
            <Button title="Grass" onPress={() => handleSelect('Grass')} />
            <Button title="Fish Flakes" onPress={() => handleSelect('Fish')} />
            <Button title="Bamboo" onPress={() => handleSelect('Bamboo')} />
            <Button title="Carrot" onPress={() => handleSelect('Carrot')} />
            <Button title="Krill" onPress={() => handleSelect('Krill')} />
            <Button title="Water" onPress={() => handleSelect('Water')} />
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
    marginBottom: 20,
  },
  statusContainer: {
    width: '90%',
    marginVertical: 20,
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
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
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
    gap: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  }
});