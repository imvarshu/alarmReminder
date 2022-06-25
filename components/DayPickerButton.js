import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { showFrequency } from '../utils';

const DayPickerButton = ({onPress,frequency}) => {
    return (
        <TouchableOpacity style={styles.selectDays}
        onPress = {onPress}
        >
           <Text style={{color:'#fff'}}>Repeat</Text>
           <View style={{flexDirection:'row', justifyContent:'flex-start',alignItems:'center'}}>
               <Text style={{color:'#9D9EA7'}}>{ showFrequency(frequency)}</Text>
               <Ionicons name="chevron-forward" size={18} color="#9D9EA7" />
           </View> 
        </TouchableOpacity>
    )
}

export default DayPickerButton;

const styles = StyleSheet.create({
    selectDays: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        backgroundColor: '#2C2B2D',
        padding:15,
        borderRadius:8,
     },
})