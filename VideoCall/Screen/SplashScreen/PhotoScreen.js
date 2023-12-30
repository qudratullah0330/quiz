import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'

export default function PhotoScreen({navigation}) {
  return (
   <View style={{flex:1}}>
     <ImageBackground source={require('../../image/SplashScreen/img3.png')} style={{flex:1}}>
        <TouchableOpacity onPress={()=>navigation.navigate('SplashScreen')}
        style={{flex:.1,margin:20,justifyContent:'center'}}>
            <Image source={require('../../image/SplashScreen/img4.png')} style={{width:40,height:40}}/>
        </TouchableOpacity>
        <View style={{flex:1,justifyContent:'flex-end'}}>
            <Image source={require('../../image/SplashScreen/img5.png')} style={{height:40,width:408}}/>
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
            <Image source={require('../../image/SplashScreen/img6.png')} style={{height:32,margin:10,width:32}}/>
            <Image source={require('../../image/SplashScreen/img8.png')} style={{height:80,margin:10,width:80}}/>
            <Image source={require('../../image/SplashScreen/img7.png')} style={{height:32,margin:10,width:32}}/>
            </View>
            <View style={{alignItems:'center',margin:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate('InputData')}
             style={{width:300,height:56
                ,borderRadius:10,backgroundColor:'background: rgba(95, 156, 227, 1)',
                alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:16,fontWeight:'700',color:'white'}}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
     </ImageBackground>
   </View>
  )
}
