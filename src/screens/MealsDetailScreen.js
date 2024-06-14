import {Image, StyleSheet, Text, View, Button} from 'react-native';
import {useLayoutEffect} from 'react';

import {MEALS} from '../data/dumy-data';
import MealDetail from '../component/MealDetails';
import {ScrollView} from 'react-native-gesture-handler';

import Subtitle from '../component/SubMealDetail/Subtitle';
import List from '../component/SubMealDetail/List';

function MealsDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  function headerButtonPressHandler(){
    console.log('Pressed!');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap ME!" onPress={headerButtonPressHandler}/>;
      },
    });
  },[navigation, headerButtonPressHandler]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.detailContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  detailContainer: {
    margin: 6,
    padding: 20,
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderBottomColor: '#3f2f25',
    borderBottomWidth: 2,
    flex: 1,
  },
});

export default MealsDetailScreen;
