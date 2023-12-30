import React from 'react'
import { Image, ScrollView, Text, TextInput, View,TouchableOpacity } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
export default function InputData({navigation}) {
  return (
    <KeyboardAwareScrollView style={{flex:1}}>
        <Image source={require('../../image/SplashScreen/img9.png')} style={{width:'100%',
        height:480}}/>
        <ScrollView>
        <View>
            
            <View style={{marginBottom:22}}>
                <Text style={{marginHorizontal:20,fontSize:14,color:'background: rgba(141, 147, 165, 1);'}}>First Name</Text>
                <View style={{alignItems:'center'}}>
                <TextInput  placeholder='First Name'
                style={{width:'90%',padding:20,height:56,borderWidth:1,borderColor:'rgba(238, 238, 238, 1)',borderRadius:8,
            backgroundColor:'white'}}/>
                </View>
            </View>
            
            <View style={{marginBottom:22}}>
                <Text style={{marginHorizontal:20,fontSize:14,color:'background: rgba(141, 147, 165, 1);'}}>Last Name</Text>
                <View style={{alignItems:'center'}}>
                <TextInput placeholder='Last Name'
                 style={{width:'90%',padding:20,height:56,borderWidth:1,borderColor:'rgba(238, 238, 238, 1)',borderRadius:8,
            backgroundColor:'white'}}/>
                </View>
            </View>

            <View style={{marginBottom:22}}>
                <Text style={{marginHorizontal:20,fontSize:14,color:'background: rgba(141, 147, 165, 1);'}}>User Name</Text>
                <View style={{alignItems:'center'}}>
                <TextInput placeholder='User Name' style={{width:'90%',padding:20,height:56,borderWidth:1,borderColor:'rgba(238, 238, 238, 1)',borderRadius:8,
            backgroundColor:'white'}}/>
                </View>
                
            </View>
          
        </View>
<View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('LastScreen')}
             style={{width:300,height:56
                ,borderRadius:10,backgroundColor:'background: rgba(95, 156, 227, 1)',
                alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:16,fontWeight:'700',color:'white'}}>Ask to Access</Text>
                </TouchableOpacity>
                </View>
        </ScrollView>
    </KeyboardAwareScrollView>
  )
}
