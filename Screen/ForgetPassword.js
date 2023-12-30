import React from 'react'
import { Text, View, Image, ImageBackground,StyleSheet,TextInput,TouchableOpacity } from 'react-native'

export default function ForgetPassword() {
  return (
    <View style={{flex:1,}}>
        <View style={styles.AllDataView}>
            <ImageBackground source={require('../Img/AuthImg/img7.png')} 
            style={{width:'100%',height:'100%'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={styles.inputContainerStyle}>
            <Image style={styles.imgStyle} source={require('../Img/inputIcon/Vector.png')}/>
            <View style={styles.verticleLine}></View>
            <TextInput style={{width:'60%'}} placeholder='Enter Email'/>
         </View>
         <View style={{width:'80%',marginBottom:30}}>
         <Text style={{fontSize:18,textAlign:'center',color:'#7E7E7E'}}>
            Your password reset will be send in your registered 
            email address.</Text>
         </View>
         <TouchableOpacity 
           style={{width:'90%',borderWidth:2,borderColor:'#B50102',borderRadius:30,backgroundColor:'#B50102'}}>
          <Text style={{padding:7,textAlign:'center',fontWeight:'500',fontSize:20,color:'white'}}>Send</Text>
          </TouchableOpacity>
         </View>
            </ImageBackground>
        </View>
       
    </View>

  )
}
const styles=StyleSheet.create({
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#E2E2E2',
        marginRight:20
      },
    imgStyle:{
        width: 20,
        height: 15,
        margin: 13,
        alignItems: 'center',
        justifyContent: 'center',
      },
AllDataView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
inputContainerStyle:{
    borderWidth:1,
    width:'90%',
    height:50,
    borderRadius:5,
    borderColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
    marginBottom: 25,
    flexDirection:'row'
  },


})
