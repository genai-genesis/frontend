import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackgroundImage from '../components/Background'; // Import the BackgroundImage component


const RecipeScreen = () => {
  return (
    <BackgroundImage backgroundImage={require('../assets/kitchen.jpg')}>
      <View style={styles.container}>
        <Text>Recipe Screen</Text>
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

export default RecipeScreen;
