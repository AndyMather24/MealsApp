import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealOverviewScreen'
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App()
{

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: 'Categories',
            headerStyle: {
              backgroundColor: '#FFF4E9',

            },
            headerTintColor: 'black',
            contentStyle: {

              backgroundColor: '#E8DBC5',
            }

          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealOverviewScreen}

          />
          <Stack.Screen
            name="mealsDetail"
            component={MealDetailScreen}

          />
        </Stack.Navigator>
      </NavigationContainer>

    </>



  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
});
