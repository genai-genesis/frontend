import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackgroundImage from '../components/Background'; // Import the BackgroundImage component


const LoginScreen = () => {
  return (
    <BackgroundImage backgroundImage={require('../assets/splash.png')}>
      <View style={styles.container}>
        <Text>Login Screen</Text>
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

export default LoginScreen;
