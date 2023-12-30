import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Level1 from './Level/Level1';
const Data = [
  { image: require('../img/img1.png'), step: 'Level 1',Screen:'Level1' },
  
  
];


export default function QuizScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: '15%', backgroundColor: '#2f7a8f', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>Computer Quiz</Text>
      </View>
      <ScrollView>
       <View style={{flexDirection:'row',flex:1,flexWrap:'wrap',alignItems:'center',
       marginVertical:20,justifyContent:'center'}}>
        
      {Data.map((item, index) => (
        <View key={index} >
        <View style={{margin:10,borderRadius:10}}> 
         <TouchableOpacity onPress={()=>navigation.navigate(item.Screen)}
           style={{width:140,height:190,borderRadius:20,elevation:3,backgroundColor:'white',
        alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:28,fontWeight:'bold',color:'green'}}>{item.step}</Text>
            </TouchableOpacity>
         </View>
         
        </View>
      ))}
 
      </View>
      </ScrollView>
    </View>
  );
}
