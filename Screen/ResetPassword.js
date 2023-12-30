import React from 'react'
import { Text, View,Image,TouchableOpacity, ImageBackground,StyleSheet,TextInput } from 'react-native'

export default function ResetPassword({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
       <View style={{flex:.1,justifyContent:'flex-start'}}>
     <View style={{ marginBottom: 0,margin:10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('ProfileScreen')}>
                    <Image source={require('../Img/HomePageImg/imgDonation.png')} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
                <View style={{}}>

                    <Text style={{ fontSize: 22, fontWeight: '500',  marginRight: 0 }}>Reset Password</Text>
                    
                </View>
               <View></View>
                
            </View>
            </View>
            <View style={{flex:.9,width:'100%',alignItems:'center',justifyContent:'center'}}>
                <View></View>
            
             <ImageBackground source={require('../Img/ResetPassword/img1.png')} style={{width:'100%',height:'95%'}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View>
             <Text style={{fontSize:20,marginBottom:10}}>Old Password</Text>
             <View style={styles.inputContainerStyle}>
                
            <Image style={styles.imgStyleLock} source={require('../Img/inputIcon/Vector1.png')}/>
            <View style={styles.verticleLine}></View>
           
            <TextInput style={{width:'80%'}} secureTextEntry placeholder='Enter Password'/>
         </View>
         </View>

         <View>
             <Text style={{fontSize:20,marginBottom:10}}>New Password</Text>
             <View style={styles.inputContainerStyle}>
                
            <Image style={styles.imgStyleLock} source={require('../Img/inputIcon/Vector1.png')}/>
            <View style={styles.verticleLine}></View>
           
            <TextInput style={{width:'80%'}} secureTextEntry placeholder='Enter Password'/>
         </View>
         </View>

         <View style={{marginBottom:20}}>
             <Text style={{fontSize:20,marginBottom:10}}>Confirm New Password </Text>
             <View style={styles.inputContainerStyle}>
                
            <Image style={styles.imgStyleLock} source={require('../Img/inputIcon/Vector1.png')}/>
            <View style={styles.verticleLine}></View>
           
            <TextInput style={{width:'80%'}} secureTextEntry placeholder='Enter Password'/>
         </View>
         </View>
         <View style={{}}>
           <View style={{width:214,borderRadius:50,backgroundColor:'#B50102' }}>
            <Text style={{color:'white',padding:7,fontSize:22,textAlign:'center'}}>Reset Password</Text>
           </View>
         </View>
         </View>
             </ImageBackground>
            </View>
    </View>
  )
}const styles=StyleSheet.create({
    imgView:{
      flex:.3,
      justifyContent:'center',
      alignItems:'center'
    },
    imgTextView:{
        flex:.1,
    justifyContent:'flex-start',
    alignItems:'center',
    marginBottom:30
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#E2E2E2',
        marginRight:20
      },
      TextinputStyle:{
        flex:.4,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
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
      imgStyle:{
        width: 18,
        height: 13,
        margin: 17,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imgStyleLock:{
        width: 18,
        height: 20,
        margin: 17,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      
    })
