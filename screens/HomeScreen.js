// LoginScreen.js, HomeScreen.js, RecipeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackgroundImage from '../components/Background'; // Import the BackgroundImage component

const HomeScreen = () => {
  return (
    <BackgroundImage backgroundImage={require('../assets/fridge.jpg')}>
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
