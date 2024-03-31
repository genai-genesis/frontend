import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import BackgroundImage from '../components/Background';

const HomeScreen = () => {
  const screenWidth = Dimensions.get('window').width; // Get the screen width

  return (
    <BackgroundImage backgroundImage={require('../assets/pantry2.png')}>
      <View style={styles.container}>
        <View style={styles.outerGrid}>
          {[...Array(4).keys()].map((row) => (
            <View key={row} style={styles.row}>
              <View style={styles.innerGrid}>
                {[...Array(4).keys()].map((col) => (
                  <View key={col} style={[styles.gridItem]} />
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center', // Center horizontally
    paddingBottom: '63%', // Adjust bottom position as needed
  },
  outerGrid: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  innerGrid: {
    flexDirection: 'row',
  },
  gridItem: {
    backgroundColor: 'red',
    marginHorizontal: 13,
    height: 60,
    width: 60, // Set width as percentage (4 items in a row with 2% margin)
    marginTop: 72.5,
  },
});
export default HomeScreen;
