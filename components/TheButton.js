import { Text, TouchableOpacity, StyleSheet } from "react-native";
const TheButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress = {onPress}>
            <Text style = {styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default TheButton;

const styles = StyleSheet.create({
    button: {
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
        backgroundColor: '#2C2B2D',
        padding:15,
        borderRadius:8,
    },
    title:{
        color:'#F5453A',
        fontSize:16,
        fontWeight:'600',
    }
})