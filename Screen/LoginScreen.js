import React, { useState } from 'react'
import { Text, View,StyleSheet, Image, TextInput,TouchableOpacity,Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {initializeApp} from 'firebase/app'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,getAuth} from 'firebase/auth'
import { firebaseConfig } from '../Components/Firebase/firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function LoginScreen({navigation}) {
  const [showPassword,setShowPassword]=useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const HandlerPassword=()=>{
    setShowPassword(!showPassword)
  }
 

  const handleLogin = async () => {
    try {

      if(!email||!email.trim){
        Alert.alert('Validation Error', 'Please enter a valid email address.');
        return;
      }

    if(!password||!password.trim){
      Alert.alert('Validation Error', 'Please enter your password.');
        return;
    }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
    
      if (user && user.emailVerified) {
        // Allow the user to log in
        navigation.navigate('HomeScreen',{
        user:user});
      } else if (user && !user.emailVerified) {
        // User's email is not verified
        Alert.alert('Email Verification', 'Please verify your email before logging in.');
      } else {
        throw new Error('User is undefined');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };


  

  return (
    <KeyboardAwareScrollView style={{flex:1,backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
   <View  style={{flex:1,backgroundColor:'white',marginVertical:40}}>
      <View style={styles.imgView}>
        <Image source={require('../Img/AuthImg/img1.png')} style={{width:122,height:160}}/>
      </View>
      <View style={styles.imgTextView}>
      <Image source={require('../Img/AuthImg/img2.png')} style={{width:164,height:50}}/>
      </View>

      <View style={styles.TextinputStyle}>
         <View style={styles.inputContainerStyle}>
            <Image style={styles.imgStyle} source={require('../Img/inputIcon/Vector.png')}/>
            <View style={styles.verticleLine}></View>
            <TextInput keyboardType='email-address' style={{width:'60%',fontSize:18}} placeholder='Enter Email' placeholderTextColor={'#B50102'}
            value={email} onChangeText={(text)=>setEmail(text)}/>
         </View>

         <View style={styles.inputContainerStyle}>
            <Image style={styles.imgStyleLock} source={require('../Img/inputIcon/Vector1.png')}/>
            <View style={styles.verticleLine}></View>
            <TextInput style={{width:'60%',fontSize:18}} returnKeyType='emergency-call' secureTextEntry={!showPassword}
            placeholderTextColor={'#B50102'} placeholder='Enter Password'
            value={password} onChangeText={(text)=>setPassword(text)}/>
            <Entypo onPress={HandlerPassword} name={showPassword?"eye":'eye-with-line'} size={24} color="#B50102" style={{marginHorizontal:15}}/>
         </View>
       
       
      </View>
      <View style={{flex:.1,justifyContent:'flex-start',alignItems:'center'}}>
      <TouchableOpacity  onPress={handleLogin}
           style={{width:'90%',borderWidth:2,borderColor:password.length==6?'#B50102':'#a8adaa',borderRadius:30,backgroundColor:password.length>5?'#B50102':'#a8adaa',}}>
          <Text style={{padding:8,textAlign:'center',fontWeight:'500',fontSize:22,color:'white'}}>LOG IN</Text>
          </TouchableOpacity>
          </View>
          <View style={{flex:.05,alignItems:'center',justifyContent:'flex-start',marginTop:10,marginBottom:30}}>
       <Text style={{color:'#B50102',fontSize:18}}onPress={()=>navigation.navigate('ForgetPassword')}>Forgot Password?</Text>
          </View>
          <View style={{flex:.1,flexDirection:'row',alignItems:'flex-end',justifyContent:'center',marginTop:15}}>
             <Text style={{color:'#7E7E7E',fontSize:18}}>Don’t have an account?</Text>
             <Text style={{color:'#B50102',marginLeft:10,fontSize:18,fontWeight:'bold'}} onPress={()=>navigation.navigate('Register')}>Register Now.</Text>
          </View>
      </View>
      </KeyboardAwareScrollView>
  )
}

const styles=StyleSheet.create({
imgView:{
  flex:.50,
  marginTop:40,
  alignItems:'center',
  marginBottom:22
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
    backgroundColor: '#B50102',
    marginRight:20,
  },
  TextinputStyle:{
    flex:.4,
    marginVertical:22,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  inputContainerStyle:{
    borderWidth:1,
    width:'90%',
    height:50,
    borderRadius:5,
    borderColor: '#bab7b6',
    backgroundColor: '#F8F8F8',
    marginBottom: 25,
    flexDirection:'row',
    alignItems:'center',
    elevation:3
  },
  imgStyle:{
    width: 23,
    height: 17,
    margin: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyleLock:{
    width: 23,
    height: 26,
    margin: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})