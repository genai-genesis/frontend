import React, { useRef, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Modal, TouchableWithoutFeedback, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import BackgroundImage from '../components/Background';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '../hooks/AuthContext';
import Cookie from '../assets/cookie.jpg';
import getFoodFileName from '../components/FoodMap'; // Import getFoodFileName function


const HomeScreen = () => {
  const screenWidth = Dimensions.get('window').width; // Get the screen width
  const scrollViewRef = useRef(null); // Ref for ScrollView
  const [lightboxVisible, setLightboxVisible] = useState(false); // State for lightbox visibility
  const [selectedFood, setSelectedFood] = useState('tomato');

  // Function to handle swiping to the next page
  const handleSwipeRight = () => {
    scrollViewRef.current?.scrollTo({ x: screenWidth, animated: true });
  };

  // Function to handle swiping back to the previous page
  const handleSwipeLeft = () => {
    scrollViewRef.current?.scrollTo({ x: 0, animated: true });
  };

  // Function to handle pressing a grid item
  const handlePressGridItem = (foodName) => {
    if(foodName) {
      setSelectedFood(foodName);
      setLightboxVisible(true);
    }
  };

  // Function to handle closing the lightbox
  const handleCloseLightbox = () => {
    setLightboxVisible(false);
  };

  const [selectImage, setSelectImage] = useState('');
  const { user } = useAuth();

  //this allows user to upload image
  const ImagePickerFunction = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectImage(result.uri);
      console.log('res', result);
      if (result.assets) {
        uploadImage(result.assets[0]);
      } else {
        console.log('No assets to upload');
      }
    }
  };

  const uploadImage = async (selectImage) => {
    console.log(selectImage);

    const formData = new FormData();
    formData.append('image', {
      //endpoints that we send
      uri: selectImage.uri,
      type: selectImage.type,
      name: selectImage.fileName,
    });

    console.log(formData);
    try {
      const uploadResponse = await axios.post(
        // we are using axios to post data to backend
        'http://backend-production-ba90.up.railway.app/images/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'x-access-token': user, // we use user as the token key
          },
        }
      );

      if (uploadResponse.status === 200) {
        console.log('Image uploaded successfully!');
        // Handle success, update food list:
        setFoodNames([
          {"name": "zucchini", "expiry": 5},
          {"name": "banana", "expiry": 8},
          {"name": "potato", "expiry": 10},
          {"name": "broccoli", "expiry": 8},
          {"name": "brussel sprout", "expiry": 7},
          {"name": "grape", "expiry": 7},
          {"name": "peas", "expiry": 10},
          {"name": "tomato", "expiry": 6},
          {"name": "lettuce", "expiry": 9},
          // added these foods when upload is pressed
          {"name": "bread", "expiry": 12},
          {"name": "ham", "expiry": 7},
          {"name": "turkey", "expiry": 5},
          {"name": "activia", "expiry": 14},
          {"name": "eggs", "expiry": 21},
          {"name": "beef", "expiry": 5},
          {"name": "apples", "expiry": 8},
          {"name": "bananas", "expiry": 8},
          {"name": "cucumbers", "expiry": 3},
          {"name": "garlic", "expiry": 60},
          {"name": "tomatoes", "expiry": 6},
          {"name": "onions", "expiry": 30},
          {"name": "peppers", "expiry": 7},
          {"name": "tilapia", "expiry": 2},
        ]


        );


      } else {
        console.error('Image upload failed!');
        // Handle error scenarios
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle network or other errors
    }
  };


  

  // Array of food names
  const [foodNames, setFoodNames] = useState([
    {"name": "zucchini", "expiry": 5},
    {"name": "banana", "expiry": 8},
    {"name": "potato", "expiry": 10},
    {"name": "broccoli", "expiry": 8},
    {"name": "brussel sprout", "expiry": 7},
    {"name": "grape", "expiry": 7},
    {"name": "peas", "expiry": 10},
    {"name": "tomato", "expiry": 6},
    {"name": "lettuce", "expiry": 9},

    // add these foods when upload is pressed
    // {"name": "bread", "expiry": 10},
    // {"name": "ham", "expiry": 7},
    // {"name": "turkey", "expiry": 5},
    // {"name": "activia", "expiry": 14},
    // {"name": "eggs", "expiry": 21},
    // {"name": "beef", "expiry": 5},
    // {"name": "apples", "expiry": 8},
    // {"name": "bananas", "expiry": 5},
    // {"name": "cucumbers", "expiry": 3},
    // {"name": "garlic", "expiry": 60},
    // {"name": "tomatoes", "expiry": 5},
    // {"name": "onions", "expiry": 30},
    // {"name": "peppers", "expiry": 7},
    // {"name": "tilapia", "expiry": 2},
  ]);


  return (
    <BackgroundImage backgroundImage={require('../assets/pantry2.png')}>
      <View style={styles.container}>
        {/* ScrollView with horizontal paging */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
        >
         <View style={styles.outerLeftGrid}>
          {/* Render first set of grid items */}
          {[...Array(4).keys()].map((rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              <View style={styles.innerGrid}>
                {[...Array(4).keys()].map((colIndex) => {
                  const index = rowIndex * 4 + colIndex;
                  // add if statement
                  if (index < foodNames.length) {
                    const foodName = foodNames[index].name;
                    return (
                        <TouchableWithoutFeedback key={index} onPress={() => handlePressGridItem(foodName)}>
                          <View style={styles.gridItem}>
                            <Image source={getFoodFileName(foodName)} style={styles.foodImage} />                   
                          </View>
                        </TouchableWithoutFeedback>
                    );
                  } else {
                    return (
                      <TouchableWithoutFeedback key={index}>
                        <View style={styles.gridItem}>
                          <View style={styles.transparentSquare}></View>
                        </View>
                      </TouchableWithoutFeedback>                    
                      );
                  }
                })}
              </View>
            </View>
          ))}
        </View>
          <View style={styles.outerRightGrid}>
  {/* Render second set of grid items */}
  {[...Array(Math.ceil(foodNames.length / 4)).keys()].map((rowIndex) => (
    <View key={rowIndex} style={styles.row}>
      <View style={styles.innerGrid}>
        {[...Array(4).keys()].map((colIndex) => {
          const index = rowIndex * 4 + colIndex + 16;
          if (index < foodNames.length) {
            const foodName = foodNames[index].name;
            return (
              <TouchableWithoutFeedback key={index} onPress={() => handlePressGridItem(foodName)}>
                <View style={styles.gridItem}>
                  <Image source={getFoodFileName(foodName)} style={styles.foodImage} />
                </View>
              </TouchableWithoutFeedback>
            );
          } else {
            return null; // Return null for indices beyond the array length
          }
        })}
      </View>
    </View>
  ))}
</View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={async () => {
            try {
              const result = await ImagePickerFunction();
              if (result === null) {
                console.log('No image was selected');
                return;
              }
            } catch (error) {
              console.error(error);
            }
          }}
        >
          <Text style={styles.uploadText}>UPLOAD!</Text>
        </TouchableOpacity>
      </View>
      {/* Lightbox modal */}
      <Modal visible={lightboxVisible} transparent>
        <View style={styles.lightboxContainer}>
          <View style={styles.lightboxContent}>
            <Text style={styles.lightboxName}>{selectedFood}</Text>
            <Text style={styles.lightboxExpiry}>
              Expiry Estimate: {foodNames.find(food => food.name === selectedFood)?.expiry || 'Unknown'} days
            </Text>
            <Image source={getFoodFileName(selectedFood)} style={styles.lightboxImage} />
            <TouchableWithoutFeedback onPress={handleCloseLightbox}>
              <View style={styles.closeButtonContainer}>
                <Ionicons name="close-circle-outline" size={30} color="black" />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: '63%',
  },
  outerLeftGrid: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  outerRightGrid: {
    flexDirection: 'column',
    marginLeft: 25,
    marginRight: 38,
  },
  row: {
    flexDirection: 'row',
  },
  innerGrid: {
    flexDirection: 'row',
  },
  gridItem: {
    marginHorizontal: 13,
    height: 60,
    width: 60,
    marginTop: 72.5,
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  lightboxContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  lightboxContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  lightboxName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lightboxExpiry: {
    marginTop: 10,
    fontSize: 18,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  lightboxImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop: 20
  },
  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  uploadButton: {
    position: 'absolute',
    top: 175,
    left: '10%',
    width: '80%',
    height: 55,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    color: '#D1B7A1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  transparentSquare: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;