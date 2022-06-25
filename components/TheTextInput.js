import { TextInput,StyleSheet } from "react-native";

const TheTextInput = ({value,onChangeText}) => {
    return (
        <TextInput
        style={styles.textInput}
        onChangeText= {onChangeText}
        placeholder="Remind me for"
        placeholderTextColor= '#9D9EA7'
        value= {value}
    />
    )
}

export default TheTextInput;

const styles = StyleSheet.create({
    textInput: {
        marginTop:20,
        backgroundColor: '#2C2B2D',
        padding:15,
        borderRadius:8,
        color: '#fff',
    },
})