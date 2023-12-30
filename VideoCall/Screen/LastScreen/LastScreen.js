import React from 'react'
import { View,Text,Image } from 'react-native'

export default function LastScreen() {
  return (
   <View style={{flex:1}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',backgroundColor:'white',height:80}}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../../image/HomeScreen/img2.png')} style={{width:35,height:35}}/>
            <View style={{marginHorizontal:20}}>
                <Text style={{fontSize:15,fontWeight:'500'}}>Elon Musk</Text>
                <Text style={{fontSize:12,fontWeight:'400'}}>Sloagen oder Status what ever</Text>
             </View>
            </View>
             

            <View>
            <Image source={require('../../image/HomeScreen/img17.png')} style={{width:20,height:20}}/>
            </View>
        </View>
  <View style={{alignItems:'center',flex:1,marginVertical:65}}>
    <Image source={require('../../image/HomeScreen/img19.png')} style={{width:296,height:215}}/>
  </View>
   </View>
  )
}
