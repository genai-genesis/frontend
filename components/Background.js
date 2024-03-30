// BackgroundImage.js
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children, backgroundImage }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
});

export default Background;
