import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const Data = [
  {
    name: 'Qudrat',
    img: require('../img/img1.png'),
  },
  {
    name: 'Seince',
    img: require('../img/img2.png'),
  },
  {
    name: 'Pak Studis',
    img: require('../img/img3.png'),
  },
  {
    name: 'Qudrat',
    img: require('../img/img11.png'),
  },
  {
    name: 'Qudrat',
    img: require('../img/img2.png'),
  },
  {
    name: 'Qudrat',
    img: require('../img/img3.png'),
  },
  {
    name: 'Qudrat',
    img: require('../img/img1.png'),
  },
  
];

export default function QuizHome({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          height: '20%',
          backgroundColor: '#2f7a8f',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>All Type QUIZ</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
        <ScrollView style={{flex:1}}>
        <View
          style={{
             }}>
          <View style={{ margin: 10, flex: 1,alignItems:'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Computer Quiz</Text>
            <View style={{ flex:1,flexDirection: 'row', 
            alignItems:'center',justifyContent:'space-evenly',flexWrap:'wrap',
            width:'100%',borderRadius:10,elevation:4
            ,backgroundColor:'white',marginTop:30 }}>
              
              {
                Data.map((item)=>
                <TouchableOpacity
                onPress={() => navigation.navigate('QuizScreen')}
                style={{ marginVertical: '15%', marginHorizontal: 10, alignItems: 'center' }}>
                <Image source={item.img} style={{ width: 100, height: 100 }} />
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              </TouchableOpacity>
           )
              }
            </View>
          </View>

         
        </View>
        </ScrollView>
      </View>
    </View>
  );
}
