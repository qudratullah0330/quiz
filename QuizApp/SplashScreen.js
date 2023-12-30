import { View,Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function SplashScreen({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flex:1}}>
        <View style={{ width: '100%', height: '15%', backgroundColor: '#2f7a8f',
        borderBottomRightRadius:80, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>Quiz App</Text>
      </View>
      <View style={{flex:1,}}>
      <View style={{flex:1,flexDirection:'row',
    justifyContent:'space-evenly',alignItems:'center',marginHorizontal:30}}>
     
        
            <View style={{width:'35%',height:100,borderRadius:20,alignItems:'center'}}>
                
                <Text style={{fontSize:22,fontWeight:'bold'}}>Teacher</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                  <Image source={require('./img/img12.jpg')} style={{width:100,height:120}}/>
                </TouchableOpacity>
            </View>
            <View style={{width:'35%',height:100,borderRadius:20,alignItems:'center'}}>
            <Text style={{fontSize:22,fontWeight:'bold'}}>Student</Text>
                <Image source={require('./img/img13.jpg')} style={{width:60,height:130}}/>
            </View>
            
        </View>
         </View>
        </View>
        
        
    </View>
  )
}
