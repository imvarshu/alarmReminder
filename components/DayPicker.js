import { useEffect, useState } from 'react';
import {View,Text,TouchableOpacity,Modal,Switch} from 'react-native';
import settings from '../settings';
import DayList from './DayList';

const {dayNames} = settings;

const DayPicker = ({selected, visible, onClose}) => {
    const [days, setDays] = useState(dayNames)
   
    useEffect(() => {
        console.log('useEffect', selected)
        setDays(selected ?? dayNames);
    }, [selected]);

    const isEnabled = (day) =>{
        // console.log('isEnabled',days)
        return Array.isArray(days) && days.includes(day);
    }

    const onUpdate = (command, day) => {
        console.log(command, day);
        const copy = [...days];
        if(command === 'add')
            copy.push(day)
        else
            copy.splice(copy.findIndex(i => i===day) , 1);
        setDays(copy);
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            presentationStyle='formSheet'
            onRequestClose={() => {}}
        >
            <View style={{
                flex:1,
                backgroundColor:'#000',
                padding:20
            }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity
                        onPress={()=>onClose(days)}
                    >
                        <Text style={{color:'#fff',fontSize:16,fontWeight:'600'}}>Close</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#fff',fontSize:16,fontWeight:'600'}}>Repeat</Text>
                <View />
            </View>
            {
                dayNames.map((day,index) => <DayList day={day} enabled={isEnabled(day)} onUpdate={onUpdate} key={index} />)
            }
            </View>
        </Modal>
    )
}

export default DayPicker;