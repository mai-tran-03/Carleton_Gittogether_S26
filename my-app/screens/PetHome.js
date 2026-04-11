import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View, Image, Button } from 'react-native';


export default function EnterName({ navigation, route }) {
    const { pet, name} = route.params;

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
    <View >

    <Text style={{ fontSize: 24, color: 'blue',  textAlign: 'center', paddingVertical: 40}}>{name} </Text> 

    <View style={{ alignItems: 'center' }}>
    <Image
  source={petImages[pet]}
  style={{ width: 250, height: 300, resizeMode: "contain" }}
/>
    </View>


      <View style={{ alignItems: 'center' }}>
        <Button
          title="Go to Store"
          onPress={() => navigation.navigate("PetStore")}
        />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Button
          title="Feed Pet"
          onPress={() => navigation.navigate("FeedPet")}
        />
      </View>

    
    </View>
  );
}