import { useState, useEffect } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ListItem from './components/ListItem';
import AddModal from './components/AddModal';
import data from './data';
import {createOrUpdate} from './utils';

export default function App() {
  const [alarms, setAlarms] = useState(data);
  const [alarm, setAlarm] = useState({});
  const[modalVisible,setModalVisible] = useState(false);

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
    const newAlrams = createOrUpdate(alarms, item);
    setAlarms(newAlrams);
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
    <View style={styles.container}>
     <View style={styles.header}>
       
        <Text style={styles.title}>
            Reminder
        </Text>
        <TouchableOpacity 
            onPress= {createNewAlarm}
          >
            <Ionicons name="add" size={36} color="#FFA808" />
          </TouchableOpacity>

     </View>
     <View>
        <Text style={styles.subTitle}>
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
        onClose={hideModal}
        onSave={onSave}
        onDelete={() =>onDelete(alarm)}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex:1,
        backgroundColor:'#000',
        padding:20
  },
  header: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:40,
  },
  title: {
    color:'#fff', 
    fontSize: 36,
    fontWeight:'600',
    borderBottomWidth:1,
    borderBottomColor: '#313034',
    paddingBottom:20
    
  },
  subTitle: {
    color:'#fff', 
    fontSize: 30,
    marginTop:30,
    fontWeight:'600',
    borderBottomWidth:1,
    borderBottomColor: '#313034',
    paddingBottom:20
  },

})
