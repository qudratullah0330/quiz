import React from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
export default function RecviewNotifcation({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={{marginVertical:20,margin:12,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                    <Image source={require('../Img/HomePageImg/imgDonation.png')} style={{ width: 44, height: 44 }} />
                </TouchableOpacity>
      <Text style={{fontSize:22,fontWeight:'bold'}}>Receive Notifcation</Text>
      <Image source={require('../Img/HomePageImg/belliconimg.png')} style={{ width: 30, height: 30 }} />
      </View>
      
      <View>
        <Text style={{textAlign:'right',marginRight:20,fontSize:18,fontWeight:'666 ',color:'#4d9feb'}}>Clear All</Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
        <View style={{width:'90%',height:70,borderRadius:10,backgroundColor:'white',elevation:4,
    flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
         <View style={{}}><AntDesign name="message1" size={33} color="skyblue" /></View>
         <View>
            <Text style={{textAlign:'center',margin:4}}> Receive From Qudrat Ullah Khan</Text>
            <Text style={{textAlign:'center',marginBottom:5}}>Message</Text>
            </View>
            <View></View>
        </View>
      </View>
    </View>
  )
}
