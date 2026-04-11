import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function EnterName({ navigation, route }) {
  const { pet, name } = route.params;

  const progress = 60; // static value (food bar does nothing)

  const petImages = {
    Dog: require("../assets/dog.png"),
    Cat: require("../assets/cat.png"),
    Cow: require("../assets/cow.png"),
    Fish: require("../assets/fish.png"),
    Panda: require("../assets/panda.png"),
    Bunny: require("../assets/bunny.png"),
    Penguin: require("../assets/penguin.png"),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/cat.gif")}
          style={{ width: 250, height: 300, resizeMode: "contain" }}
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

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Button
          title="Go to Store"
          onPress={() => navigation.navigate("PetStore")}
        />
      </View>

      {/* This still navigates to feeding page */}
      <View style={{ marginTop: 10 }}>
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
    backgroundColor: "lightblue",
  },
  title: {
    fontSize: 24,
    color: "blue",
    textAlign: "center",
    paddingVertical: 40,
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