import React, { useState } from 'react';
import { Modal, Text, View, Image, TextInput, TouchableOpacity, Alert, StyleSheet,ToastAndroid } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign, Feather, EvilIcons, Entypo, MaterialCommunityIcons, FontAwesome5, Fontisto, FontAwesome } from '@expo/vector-icons';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';





import * as ImagePicker from 'expo-image-picker';

import { firebaseConfig } from '../Components/Firebase/firebaseConfig';
import { TouchableHighlight } from 'react-native-gesture-handler';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const [PhoneNo, setPhoneNumber] = useState('');
  const [BloodGroup, setBloodGroup] = useState('');
  const [Location, setLocation] = useState('');

  const [imageError,setImageError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [PhoneError, setPhoneError] = useState(false)

  const [LocationError, setLocationError] = useState(false)
 
  const saveUserData = async (user) => {

    if (!image) {
      setImageError(true)


    // Stop further execution if there is an error
      
    } else {
      setImageError(false)
    }

    if (!username) {
      setNameError(true)
  
    }
    if (!PhoneNo || !(PhoneNo.length === 11)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    if (!Location) {
      setLocationError(true)
    } else {
      setLocationError(false)
    }
  

    try {
      // Upload the image to Firebase Storage
      const imageResponse = await fetch(image);
      const blob = await imageResponse.blob();
      const storageRef = ref(storage, `profile_images/${user.uid}`);
      await uploadBytes(storageRef, blob);

      // Get the image URL
      const imageUrl = await getDownloadURL(storageRef);

      // Save user data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        username,
        email,
        PhoneNo,
        BloodGroup,
        Location,
        imageUrl,
      });

      Alert.alert('Success', 'User created successfully!');
    } catch (error) {
      console.error('Error saving user data:', error);
      Alert.alert('Error', 'Failed to save user data.');
    }
  };

  const pickImage = async () => {
    const permissionsAllow = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionsAllow.granted === false) {
      alert('Please Allow Permissions');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickImageCam = async () => {
    const permissionsAllow = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionsAllow.granted === false) {
      alert('Please Allow Permissions');
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (userCredential && userCredential.user) {
        const user = userCredential.user;

        // Use optional chaining to avoid null or undefined errors
        await sendEmailVerification(user);

        // Save user data to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          username,
          email,
        });
      }
      else {
        throw new Error('User is undefined');
      }

      // Display success message
      Alert.alert('Success', 'User created successfully! Please verify your email.');


      if (user) {
        alert('User has been successfully added');
        navigation.navigate('LoginScreen', {
          email: email,
        });
        setEmail('');
        setPassword('');
        await saveUserData(user);
      } else {
        throw new Error('User is undefined');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('User has not been successfully added');
    }
  };
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.imgView}>
          <View style={{
            width: 105, height: 105, borderRadius: 61, backgroundColor: '#E55959', borderRadius: 52,
            alignItems: 'center', justifyContent: 'center'
          }}>
            {!image ?
              <View style={{ alignItems: 'center', position: 'absolute' }}>
                <EvilIcons name="user" size={120} color="white" style={{ right: 7 }} /></View> : null
            }<Image source={{ uri: image }} style={{ width: 95, height: 95, marginLeft: 0, borderRadius: 60 }} />

          </View>

          <View><TouchableOpacity style={{ width: 170, alignItems: 'flex-end', bottom: '85%', marginRight: 50 }}>
            <View style={{
              width: 35, height: 35, backgroundColor: 'orange', borderWidth: 1, borderRadius: 30,
              alignItems: 'center', justifyContent: 'center', borderColor: 'yellow',
            }}>
              <View></View>
              <View style={{ width: 32, height: 32, backgroundColor: '#B50102', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Entypo name="edit" size={20} color="white" onPress={() => setShow(true)} /></View>
            </View>
          </TouchableOpacity>
          </View>
        </View>
        {imageError ? <Text style={{ color: 'red', marginTop: 0, width: '100%', bottom: 20, textAlign: 'center', marginBottom: 8 }}>Please Take a Pic</Text> : null}

        <View style={styles.imgTextView}>
          <Image source={require('../Img/AuthImg/img2.png')} style={{ width: 134, height: 40 }} />
        </View>

        <View style={styles.TextinputStyle}>
        <View style={styles.inputContainerStyle}>
  <Entypo style={{ margin: 7 }} name="user" size={28} color="#B50102" />
  <View style={styles.verticleLine}></View>
  <TextInput
    style={{ width: '60%', fontSize: 18 }}
    value={username} onChangeText={(text) => setUsername(text)}
    placeholder='Enter Name' placeholderTextColor={'#B50102'}
  />
</View>
          { nameError ? (
  <Text style={{ color: 'red', marginTop: 0, width: '100%', bottom: 20, textAlign: 'left', marginLeft: 35, marginBottom: 0 }}>
    Please Enter a Name
  </Text>
) : null }
          <View style={styles.inputContainerStyle}>
            <MaterialCommunityIcons name="email" style={{ margin: 7, marginTop: 10 }} size={28} color="#B50102" />
            <View style={styles.verticleLine}></View>
            <TextInput style={{ width: '60%', fontSize: 18 }} placeholder='Enter Email' placeholderTextColor={'#B50102'}
              value={email} onChangeText={(text) => setEmail(text)} />
          </View>

          <View style={styles.inputContainerStyle}>
            <FontAwesome5 name="lock" size={25} color="#B50102" style={{ margin: 10 }} />
            <View style={styles.verticleLine}></View>
            <TextInput style={{ width: '60%', fontSize: 18 }}
              secureTextEntry={true} placeholder='Enter Password' placeholderTextColor={'#B50102'}
              value={password} onChangeText={(text) => setPassword(text)} />
          </View>

          <View style={styles.inputContainerStyle}>
            <FontAwesome name="phone" size={27} style={{ margin: 10 }} color="#B50102" />
            <View style={styles.verticleLine}></View>
      <TextInput style={{ width: '60%', fontSize: 18 }}
              keyboardType='number-pad' placeholder='Enter Phone Number' placeholderTextColor={'#B50102'}
              value={PhoneNo} onChangeText={(text) => setPhoneNumber(text)} /> 
              
          </View>
          { PhoneError ? (
  <Text style={{ color: 'red', marginTop: 0, width: '100%', bottom: 20, textAlign: 'left', marginLeft: 35, marginBottom: 0 }}>
     Enter a Valid PhoneNumber
  </Text>
) : null }
          
          <View style={styles.inputContainerStyle}>
            <Fontisto name="blood-drop" size={25} color="#B50102" style={{ margin: 10, paddingHorizontal: 3 }} />
            <View style={styles.verticleLine}></View>
             <TextInput
              style={{ width: '60%', fontSize: 18 }} placeholder='Enter Blood Group' placeholderTextColor={'#B50102'}
              value={BloodGroup} onChangeText={(text) => setBloodGroup(text)} /> 
          </View>
        
          


          <View style={styles.inputContainerStyle}>
            <Entypo name="location-pin" size={28} style={{ margin: 7 }} color="#B50102" />
            <View style={styles.verticleLine}></View>
            <TextInput style={{ width: '60%', fontSize: 18 }}
              placeholder='Enter Location' placeholderTextColor={'#B50102'}
              value={Location} onChangeText={(text) => setLocation(text)} />
          </View>
        </View>
        { LocationError? (
  <Text style={{ color: 'red', marginTop: 0, width: '100%', bottom: 20, textAlign: 'left', marginLeft: 20, marginBottom: 0 }}>
     Enter a Valid Location
  </Text>
) : null }

        <View style={{  justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
          <TouchableOpacity onPress={() => { handleSignUp(), saveUserData() }}
            style={{ width: '90%', marginVertical: 0, borderWidth: 2, borderColor: '#B50102', borderRadius: 30, backgroundColor: '#B50102' }}>
            <Text style={{ padding: 8, textAlign: 'center', fontWeight: '500', fontSize: 20, color: 'white' }}>REGISTER NOW</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 0,  flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
          <Text style={{ color: '#7E7E7E', fontSize: 18 }}>Already have an account? </Text>
          <Text style={{ color: '#B50102', marginLeft: 5, fontSize: 18, fontWeight: 'bold' }} onPress={() => navigation.navigate('LoginScreen')}>Log In.</Text>
        </View>
        <Modal visible={show} transparent={true} >
          <TouchableOpacity style={{
            flex: 1, alignItems: 'center', justifyContent: 'flex-end'
            , backgroundColor: 'rgba(0,0,0,0.5)'
          }} onPress={() => setShow(false)}>
            <View style={{
              width: '100%', height: 140, backgroundColor: 'white',
              borderTopLeftRadius: 30, borderTopRightRadius: 30,
              flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'
            }}>
              <Feather name='camera' size={50} color='#B50102' onPress={() => { setShow(false), pickImageCam() }} />
              <AntDesign name="picture" size={50} color="#B50102" onPress={() => { setShow(false), pickImage() }} />
            </View>
          </TouchableOpacity>
        </Modal>
      </View></KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  imgView: {
    
    justifyContent: 'center',
    alignItems: 'center', marginTop: 11,
    marginBottom: 0,

  },
  imgTextView: {
    
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 0, bottom: '3.0%'
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#B50102',
    marginRight: 20
  },
  TextinputStyle: {

    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    bottom: 10
  },
  inputContainerStyle: {
    borderWidth: 1,
    width: '90%',
    height: 50,
    borderRadius: 5,
    borderColor: '#bab7b6',
    backgroundColor: 'white',
    marginBottom: 20,
    flexDirection: 'row'
    , elevation: 4
  },
  imgStyle: {
    width: 25,
    height: 15,
    margin: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyleEmail: {
    width: 26,
    height: 19,
    margin: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyleLock: {
    width: 25,
    height: 28,
    margin: 14,
    alignItems: 'center',
    justifyContent: 'center',

  },
  imgStyleLockOne: {
    width: 24,
    height: 28,
    margin: 14,
    bottom: '1.4%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

