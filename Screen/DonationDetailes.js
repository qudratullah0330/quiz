import React,{useEffect,useState} from 'react'
import { Text, View,Image, ImageBackground, TouchableOpacity } from 'react-native'
import {firebaseConfig} from '../Components/Firebase/firebaseConfig'
import {getApp} from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {getFirestore,addDoc,collection,doc,updateDoc,getDoc,setDoc,onSnapshot} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export default function DonationDetailes({navigation,route}) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState([]);
  const [idTake,setIdTake]=useState()
  const [donationStatus, setDonationStatus] = useState(0);
  const item=route.params.item
  // Function to handle donation button click
// Function to handle donation button click
console.warn('......',idTake)
console.log('....///////////nnnnn',user)
const handleDonateButtonClick = async () => {
  const donationRef = doc(db, 'users', idTake);

  try {
    // Try to get the document first
    const docSnapshot = await getDoc(donationRef);

    if (docSnapshot.exists()) {
      // Document exists, update the field
      const currentTotalDonte = docSnapshot.data()?.totalDonate || 0;
      await updateDoc(donationRef, {
        totalDonate: currentTotalDonte + 1,
      });
      // Update the local state to trigger a re-render
      setDonationStatus((prevDonationStatus) => prevDonationStatus + 1);
    } else {
      // Document doesn't exist, create it
      await setDoc(donationRef, {
        totalDonate: 1, // or any initial value
      });
      // Update the local state to trigger a re-render
      setDonationStatus(1);
    }
  } catch (error) {
    console.error('Error updating donation count:', error);
  }
};

useEffect(() => {
    // Load initial donation status when the component mounts
    setDonationStatus(item.status || 0);
  }, [item.status]);console.log('//................',route.params.item)
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Fetch user data from Firestore
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          const userData = userDoc.data();
          setUser({id:user.uid,...userData});
          console.warn(user.uid)
          setIdTake(user.uid)
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
    

  }, []); // Empty dependency array to run it only once
 


  return (
    <View style={{flex:1}}>
        
        <View style={{marginBottom:0,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
            <Image  source={require('../Img/HomePageImg/imgDonation.png')} style={{width:44,height:44}}/>
        </TouchableOpacity>
        <View style={{}}>

            <Text style={{fontSize:22,fontWeight:'500',textAlign:'center',marginRight:40}}>Donation Request</Text>
        </View>
        <View>
       </View>
       </View>
      
      <View style={{margin:20}}>
        <View style={{margin:20}}>
        <Text style={{fontSize:18,fontWeight:'600',color:'#000000',marginBottom:10}}>{item.username}</Text>
        <Text style={{fontSize:18,fontWeight:'500',color:'#000000',marginBottom:0}}>Contact :{item.PhoneNumber}</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{width:'90%',backgroundColor:'#B50102',borderRadius:10}}>
            <Text style={{color:'white',fontSize:20,padding:5,textAlign:'center',fontWeight:'500'}}>Call Recipient</Text>
        </View>
        </View>
      </View>
     
      <View style={{alignItems:'center'}}>
        <View style={{width:'98%',alignItems:'center',}}>
            <ImageBackground source={require('../Img/DonationDetails/img1.png')} style={{width:'100%',height:500}}>
             <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <View style={{width:'90%',}}>
              <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10,textAlign:'center'}}>Request Detailes</Text>
              <View style={{borderBottomWidth:1,marginBottom:30}}></View>
              </View>

              <View style={{width:'90%',}}>
              <View style={{flexDirection:'row',marginBottom:0,alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{fontSize:18,fontWeight:'bold'}}>Blood Type</Text>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',
              bottom:10,justifyContent:'center',marginHorizontal:50}}>
              <Image source={require('../Img/img5.png')} style={{tintColor:'#B50102',marginRight:0,position:'absolute',margin:0,width:30,height:41.5}}/>
              <Text style={{color:'white'}}>{item.BloodGroup}</Text>
              </View>
              </View>
              <View style={{borderBottomWidth:1,marginBottom:30}}></View>
              </View>

              <View style={{width:'90%',}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:18,marginBottom:10,fontWeight:'bold'}}>Location</Text>
              <Text style={{fontSize:18,marginBottom:10,fontWeight:'bold',width:150}}>{item.Location}</Text>
              </View>
              <View style={{borderBottomWidth:1,marginBottom:30}}></View>
              </View>
              <View style={{width:'90%',}}>
                <View style={{flexDirection:'row',marginBottom:10,justifyContent:'space-between'}}>
              <Text style={{fontSize:18,fontWeight:'800',marginBottom:0}}>Hospital:</Text>
              <Text style={{fontSize:18,fontWeight:'bold',width:150}}>{item.Hospital}</Text>
              </View>
              <View style={{borderBottomWidth:1,marginBottom:33}}></View>
              </View>
              <TouchableOpacity  onPress={handleDonateButtonClick}style={{margin:30,alignItems:'center',}}>
              <View style={{width:180,backgroundColor:'#B50102',borderRadius:50}}>
              <Text style={{fontSize:24,color:'white',padding:10,textAlign:'center'}}>Donated</Text>
              </View>

              </TouchableOpacity>
               
              </View>
            </ImageBackground>
        </View>
      </View>
    </View>
  )
}
