import { useState } from 'react';
import {View,Text,Switch,TouchableOpacity} from 'react-native';
import DayPicker from './DayPicker';
import { showTime,showFrequency } from '../utils';


const ListItem = ({item,onToggle, onEdit}) => {
  
    return (
        <View style={{
            
            marginTop:20,
            borderBottomWidth:1,
            borderBottomColor: '#313034', 
        }}>
            <View style={{marginBottom:20,flexDirection: 'row',
            justifyContent: 'space-between'}}>
                    
                    <TouchableOpacity
                     onPress= {() => {onEdit()}}
                    >
                    <View
                        style={{
                            opacity: item.status ? 1 : 0.5,
                        }}>
                        <Text style={{color:'#fff',fontSize:18,fontWeight:'600'}}>{item.title}</Text>
                        <View style={{flexDirection:'row', justifyContent:'flex-start',marginTop:5}}>
                            <Text style={{color:'#fff',padding:5}}>{showFrequency(item.frequency)}</Text>
                            <Text style={{color:'#fff',padding:5}}>{showTime(item.time)}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <Switch
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={onToggle}
                        value={item.status}
                    />
            </View>
         
        </View> 
    )
}

export default ListItem;