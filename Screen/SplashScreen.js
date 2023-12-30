import React from 'react'
import { Image } from 'react-native'
import { Text,View,StyleSheet } from 'react-native'

export default function SplashScreen({navigation}) {
    setTimeout(()=>{
       navigation.navigate('FindOnBoardScreen')
    },2500)
  return (
  <View style={styles.mainView}>
    <View style={styles.imgOneView}>
        <Image style={styles.imgOneStyle} source={require('../Img/Splash/splash1.png')}/>
    </View>
    <View style={styles.imgTwoView}>
    <Image style={styles.imgTwoStyle} source={require('../Img/Splash/splash2.png')}/>
    </View>
    <View style={styles.imgThreeView}>
    <Image source={require('../Img/Splash/splash3.png')}/>
    </View>
  </View>
  )
}

const styles=StyleSheet.create({
    mainView:{
        flex:1
    },
    imgOneView:{
        flex:.5,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    imgOneStyle:{
        width:165
    },
    imgTwoView:{
        flex:.2,
        justifyContent:'flex-end',
        alignItems:'center',
       
    },
    imgTwoStyle:{
        width:'90%',
        height:100
    },
    imgThreeView:{
        flex:.4,

    }


})