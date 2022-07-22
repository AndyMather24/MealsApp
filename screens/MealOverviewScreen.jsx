import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy_data'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route, navigation })
{
    const categoryId = route.params.categoryId;
    const title = route.params.title;

    useLayoutEffect(() =>
    {
        navigation.setOptions({ title: title })
    }, [title])


    const displayedMeals = MEALS.filter((mealItem) =>
    {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    })


    const renderMealItem = (itemData) =>
    {
        const { item } = itemData;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }
        return <MealItem
            {...mealItemProps}
        />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealsOverviewScreen;

