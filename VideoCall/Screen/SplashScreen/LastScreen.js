import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function LastScreen({navigation}) {
    useEffect(()=>{
      setTimeout(() => {
        navigation.navigate('TabBarNavigation')
      }, 3000);
    },[])
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:15,fontWeight:'700',color:'background: rgba(0, 0, 0, 1);',marginBottom:11}}>
Need Loading animation </Text>
<Text style={{fontSize:15,fontWeight:'700',color:'background: rgba(0, 0, 0, 1);'}}>
    https://codepen.io/rickzanutta/pen/wvXXPZ</Text>
    </View>
  )
}
