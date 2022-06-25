import { useEffect, useState } from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import settings from '../settings';
import DayPicker from './DayPicker';
import TimePicker from './TimePicker';
import TheButton from './TheButton';
import TheTextInput from './TheTextInput';
import ModalHeader from './ModalHeader';
import DayPickerButton from './DayPickerButton';
const {dayNames} = settings;

const AddModal = ({visible, alarm, onClose, onSave,onDelete}) => {
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
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <ModalHeader onCancle={onClose} onSave={save} />
                <TimePicker time={time} onChange={setTime} />
                <TheTextInput value={title} onChangeText= {setTitle}/>
                <DayPickerButton onPress = {()=> setShowPicker(true)} frequency={frequency}/>    
                 {
                   alarm.id && <TheButton title="Delete" onPress={onDelete} />
                 }
                <DayPicker selected={frequency}  visible={showPicker} onClose={onDayUpdate} /> 
            </View>
        </Modal>
    )
}
export default AddModal;

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#000',
        padding:20,
    },
   
})

AddModal.propTypes = {
    visible: PropTypes.bool,
    alarm: PropTypes.shape({
        title: PropTypes.string,
        frequency: PropTypes.array,
        time: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.bool,
    }),
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
}