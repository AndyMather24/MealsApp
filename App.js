import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealOverviewScreen'
import CategoriesScreen from './screens/CategoriesScreen';


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
              backgroundColor: '#EDC4B3',

            },
            headerTintColor: 'black',
            contentStyle: {
              backgroundColor: '#E6B8A2'
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
