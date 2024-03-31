import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import BackgroundImage from '../components/Background'; // Import the BackgroundImage component
import remy from '../foods/remy.png';
import dish1 from '../foods/dish1.png';
import dish2 from '../foods/dish2.png';
import dish3 from '../foods/dish3.png';

const LOADING_DURATION = 2000;

const generatedRecipeText0 = `Welcome to the kitchen, 
Where anyone can cook! 

Inspired by the spirit of Ratatouille, we've crafted a unique culinary experience just for you. Our app specializes in generating custom recipes tailored to the ingredients in your pantry, turning everyday staples into gourmet delights.

At our core, we're on a mission to reduce food waste and promote sustainability. With a simple scan of a grocery receipt, your entire fridge is accessible from your pocket.

We're not just creating delicious meals; we're also fostering healthy consumption practices, minimizing environmental impact, and tackling food waste head on.

So whether you're a seasoned chef or a culinary novice, join us on a journey of culinary exploration. Let's cook up something extraordinary together, one ingredient at a time!`;

const generatedRecipeText1 = `Turkey and Veggie Omelette

This recipe is a quick and easy breakfast option.

Ingredients:
2 eggs
1/4 cup chopped green pepper
1/4 cup chopped onion
1/2 cup chopped broccoli florets (previously steamed or microwaved until tender)
1/4 cup diced cooked turkey
1/4 cup shredded cheese (cheddar, mozzarella, or your preference)
Salt and pepper to taste
1 tbsp olive oil
Cooking spray

Cookware:
Bowl
Whisk
Frying pan
Spatula

Instructions:
1. In a bowl, whisk together the eggs, a pinch of salt, and a pinch of pepper.
2. Heat the olive oil in a frying pan over medium heat. Add the chopped onion and green pepper and cook until softened, about 3 minutes.
3. Add the broccoli florets and cooked turkey to the pan and cook for an additional minute.
4. Pour the egg mixture into the pan, tilting the pan to spread the eggs evenly.
5. Sprinkle the shredded cheese over one-half of the omelette.
6. Let the omelette cook for a few minutes, until the edges start to set.
7. Once the bottom is cooked and the cheese is melted, use the spatula to fold the unfilled side over the filling.
8. Continue cooking for another minute or two, until the omelette is cooked through.
9. Serve immediately.`;


const generatedRecipeText2 = `Bruschetta with Tomato and Basil

This recipe is a light and refreshing appetizer.

Ingredients:

1 baguette, sliced into 1/2 inch thick slices
2 large tomatoes, diced
1/4 cup chopped fresh basil
1 tbsp olive oil
1 clove garlic, minced
Salt and pepper to taste
Cooking spray

Cookware:

Baking sheet
Knife
Spoon
Bowl

Instructions:

1. Preheat oven to 375°F (190°C). Lightly spray a baking sheet with cooking spray.
2. Arrange the bread slices on the prepared baking sheet.
3. Bake for 5-7 minutes, or until lightly toasted.
4. While the bread is toasting, in a bowl, combine the diced tomatoes, chopped basil, olive oil, minced garlic, salt, and pepper.
5. Once the bread is toasted, remove it from the oven and top each slice with the tomato mixture.
6. Serve immediately.`;

const generatedRecipeText3 = `Tilapia with Roasted Vegetables

This recipe is a healthy and flavorful main course.

Ingredients:

2 tilapia fillets
1 tbsp olive oil
1/2 tsp dried oregano
1/4 tsp salt
1/4 tsp black pepper
1 cup chopped zucchini
1 cup chopped tomatoes
1/2 cup chopped red onion
1/2 cup chopped broccoli florets

Cookware:

Aluminum foil
Baking sheet

Instructions:

1. Preheat oven to 400°F (200°C). Line a baking sheet with aluminum foil.
2. In a bowl, toss the zucchini, tomatoes, red onion, and broccoli florets with olive oil, oregano, salt, and pepper.
3. Spread the vegetables evenly on the prepared baking sheet.
4. Place the tilapia fillets on top of the vegetables.
5. Loosely cover the baking sheet with aluminum foil.
6. Bake for 15-20 minutes, or until the tilapia is cooked through and the vegetables are tender.
7. Serve immediately.`




const RecipeScreen = () => {
  const [recipeIndex, setRecipeIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  const recipes = [
    { title: 'Find custom recipes made for you!', text: generatedRecipeText0, image: remy },
    { title: 'Turkey and Veggie Omelette', text: generatedRecipeText1, image: dish1 },
    { title: 'Bruschetta with Tomato and Basil', text: generatedRecipeText2, image: dish2 },
    { title: 'Tilapia with Roasted Vegetables', text: generatedRecipeText3, image: dish3 },
  ];

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    }, LOADING_DURATION);
  };


  return (
    <BackgroundImage backgroundImage={require('../assets/rat.jpg')}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground source={recipes[recipeIndex].image} style={styles.image}>
            <View style={styles.overlay}>
              <Text style={styles.imageText}>{recipes[recipeIndex].title}</Text>
            </View>
          </ImageBackground>
        </View>
        <TouchableOpacity style={styles.generateButton} onPress={handleGenerate}>
          <Text style={styles.generateText}>Generate</Text>
        </TouchableOpacity>
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#D1B7A1" />
          </View>
        )}
        <View style={styles.container}>
          <Text style={styles.recipeText}>{recipes[recipeIndex].text}</Text>
        </View>
      </ScrollView>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    overflow: 'hidden',
    marginBottom: 20,
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
  generateButton: {
    backgroundColor: '#D1B7A1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  generateText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject, // Positions the container absolutely to cover the entire screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background color
  },
});

export default RecipeScreen;