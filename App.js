import {StatusBar, StyleSheet, View, Text, Button} from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MealsScreen from './src/screens/MealsScreen';
import MealsDetailScreen from './src/screens/MealsDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#24180f" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#24180f'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="MealsOver"
            component={MealsScreen}
            options={
              // title: 'Meal Detail'
              ({route, navigation}) =>{
                const catId = route.params.categoryId;
                return {
                  title: catId,
                }
              }
            }
          />
          <Stack.Screen name='MealsDetail' component={MealsDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ini sangat penting untuk memastikan bahwa NavigationContainer menggunakan seluruh ruang
    backgroundColor: '#24180f',
  },
});
