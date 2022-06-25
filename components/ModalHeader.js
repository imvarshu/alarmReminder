import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const ModalHeader = ({onCancle, onSave}) => {
    return (
        <View style={styles.header}>     
            <TouchableOpacity onPress={onCancle}>
                <Text style={{color:'#FFA808',fontWeight:'600',fontSize:16}}>Cancel</Text>
            </TouchableOpacity>
                <Text style={{color:'#fff',fontWeight:'600',fontSize:16}}>Add Alarm</Text>
            <TouchableOpacity onPress={onSave}>
                <Text style={{color:'#FFA808',fontWeight:'600',fontSize:16}}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ModalHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20
        },
})