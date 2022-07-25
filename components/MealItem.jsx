import { Text, View, Image, StyleSheet, Pressable } from 'react-native'


function MealItem({ title, imageUrl, affordability, complexity, duration, onPress })
{



    return (
        <View style={styles.tile}>
            <Pressable onPress={onPress} android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.pressable, pressed ? styles.buttonPressed : null]}>
                <View style={styles.titleContainer} >
                    <Image style={styles.image} source={{ url: imageUrl }} />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <View style={styles.criteraSection}>

                    <Text style={styles.criteriaText}>
                        {affordability.toUpperCase()}
                    </Text>
                    <Text style={styles.criteriaText}>
                        {complexity.toUpperCase()}
                    </Text>
                    <Text style={styles.criteriaText}>
                        {duration}m
                    </Text>
                </View>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        alignContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 7,
        textAlign: 'center'
    },
    tile: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    image: {
        height: 310,
        width: 310,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    criteraSection: {
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        marginBottom: 20,

    },
    criteriaText: {
        textAlign: 'center',
        paddingHorizontal: 4,
        fontSize: 12
    },
    buttonPressed: {
        opacity: 0.50
    },

})

export default MealItem;

