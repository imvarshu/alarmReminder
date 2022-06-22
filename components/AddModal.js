import { useEffect, useState } from 'react';
import {View,Text,Modal,TouchableOpacity,TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from '@expo/vector-icons/Ionicons';
import settings from '../settings';
import DayPicker from './DayPicker';
import { showFrequency } from '../utils';
const {dayNames} = settings;

const AddModal = ({visible,close,alarm,onSave,onDelete}) => {
    const [showPicker,setShowPicker] = useState (false); 
    // console.log(alarm);
    const [title, setTitle] = useState('');
    const[frequency, setFrequency] = useState(dayNames);
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        console.log(alarm);
        setTitle(alarm.title ?? '');

        if(alarm.frequency && Array.isArray(alarm.frequency))
            setFrequency(alarm.frequency);
        else
            setFrequency(dayNames);

        if(alarm.time)
            setTime(new Date(alarm.time));
        else
            setTime(new Date())

    },[alarm])

    const onChange = (event, selectedDate) => {
        // console.log(selectedDate);
        setTime(selectedDate);
      };

    const onDayUpdate = (days) => {
        console.log('onDayUpdate',days);
        setShowPicker(false);
        setFrequency(days);
    }

      const save = () => {

        if (alarm.id) {
            // edit alarm object
            const oldAlarm = {
                ...alarm,
                title: title,
                frequency: frequency,
                time: time.toString(),
            }
            onSave(oldAlarm);

        }else {
            //creat new alarm object
            const newAlarm = {
                id: Math.random(),
                title: title,
                frequency: frequency,
                time: time.toString(),
                status: true
            }
            onSave(newAlarm);
        }
      }

   
    return (
         <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            presentationStyle='formSheet'
            onRequestClose={() => {close()}}
            
        >
            <View style={{flex:1,backgroundColor:'#000',padding:20}}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    padding:20
                    }}
                >     
                    <TouchableOpacity style={{}}
                        onPress={() =>(close())}
                    >
                        <Text style={{color:'#FFA808',fontWeight:'600',fontSize:16}}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={{color:'#fff',fontWeight:'600',fontSize:16}}>Add Alarm</Text>
                        <TouchableOpacity
                        onPress={save}
                        >
                        <Text style={{color:'#FFA808',fontWeight:'600',fontSize:16}}>Save</Text>
                        </TouchableOpacity>
                        
                 </View>
                 <View>
                 <DateTimePicker
                        testID="dateTimePicker"
                        display="spinner"
                        value={time}
                        mode='time'
                        is24Hour={false}
                        onChange={onChange}
                        themeVariant="dark"
                        />
                 </View>
                 <View>
                 <TextInput
                    style={{
                        marginTop:20,
                        backgroundColor: '#2C2B2D',
                        padding:15,
                        borderRadius:8,
                        color: '#fff',
                    }}
                    onChangeText= {setTitle}
                    placeholder="Remind me for"
                    placeholderTextColor= '#9D9EA7'
                    value= {title}
                   
                />
                 </View>
                 <View>
                 <TouchableOpacity style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:20,
                    backgroundColor: '#2C2B2D',
                    padding:15,
                    borderRadius:8,
                    

                 }}
                 onPress = {()=> setShowPicker(true)}
                 >
                    <Text style={{color:'#fff'}}>Repeat</Text>
                    <View style={{flexDirection:'row', justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style={{color:'#9D9EA7'}}>{ showFrequency(frequency)}</Text>
                        <Ionicons name="chevron-forward" size={18} color="#9D9EA7" />
                    </View> 
                 </TouchableOpacity>
                 {
                   alarm.id &&
                        <TouchableOpacity style={{
                            flexDirection:'row',
                            justifyContent:'center',
                            marginTop:20,
                            backgroundColor: '#2C2B2D',
                            padding:15,
                            borderRadius:8,
                }}
                    onPress = {onDelete}
                >
                    <Text style = {{color:'#F5453A', fontSize:16,fontWeight:'600'}}>Delete</Text>
                </TouchableOpacity>
                 }
                 </View>
                 
                   <DayPicker selected={frequency}  visible={showPicker} onClose={onDayUpdate} /> 

                 </View>
                
            </Modal>
    )
}
export default AddModal;