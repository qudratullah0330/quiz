import React from 'react'
import { View,Text, Image, TouchableOpacity } from 'react-native'

export default function MCQsScreen({navigation}) {
  return (
 <View style={{flex:1}}>
    <View style={{width:'100%',height:'30%',backgroundColor:'#2f7a8f',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:32,fontWeight:'bold',color:'white'}}>All Type MCQs</Text>
    </View>
    <View style={{flex:1,backgroundColor:'white',alignItems:'center'}}>
      <View style={{width:'90%',backgroundColor:'white',height:'100%',bottom:'10%',
    elevation:4,borderRadius:10}}>
        <View style={{margin:10}}>
        <Text style={{fontSize:22,fontWeight:'bold'}}>All Type MCQS</Text>
        <View style={{flexDirection:'row',flexWrap:'wrap',alignItems:'center',justifyContent:'space-evenly'}}>
        <TouchableOpacity  onPress={()=>navigation.navigate('ComputerScreen')}
        style={{marginVertical:'15%',marginHorizontal:10,alignItems:'center'}}>
        <Image source={require('./img/img1.png')} style={{width:100,height:100}}/>
        <Text style={{fontWeight:'bold'}}>computer MCQs</Text>
        </TouchableOpacity>

        <View style={{marginVertical:'15%',alignItems:'center',marginHorizontal:10}}>
        <Image source={require('./img/img2.png')} style={{width:100,height:100}}/>
        <Text style={{fontWeight:'bold'}}>English MCQs</Text>
        </View>

        <View style={{marginVertical:'15%',marginHorizontal:10,alignItems:'center'}}>
        <Image source={require('./img/img3.png')} style={{width:100,height:100}}/>
        <Text style={{fontWeight:'bold'}}>Science MCQs</Text>
        </View>
        </View>
        </View>
    </View>
    </View>
 </View>
  )
}
