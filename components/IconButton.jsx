import { Pressable, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function IconButton({ onPress })
{
    return <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed} >
        <Ionicons name='heart' color='red' size={28}></Ionicons>
    </Pressable >
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.25
    }
})

export default IconButton;

