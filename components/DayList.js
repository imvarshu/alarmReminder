import { useState } from 'react';
import {Text,View, TouchableOpacity, Switch} from 'react-native';
import settings from '../settings';
const {dayNames} = settings;

const DayList = ({day, enabled, onUpdate}) => {
    const [isEnabled, setIsEnabled] = useState(enabled ?? false);
    
    const toggleSwitch = () => {
        // console.log(isEnabled);

        if(isEnabled){
            onUpdate('remove', day);
            setIsEnabled(false);
        } else {
            onUpdate('add', day);
            setIsEnabled(true);
        }
    }
    
    return (
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop: 30
            
        }}>
            
            <Text style={{color:'#fff', fontSize:16,fontWeight:'600'}}>Every {day}</Text>
            <Switch
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

export default DayList