import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BackgroundImage from '../components/Background'; // Import the BackgroundImage component

const LoginScreen = () => {
  return (
    <BackgroundImage backgroundImage={require('../assets/splash.png')}>
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#176935"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#176935"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.7}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} activeOpacity={0.7}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.3)', // Text shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 5, // Shadow blur radius
  },
  input: {
    width: '80%',
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: 'green',
    fontSize: 18,
  },
  loginButton: {
    width: '80%',
    height: 55,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signUpButton: {
    width: '80%',
    height: 55,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
