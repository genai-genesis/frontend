import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import BackgroundImage from '../components/Background'; // Import the BackgroundImage component
import { useAuth } from '../hooks/AuthContext';
import HomeScreen from './HomeScreen';

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleLogin = () => {
    // whatever we need to do on the backend funky bs
    // for now i will just make this redirect to dashboard on enter

    const loginUser = async (username, password) => {
      try {
        const response = await axios.post(
          'https://backend-production-ba90.up.railway.app/users/signup',
          {
            username: username,
            password: password,
          }
        );

        if (response.status === 200) {
          signIn(response.data.user);
          navigation.navigate('TabNavigator', { screen: 'Fridge' }); // Navigate to 'Fridge' screen within 'TabNavigator'
        }
      } catch (error) {
        console.error(error);
      }
    };

    loginUser(username, password);

    // navigation.navigate('Dashboard');
  };

  const handleRegister = () => {
    // whatever we need to do on the backend funky bs
    // for now i will just make this redirect to dashboard on enter

    const RegisterUser = async (username, password) => {
      try {
        const response = await axios.post(
          'https://backend-production-ba90.up.railway.app/users/signup',
          {
            username: username,
            password: password,
          }
        );

        if (response.status === 200) {
          signIn(response.data.user);
          navigation.navigate('TabNavigator', { screen: 'Fridge' }); // Navigate to 'Fridge' screen within 'TabNavigator'

        }

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    RegisterUser(username, password);
  };


  return (
    <BackgroundImage backgroundImage={require('../assets/remy_login.png')}>
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#A18167"
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A18167"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.7}
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} activeOpacity={0.7}
          onPress={handleRegister}
        >
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
    color: '#D1B7A1',
    fontSize: 18,
  },
  loginButton: {
    width: '80%',
    height: 55,
    backgroundColor: '#D1B7A1',
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
    color: '#D1B7A1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
