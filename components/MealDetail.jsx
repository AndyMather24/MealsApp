import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
function MealDetail({ id, imageUrl, steps, ingredients })
{

    return (

        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Image style={styles.image} source={{ url: imageUrl }} />
                <View style={styles.ingredientsContainer}>
                    <Text style={styles.title}>
                        Ingredients
                    </Text>
                    {ingredients.map(ingredients => <Text key={ingredients} style={styles.ingredients}> {ingredients}</Text>)}
                </View>
                <View style={styles.stepsContainer}>
                    <Text style={styles.title}>
                        Instructions
                    </Text>
                    {steps.map(step => <Text style={styles.step} key={step}> {step}</Text>)}
                </View>
            </ScrollView>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 280,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        marginBottom: 10

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center'
    },
    ingredientsContainer: {
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    ingredients: {
        width: '85%',
        padding: 10,
        backgroundColor: '#FFF4E9',
        textAlign: 'center'

    },
    stepsContainer: {
        marginHorizontal: 14

    },
    step: {
        marginVertical: 8,
        backgroundColor: '#FFF4E9',
        padding: 10,

    }


})

export default MealDetail;