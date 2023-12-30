import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function SplashScreen({navigation}) {
  return (
  <View style={{flex:1}}>
    <View style={{marginVertical:'20%'}}>
     <Image source={require('../../image/SplashScreen/img1.png')} style={{width:'100%',height:315}}/>
    </View>
    <View style={{alignItems:'center'}}>
       <View>
        <Text style={{fontSize:22,fontWeight:'700',color:'background: rgba(0, 0, 0, 0.4)'}}>Allow access to your Files</Text>
        </View>
      <View style={{marginVertical:30}}>
        <Text style={{fontSize:17,fontWeight:'400',color:'background: rgba(0, 0, 0, 0.4)'}}>We need Access to ur Files . Your data 
            is secured and never sent to a cloud</Text>
      </View>
      
    </View>
    <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('PhotoScreen')}
         style={{width:164,backgroundColor:'background: rgba(95, 156, 227, 1)',borderRadius:10,
    opacity:.95}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                    <View>
                        <Image source={require('../../image/SplashScreen/img2.png')} style={{width:25,height:14}}/>
                    </View>
                    <Text style={{textAlign:'center',fontSize:22,padding:8,color:'white'}}>Access</Text>
                </View>
        </TouchableOpacity>
    </View>
  </View>
  )
}
