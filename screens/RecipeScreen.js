import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Recipe Screen</Text>
      {/* Add your recipe screen content here */}
    </View>
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
