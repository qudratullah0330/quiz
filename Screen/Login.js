import React from 'react'
import { Text, View,StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function Login({navigation}) {
  return (
    <View style={{flex:1}}>
        <View style={styles.imgView}>
          <Image  style={{width:'50%',height:'70%'}}source={require('../Img/onBoardingFindScreen/Img4.png')}/>
        </View>
        <View style={styles.headStyle}>
          <Text style={{fontSize:30,color:'#B50102'}}>Dare </Text>
          <Text style={{fontSize:30,color:'#595959'}}>To </Text>
          <Text style={{fontSize:30,color:'#B50102'}}>Donate</Text>
        </View>
        <View style={styles.textStyle}>
          <Text style={{width:'100%',lineHeight:31.5,fontWeight:'500',color:'#7E7E7E',fontSize:20,textAlign:'center'}}
          >You can donate for ones in need and </Text>
              <Text style={{width:'100%',lineHeight:31.5,fontWeight:'500',color:'#7E7E7E',fontSize:20,textAlign:'center'}}
          >request blood if you need.</Text>
          
        </View>
        <View style={styles.btnStyle}>
          <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')} 
          style={{marginBottom:15,width:'90%',borderWidth:2,borderColor:'#B50102',borderRadius:30}}>
          <Text style={{padding:10,textAlign:'center',fontWeight:'500',fontSize:22,color:'#B50102'}}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>navigation.navigate('Register')}
           style={{width:'90%',borderWidth:2,borderColor:'#B50102',borderRadius:30,backgroundColor:'#B50102'}}>
          <Text style={{padding:10,textAlign:'center',fontWeight:'500',fontSize:22,color:'white'}}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        
    </View>
  )
}

const styles=StyleSheet.create({
imgView:{
  flex:.5,
  alignItems:'center',
  justifyContent:'flex-end'
},
headStyle:{
  flex:.2,
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'row'
},
textStyle:{
  flex:.2,
  width:'100%',
  alignItems:'center'
},
btnStyle:{
  flex:.3,
 alignItems:'center'
  
}
})