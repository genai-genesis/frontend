import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import BackgroundImage from '../components/Background'; // Import the BackgroundImage component
import Udon from '../assets/kale_feta_udon.png';

const foodNames = [
  'zucchini', 'banana', 'potato', 'broccoli', 'brussel sprout', 'grape', 'peas', 'tomato', 'lettuce',
  'bread', 'ham', 'turkey', 'activia', 'eggs', 'beef', 'apples', 'bananas', 'cucumbers', 'garlic',
  'tomatoes', 'onions', 'peppers', 'tilapia'
];

const generatedRecipeText = `1. Spicy Udon Noodle Soup with Kale and Feta
This recipe is a light and flavorful soup perfect for a cold day. The jalapenos add a kick, balanced by the creamy feta and citrusy lemon. Xanthan gum thickens the broth slightly for a more satisfying meal.

Ingredients:

2 tbsp olive oil
1 small onion, diced
2 cloves garlic, minced
1 jalapeno pepper, seeded and diced (adjust for desired spice level)
4 cups vegetable broth
1 cup chopped kale
1/2 cup chopped fresh parsley
1 lemon, juiced
1 tsp Italian seasoning
1/4 tsp nutmeg
Pinch xanthan gum (optional)
Salt and pepper to taste
8 oz udon noodles
1/2 cup crumbled feta cheese

Instructions:

Heat olive oil in a large pot over medium heat. Add onion and cook until softened, about 5 minutes.
Add garlic and jalapeno, cook for another minute.
Pour in vegetable broth and bring to a boil.
Stir in kale, parsley, lemon juice, Italian seasoning, nutmeg, and salt and pepper. Reduce heat and simmer for 5 minutes, or until kale is wilted.
If desired, whisk in xanthan gum to thicken the broth slightly.
While the soup simmers, cook udon noodles according to package directions.
Drain noodles and add them to the soup.
Serve hot, topped with crumbled feta cheese.`;

const RecipeScreen = () => {
  return (
    <BackgroundImage backgroundImage={require('../assets/rat.jpg')}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground source={Udon} style={styles.image}>
            <View style={styles.overlay}>
              <Text style={styles.imageText}>Spicy Udon Noodle Soup</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.container}>
          <Text style={styles.recipeText}>{generatedRecipeText}</Text>
        </View>
      </ScrollView>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    // margin: 20,
    // borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent green background
  },
  recipeText: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 60,
    color: 'white',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'justify',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 450,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 30,
    margin: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default RecipeScreen;
