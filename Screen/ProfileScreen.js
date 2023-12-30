import React,{useState,useEffect,useFocusEffect } from 'react'
import { View,Text,TouchableOpacity,Image,ScrollView,ImageBackground,Switch,ActivityIndicator,Linking } from 'react-native'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc,collection,onSnapshot } from 'firebase/firestore';
import { firebaseConfig } from '../Components/Firebase/firebaseConfig';
import { initializeApp } from 'firebase/app';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export default function ProfileScreen({navigation}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [user, setUser] = useState([]);
    const[userTwo,setUserTwo]=useState([])
  
    const [requestsData, setRequestsData] = useState([]);

  
   
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            // Fetch user data from Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            const userData = userDoc.data();
            setUser({id:user.uid,...userData});
            console.warn(user)
          } catch (error) {
            console.error('Error fetching user data:', error);
          } finally {
            // Set loading to false once data is fetched or an error occurs
            setLoading(false);
          }
        }
        
      });
  
      // Return the cleanup function in the useEffect
      return () => unsubscribe();
      
  
    }, [user]); // Empty dependency array to run it only once

 console.log('......,,,,,,,,,,,,,,IIIIIII')
    console.log('requestsData:', requestsData);
    
  console.log(requestsData,'RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')

  useEffect(() => {
    
      try {
        const requestsCollection = collection(db, 'request');
        const unsubscribe = onSnapshot(requestsCollection, (snapshot) => {
          const requestsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setRequestsData(requestsData);
          setLoading(true);

          // Set the totalRequests in user state to the count of the last request
          const lastRequest = requestsData.length > 0 ? requestsData[requestsData.length - 1] : null;
          const totalRequests = lastRequest ? lastRequest.totalRequests : 0;
          setUserTwo((prevUser) => ({ ...prevUser, totalRequests }));
        });

        // Don't forget to return the cleanup function
        return () => unsubscribe();
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      } finally {
        setLoading(true);
      }
     
    

    
  }, []);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const handleShare = async () => {
    try {
      const shareMessage = `Check out ${user.username}'s profile and their ${requestsData.length} requests!`;
      await Sharing.shareAsync({
        message: shareMessage,
      });
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };
  

  const PhoneCall=()=>{
    const PhoneNo=`tel:${user.PhoneNo}`
    Linking.openURL(PhoneNo)
  }

  const shareFile = async () => {
    try {
      const fileUri = FileSystem.cacheDirectory + 'https://example.com';
      await Sharing.shareAsync(fileUri);
    } catch (error) {
      console.error('Error sharing file:', error);
    }
  };
  return (
    <ScrollView>
    <View style={{flex:1,backgroundColor:'#faedee'}}>
        <View style={{flex:.1,justifyContent:'flex-start'}}>
     <View style={{ marginBottom: 0,margin:10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen') }}>
                    <Image source={require('../Img/HomePageImg/imgDonation.png')} style={{ width: 14, height: 40 }} />
                </TouchableOpacity>
                <View style={{}}>

                    <Text style={{ fontSize: 22, fontWeight: '500',  marginRight: 0 }}>Profile</Text>
                    
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('ResetPassword')}>
                    <Image source={require('../Img/ProfileScreen/img1.png')} style={{width:20.5,height:22}}/>
                </TouchableOpacity>
                
            </View>
            </View>

            <View style={{flex:.9,marginVertical:0}}>
                  
                    <View style={{alignItems:'center',justifyContent:'flex-start'}}>

                   {!loading? <Image source={{uri:user.imageUrl}} 
                    style={{width:120,height:120,borderRadius:60}}/>:   
                     <ActivityIndicator size="large" color="#B50102" />}
                  
                  </View>

                    <View style={{width:'100%',justifyContent:'center',marginVertical:'5%'}}>
                        <View>
                    {user?<Text style={{textAlign:'center',fontSize:30,lineHeight:33}}>{user.username}</Text>:<Text>no Name</Text>}
                    <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                        <Image source={require('../Img/FIndDoners/img4.png')} style={{width:18,height:18}}/>
                        <Text style={{color:'#7E7E7E',marginHorizontal:6,fontSize:18,marginTop:5}}>{user.Location}</Text>
                    </View>
               
                   <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:5,alignItems:'center'}}>
            
                    </View>

                   <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress={PhoneCall}
                    style={{width:120,backgroundColor:'#689593',borderRadius:8,flexDirection:'row',
                alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../Img/FIndDoners/img11.png')}style={{width:20,height:20}}/>
                        <Text style={{padding:8,textAlign:'center',color:'white',
                        fontSize:16,fontWeight:'500'}}>Call Now</Text>
                        
                    </TouchableOpacity>
                    </View>
                  
                 
                    </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                   <View style={{width:100,height:100,backgroundColor:'white',borderRadius:10
                   ,borderWidth:1,borderColor:'darkred',elevation:4,alignItems:'center',justifyContent:'center'}}>
                   <Text style={{fontSize:30}}>{user.BloodGroup}</Text>
                   <Text style={{margin:8,fontSize:14,color:'#7C7C7C'}}>Blood Type</Text>
                   </View>
                   <View style={{width:100,height:100 ,borderWidth:1,borderColor:'darkred',elevation:4,backgroundColor:'white',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                 {!loading?<Text style={{fontSize:30}}>{user.totalDonate}</Text>:
                   <ActivityIndicator size="large" color="#B50102" />}
                   <Text style={{margin:8,fontSize:14,color:'#7C7C7C'}}>Donated</Text>
                   </View> 

                   <View style={{width:100,height:100,backgroundColor:'white' ,borderWidth:1,borderColor:'darkred',elevation:4,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                   {!loading ? <Text style={{ fontSize: 30   }}>{user.totalRequests}</Text> : <ActivityIndicator size="large" color="#B50102" />}
                   <Text style={{margin:8,fontSize:14,color:'#7C7C7C'}}>Requested</Text>
                   </View>
                   </View>

                   <View style={{alignItems:"center",marginVertical:30,borderRadius:4,marginBottom:60}}>
                    <View style={{width:'90%',height:50,backgroundColor:'white',marginBottom:10 ,borderWidth:1,borderColor:'darkred',elevation:4,
                    alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                      <View style={{width:'50%',flexDirection:'row',margin:10,alignItems:'center',justifyContent:'space-between'}}>
                        <Image source={require('../Img/ProfileScreen/img2.png')} style={{width:24,height:24}}/>
                        <Text style={{color:'#7C7C7C'}}>Available for donate</Text>
                      </View>
                      <View>
                      <Switch 
        trackColor={{false: '#767577', true: '#B50102'}}
        thumbColor={'#FFFFFF'} 
        style={{margin:10}}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
                      </View>

                        </View>
                        <View style={{width:'90%',height:50,backgroundColor:'white',marginBottom:10 ,borderWidth:1,borderColor:'darkred',elevation:4,}}>
                        <View style={{width:'38%',flexDirection:'row',margin:10,alignItems:'center',justifyContent:'space-between'}}>
                        <Image source={require('../Img/ProfileScreen/img3.png')} style={{width:24,height:24}}/>
                        <Text style={{color:'#7C7C7C'}} onPress={shareFile}>Invite a friend</Text>
                      </View>
                        </View>
                        <View style={{width:'90%',height:50,backgroundColor:'white',marginBottom:10 ,borderWidth:1,borderColor:'darkred',elevation:4,}}>
                        <View style={{width:'28%',flexDirection:'row',margin:10,alignItems:'center',justifyContent:'space-between'}}>
                        <Image source={require('../Img/ProfileScreen/img4.png')} style={{width:24,height:24}}/>
                        <Text style={{color:'#7C7C7C'}} onPress={()=>navigation.navigate('Contact')}>Get help</Text>
                      </View>
                        </View>
                        <View style={{width:'90%',height:50,backgroundColor:'white' ,borderWidth:1,borderColor:'darkred',elevation:4}}>
                        <View style={{width:'28%',flexDirection:'row',margin:10,alignItems:'center',justifyContent:'space-between'}}>
                        <Image source={require('../Img/ProfileScreen/img5.png')} style={{width:24,height:24}}/>
                        <Text style={{color:'#7C7C7C'}} onPress={()=>navigation.navigate('LoginScreen')}>Sign out</Text>
                      </View>
                        </View>
                   </View>
                    </View>
    </View>
    </ScrollView>
  )
}
