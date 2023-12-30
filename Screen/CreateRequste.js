import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign } from '@expo/vector-icons';
import { firebaseConfig } from '../Components/Firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

const CreateRequest = ({ navigation, route }) => {
  const [show, setshow] = useState(false);
  const [username, setUsername] = useState('');
  const [Location, setLocation] = useState('');
  const [Hospital, setHospital] = useState('');
  const [BloodGroup, setBloodGroup] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Note, setNotes] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [totalRequests, setTotalRequests] = useState(0);

  const [totalDonte, settotalDonate] = useState(0);


  const [usernameError, setUsernameError] = useState(false);
  const [LocationError, setLocationError] = useState(false);
  const [HospitalError, setHospitalError] = useState(false);
  const [BloodGroupError, setBloodGroupError] = useState(false);
  const [PhoneNumberError, setPhoneNumberError] = useState(false);
  const [NoteError, setNotesError] = useState(false);

useEffect(() => {



  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userData = userDoc.data();
        setUser(user.uid);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    // Fetch totalRequests count from the collection
    const requestCollection = collection(db, 'request');
    const querySnapshot = await getDocs(requestCollection);
    const totalRequestsCount = querySnapshot.size;
    setTotalRequests(totalRequestsCount);
  });

  return () => unsubscribe();
}, []);

// ... (your existing code)

