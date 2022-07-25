import MealDetail from "../components/MealDetail";
import { StyleSheet } from 'react-native'
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";


function MealDetailScreen({ route, navigation })
{
    const { mealId, imageUrl, steps, ingredients } = route.params

    const mealDetailProps = {
        id: mealId,
        imageUrl: imageUrl,
        steps: steps,
        ingredients: ingredients
    }

    function headerButtonPressHandler()
    {
        console.log("press")
    }

    useLayoutEffect(() =>
    {
        navigation.setOptions({
            headerRight: () =>
            {
                return <IconButton onPress={headerButtonPressHandler} name='heart' size='28' color='red' />
            }
        }, [navigation, headerButtonPressHandler])
    })

    return (
        <MealDetail style={styles.container} {...mealDetailProps} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealDetailScreen;