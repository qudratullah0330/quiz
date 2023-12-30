import React,{useState,useEffect} from 'react'
import { Text, View,Image, ScrollView, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc,getDocs,collection,onSnapshot  } from 'firebase/firestore';
import { firebaseConfig } from '../Components/Firebase/firebaseConfig';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export default function Anuncement({navigation}) {
  const [requestsData, setRequestsData] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {

      try {
        // Fetch requests data after user data is retrieved
        const requestsCollection = collection(db, 'Anouncement');
        
        // Listen for real-time updates
        const unsubscribe = onSnapshot(requestsCollection, (snapshot) => {
          const requestsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setRequestsData(requestsData);
          setLoading(false); // Set loading to false when data is fetched or updated
        });
  
        return () => {
          // Unsubscribe the listener when the component unmounts
          unsubscribe();
        };
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };
  
    const unsubscribe = onAuthStateChanged(auth, fetchUserData);
  
    return () => unsubscribe();
  }, []);

  return (
   <View style={{flex:1,alignItems:'center',marginVertical:0}}>
   <View style={{flex:.1,alignItems:'center',backgroundColor:'white',height:60,width:'100%',marginBottom:30,elevation:4,
   justifyContent:'center',
  borderRadius:0}}>
     <Text style={{fontSize:28,fontWeight:'800'}}>Announcement</Text>
   </View>

   <ScrollView style={{flex:.8,width:'100%'}}>
   <View style={{flex:.8,width:'100%',alignItems:'center',marginTop:20,marginBottom:10}}>
  <FlatList showsVerticalScrollIndicator={false} data={requestsData} renderItem={({item})=>(
      <View style={{width:320,marginBottom:10,backgroundColor:'white',height:180,elevation:4,
      borderRadius:10,borderWidth:1,borderColor:'darkred',
      alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:28,fontWeight:'700',color:'#B50102',margin:5}}>{item.Location}</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:15,fontWeight:'600'}}>Location : </Text>
        <Image source={require('../Img/FIndDoners/img4.png')} style={{width:20,height:20}}/>
        <Text style={{fontSize:15,fontWeight:'600'}}> {item.Location} </Text>
        </View>
        <Text style={{fontSize:15,fontWeight:'600',margin:5}}>Date : {item.Dateshow}</Text>
        <Text style={{fontSize:15,fontWeight:'600',margin:5,marginBottom:15}}>Total Amount Collected : {item.CollectedBlood}</Text>
        </View>
  )}/>
   </View>


   
   </ScrollView>

   <View style={{flex:.0000001,alignItems:'flex-end',width:'100%',justifyContent:'flex-end',}}>
    <TouchableOpacity onPress={()=>navigation.navigate('NewAnounce')} style={{width:180,borderRadius:15,height:55,backgroundColor:'#B50102',marginRight:10,
  alignItems:'center',justifyContent:'center',flexDirection:'row',justifyContent:'space-evenly'}}>
       <AntDesign name='plussquareo' color='white' size={30}/>
       
       <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>New Anounce</Text>
    </TouchableOpacity>
   </View>
   </View>
  )
}
