import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
const Data = [
  {
    id: 1,
    question: 'The term ‘Computer’ is derived from__________?',
    options: [
      { id: 'A', text: 'Latin', correct: true },
      { id: 'B', text: 'Greek', correct: false },
      { id: 'C', text: 'Pak', correct: false },
      { id: 'D', text: 'Turkey', correct: false },
    ],
  },
  {
    id: 2,
    question: 'Who is the father of Computer?',
    options: [
      { id: 'A', text: 'Allen Turing', correct: false },
      { id: 'B', text: 'Charles Babbage', correct: true },
      { id: 'C', text: 'Simur Cray', correct: false },
      { id: 'D', text: 'Augusta Adaming', correct: false },
    ],
  },
  // Add more questions as needed
];

export default function Level1({navigation}) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [show,setShow]=useState(false)

  const ShowHndler=()=>{
    setShow(!show)
  }
 
  const correctCount = selectedAnswers.filter((q) => q.correct).length;
    const wrongCount = selectedAnswers.filter((q) => !q.correct).length;


  const handleAnswerPress = (questionId, answerId, isCorrect) => {
    const questionIndex = selectedAnswers.findIndex((q) => q.id === questionId);

    // Check if an answer is already selected for the current question
    if (questionIndex === -1 || !selectedAnswers[questionIndex].selected) {
      if (questionIndex === -1) {
        setSelectedAnswers([...selectedAnswers, { id: questionId, selected: answerId, correct: isCorrect }]);
      } else {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[questionIndex] = { id: questionId, selected: answerId, correct: isCorrect };
        setSelectedAnswers(updatedAnswers);
      }

      setSelectedAnswer(null);
    }
  };

  const renderOption = (questionId, option) => (
    <TouchableOpacity
      key={`${questionId}-${option.id}`}
      onPress={() => handleAnswerPress(questionId, option.id, option.correct)}
      style={{
        marginVertical: 1,
        width: '90%',
        backgroundColor:
          selectedAnswers.find((q) => q.id === questionId)?.selected === option.id
            ? selectedAnswers.find((q) => q.id === questionId)?.correct
              ? 'green'
              : 'red'
            : 'white',
        borderRadius: 20,
      }}
    >
      <Text style={{ margin: 5, fontSize: 18, color: selectedAnswers.find((q) => q.id === questionId)?.selected === option.id ? 'white' : 'black' }}>
        {option.text}
      </Text>
    </TouchableOpacity>
  );

  const renderQuestion = ({ item: question }) => (
    <View style={{ elevation: 4, marginBottom: 30, flex: 1, borderRadius: 10, width: '100%', backgroundColor: 'white' }}>
      <View style={{ margin: 10 }}>
        <Text>Question {question.id}</Text>
      </View>
      <View style={{ marginVertical: 0, margin: 10 }}>
        <Text style={{ fontSize: 20 }}>{question.question}</Text>
        {question.options.map((option) => renderOption(question.id, option))}
      </View>
    </View>
  );

  const TimeComplete=()=>{
     setShow(true)
  }


  return (
    <View style={{ flex: 1 }}>
      {/* Header */}

      <View style={{ width: '100%', height: '15%', backgroundColor: '#2f7a8f', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>Computer Quiz</Text>
      </View>
      <View style={{margin:20,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
        <View>
        <Text style={{fontSize:22,fontWeight:'bold'}}>Your Score</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <View style={{alignItems:'center'}}>
        <Text style={{fontSize:15,fontWeight:'bold',color:'green'}}>Correct</Text>
        <Text style={{fontSize:29,fontWeight:'bold',color:'green'}}>{correctCount}</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:15,fontWeight:'bold',color:'red'}}> Wrong</Text>
        <Text style={{fontSize:29,fontWeight:'bold',color:'red'}}>{wrongCount}</Text>
        <View>
          
        </View>
        </View>
        </View>
        </View>
        <CountdownCircleTimer
  size={100}
    isPlaying
    duration={3}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
    onComplete={TimeComplete}
  >
    {({ remainingTime }) => <Text style={{fontSize:30,fontWeight:'bold',color:'grey'}}>{remainingTime}</Text>}
  </CountdownCircleTimer>
  </View>
      {/* Quiz Content */}
      <View style={{ width: '100%', alignItems: 'center', marginVertical: 20, justifyContent: 'center' }}>
        <FlatList data={Data} renderItem={renderQuestion} showsVerticalScrollIndicator={false} keyExtractor={(item) => item.id.toString()} />
      </View>
      <Modal transparent visible={show}>
        <View  style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
          <View style={{width:'90%',height:'60%',backgroundColor:'#2f7a8f',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:22,marginBottom:10,fontWeight:'bold',color:'white'}}>Student Result</Text>
           
            <Text style={{fontSize:22,marginBottom:10,color:'white'}}>Stuent Name : Qudrat</Text>
            <Text style={{fontSize:22,marginBottom:10,color:'white'}}>Stuent Roll No : 17</Text>
            <Text style={{fontSize:22,marginBottom:10,color:'white'}}>Stuent Correct Score : {correctCount}</Text>
            <Text style={{fontSize:22,marginBottom:10,color:'white'}}>Stuent Wrong Score : {wrongCount}</Text>
            <Text style={{fontSize:22,marginBottom:40,color:'white'}}>Total Time Score : 10</Text>
            <View>
              <TouchableOpacity onPress={()=>{setShow(false),navigation.navigate('QuizHome')}}
               style={{width:150,borderRadius:15,backgroundColor:'red'}}>
                       <Text style={{color:'white',fontSize:22,padding:7,textAlign:'center',
                      fontWeight:'bold'}}>Close</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </Modal>
    </View>
  );
}