const PostRequest = async () => {
  try {

   
      const docRef = await addDoc(collection(db, 'request'), {
        username,
        Location,
        Hospital,
        BloodGroup,
        PhoneNumber,
        Note,
        totalRequests,
        totalDonte,
        userId: user,
      });
      console.warn('Document written with ID:', docRef.id);

      // Update the totalRequests count in the state
    setTotalRequests((prevTotalRequests) => prevTotalRequests + 1);

    // Update the totalRequests count in the user document
    await updateUserTotalRequests(user, 1);

    


    setUsername('');
    setLocation('');
    setHospital('');
    setBloodGroup('');
    setPhoneNumber('');
    setNotes('');

    setshow(false);

    
   
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

  const updateUserTotalRequests = async (userId, incrementBy) => {
    const userRef = doc(db, 'users', userId);

    try {
      const userDoc = await getDoc(userRef);
      const currentTotalRequests = userDoc.data()?.totalRequests || 0;

      await setDoc(
        userRef,
        { totalRequests: currentTotalRequests + incrementBy },
        { merge: true }
        
      );
    } catch (error) {
      console.error('Error updating user totalRequests:', error);
    }
  };

const Validation=()=>{
  if(!username){
    setUsernameError(true)
  }
  else{
    setUsernameError(false)
  }

  if(!Location){
    setLocationError(true)
  }
  else{
    setLocationError(false)
  }

  if(!Hospital){
    setHospitalError(true)
  }
  else{
    setHospitalError(false)
  }

  if(!BloodGroup){
    setBloodGroupError(true)
  }
  else{
    setBloodGroupError(false)
  }
  if(!PhoneNumber){
    setPhoneNumberError(true)
  }
  else{
    setPhoneNumberError(false)
  }

  if(!NoteError){
    setNotesError(true)
  }
  else{
    setNotesError (false)
  }

  if(usernameError&&LocationError&&HospitalError&&BloodGroupError&&NoteError&&NoteError){
setshow(false)
alert('please enter correct Value')
return
  }
 if(!usernameError||!LocationError||!HospitalError||!BloodGroupError||!NoteError||!NoteError){
  setshow(true)
 }
}

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 0.1, justifyContent: 'flex-start' }}>
          <View
            style={{
              marginBottom: 0,
              margin: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Image
                source={require('../Img/HomePageImg/imgDonation.png')}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '500',
                  marginRight: 40,
                }}
              >
                Request Blood
              </Text>
            </View>
            <View></View>
          </View>
        </View>
        <View style={styles.imgTextView}>
          <Image
            source={require('../Img/AuthImg/img2.png')}
            style={{ width: 164, height: 50 }}
          />
        </View>

        <View style={styles.TextinputStyle}>
        {!usernameError?null :(<Text style={{color:'red',marginRight:'40%'}}>Please enter corect Location</Text>)}

          <View style={styles.inputContainerStyle}>
            <Image
              style={styles.imgStyleLock}
              source={require('../Img/RequestScreen/img1.png')}
            />
            <View style={styles.verticleLine}></View>
            <TextInput
              style={{ width: '60%', fontSize: 18 }}
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Enter Name"
              placeholderTextColor={'#B50102'}
            />
          </View>

          {!LocationError?null :(<Text style={{color:'red',marginRight:'40%'}}>Please enter corect Location</Text>)}

          <View style={styles.inputContainerStyle}>
            <Image
              style={styles.imgStyleLocation}
              source={require('../Img/RequestScreen/img2.png')}
            />
            <View style={styles.verticleLine}></View>
            <TextInput
              style={{ width: '60%', fontSize: 18 }}
              value={Location}
              onChangeText={(text) => setLocation(text)}
              placeholder="Enter Location"
              placeholderTextColor={'#B50102'}
            />
          </View>

          {!HospitalError?null :(<Text style={{color:'red',marginRight:'40%'}}>Please enter corect Location</Text>)}

          <View style={styles.inputContainerStyle}>
            <Image
              style={styles.imgStyleLockOne}
              source={require('../Img/RequestScreen/img3.png')}
            />
            <View style={styles.verticleLine}></View>
            <TextInput
              style={{ width: '60%', fontSize: 18 }}
              value={Hospital}
              onChangeText={(text) => setHospital(text)}
              placeholder="Enter Hospital"
              placeholderTextColor={'#B50102'}
            />
          </View>


          {!BloodGroupError?null :(<Text style={{color:'red',marginRight:'40%'}}>Please enter corect Location</Text>)}

          <View style={styles.inputContainerStyle}>
            <Image
              style={styles.imgStyleLock}
              source={require('../Img/RequestScreen/img4.png')}
            />
            <View style={styles.verticleLine}></View>
            <TextInput
              style={{ width: '60%', fontSize: 18 }}
              value={BloodGroup}
              onChangeText={(text) => setBloodGroup(text)}
              placeholder="Enter Blood Group"
              placeholderTextColor={'#B50102'}
            />
          </View>

          {!PhoneNumberError?null :(<Text style={{color:'red',marginRight:'40%'}}>Please enter corect Location</Text>)}

          <View style={styles.inputContainerStyle}>
            <Image
              style={styles.imgStyleLock}
              source={require('../Img/RequestScreen/img5.png')}
              placeholderTextColor={'#B50102'}
            />
            <View style={styles.verticleLine}></View>
            <TextInput
              value={PhoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              style={{ width: '60%', fontSize: 18 }}
              placeholder="Enter Phone Number"
              placeholderTextColor={'#B50102'}
            />
          </View>


          {!NoteError?null :(<Text style={{color:'red',marginRight:'40%'}}>Please enter corect Location</Text>)}

          <View style={styles.inputContainerStyle}>
            <Image
              style={styles.imgStyleNotesAdd}
              source={require('../Img/RequestScreen/img6.png')}
            />
            <View style={styles.verticleLine}></View>
            <TextInput
              style={{ width: '60%', fontSize: 18 }}
              value={Note}
              onChangeText={(text) => setNotes(text)}
              placeholder="Add a Notes"
              placeholderTextColor={'#B50102'}
            />
          </View>
        </View>
<Text>{totalRequests}</Text>

        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => Validation()}
            style={{
              width: '90%',
              marginVertical: 2,
              borderWidth: 2,
              borderColor: '#B50102',
              borderRadius: 30,
              backgroundColor: '#B50102',
            }}
          >
            <Text
              style={{
                padding: 13,
                textAlign: 'center',
                fontWeight: '500',
                fontSize: 20,
                color: 'white',
              }}
            >
              Submit Data
            </Text>
          </TouchableOpacity>
        </View>

        <Modal visible={show} transparent={true}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            <View
              style={{
                width: '90%',
                height: '60%',
                backgroundColor: 'white',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                style={{ width: '90%', height: 188 }}
                source={require('../Img/RequestScreen/img7.png')}
              />
              <View style={{ width: 250, margin: 30 }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#26323880',
                    fontSize: 18,
                    marginBottom: 3,
                  }}
                >
                  Blood is successfully
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#26323880',
                    fontSize: 18,
                  }}
                >
                  requested.
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setshow(false);
                    PostRequest();
                    
                  }}
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: '#B50102',
                    borderRadius: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <AntDesign name="arrowright" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  imgView: {
    flex: 0.20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11,
    marginBottom: 0,
  },
  imgTextView: {
    flex: 0.09,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#B50102',
    marginRight: 20,
  },
  TextinputStyle: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainerStyle: {
    borderWidth: 1,
    width: '90%',
    height: 60,
    borderRadius: 5,
    borderColor: '#B50102',
    backgroundColor: '#F8F8F8',
    marginBottom: 25,
    flexDirection: 'row',
    elevation: 3,
  },
  imgStyle: {
    width: 25,
    height: 15,
    margin: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyleLocation: {
    width: 22,
    height: 22,
    margin: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyleLock: {
    width: 25,
    height: 28,
    margin: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyleNotesAdd: {
    width: 25,
    height: 20,
    margin: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyleLockOne: {
    width: 24,
    height: 28,
    margin: 18,
    bottom: '1.4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CreateRequest;
