import { useState, useEffect } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ListItem from './components/ListItem';
import AddModal from './components/AddModal';
import data from './data';

export default function App() {
  const [alarms, setAlarms] = useState(data);
  const [alarm, setAlarm] = useState({});
  const[modalVisible,setModalVisible] = useState(true);


  useEffect(()=>{
    // console.log(modalVisible);
  });

  const toggleStatus = (item) => {
    const copyAlarms = [...alarms];
    const index = alarms.findIndex(x => x.id === item.id);
    copyAlarms[index].status = !item.status;
    setAlarms(copyAlarms);
  }

  const createNewAlarm = () => {
    setAlarm({});
    setModalVisible(true);
  }

  const editAlarm = (selectedAlarm) => {
    setAlarm(selectedAlarm);
    setModalVisible(true);
  }
  
  const hideModal = () => {
    setAlarm({});
    setModalVisible(false);
  }
  const onSave = (item) => {
    const copyAlarms = [...alarms];
    const index = alarms.findIndex(x => x.id === item.id);
    if (index === -1) {
      copyAlarms.push(item)
    }
    else {
      copyAlarms[index] = item;
    }
  
    setAlarms(copyAlarms);
    hideModal();
  }

  const onDelete = (item) => {
    const copyAlarms = [...alarms];
    const index = alarms.findIndex(x => x.id === item.id);
    copyAlarms.splice(index,1);
    setAlarms(copyAlarms);
    hideModal();
  }

  return (
    <View style={{
        flex:1,
        backgroundColor:'#000',
        padding:20}}
    >

     <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40}}>
       
        <Text style={{
          color:'#fff', 
          fontSize: 36,
          fontWeight:'600',
          borderBottomWidth:1,
          borderBottomColor: '#313034',
          paddingBottom:20
          
        }}
        >
            Reminder
        </Text>
        <TouchableOpacity 
            onPress= {() => { createNewAlarm() }}
          >
            <Ionicons name="add" size={36} color="#FFA808" />
          </TouchableOpacity>

     </View>
     <View>
        <Text style={{
          color:'#fff', 
          fontSize: 30,
          marginTop:30,
          fontWeight:'600',
          borderBottomWidth:1,
          borderBottomColor: '#313034',
          paddingBottom:20
        }}
        >
            List
        </Text>
     </View>
      <FlatList
        data={alarms}
        renderItem={({item})=>  <ListItem item={item} onToggle={() =>{toggleStatus(item)}} onEdit={() => editAlarm(item)}/>}
        keyExtractor={item => item.id}
      />

     <AddModal
        alarm={alarm}
        visible={modalVisible}
        close={()=>{setModalVisible(false) }}
        onSave={onSave}
        onDelete={() =>onDelete(alarm)}
      />
     
    </View>
  );
}


