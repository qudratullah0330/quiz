import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function ComputerScreen() {
  const Data = [
    {
      Qus: 'The term ‘Computer’ is derived from__________?',
      ansA: 'A',
      ansB: 'B',
      ansC: 'C',
      ansD: 'D',
      correctAns: 'A', // Specify the correct answer here
    },
    {
      Qus: 'Who is the father of Computer?',
      ansA: 'A',
      ansB: 'B',
      ansC: 'C',
      ansD: 'D',
      correctAns: 'B', // No correct answer specified for this question
    },
    {
      Qus: 'The term ‘Computer’ is derived from__________?',
      ansA: 'A',
      ansB: 'B',
      ansC: 'C',
      ansD: 'D',
      correctAns: 'C', // Specify the correct answer here
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f0' }}>
      <View
        style={{
          width: '100%',
          height: '15%',
          backgroundColor: '#2f7a8f',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>
          All Type MCQs
        </Text>
      </View>

      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <View style={{ flex: 1, marginVertical: 10, alignItems: 'center' }}>
            <View
              style={{
                width: '90%',
                borderRadius: 20,
                backgroundColor: 'white',
                elevation: 4,
              }}>
              <Text
                style={{
                  margin: 10,
                  fontSize: 16,
                  color: 'green',
                  fontWeight: 'bold',
                }}>
                {item.Qus}
              </Text>

              <View style={{ marginLeft: 20, marginVertical: 0 }}>
                <Text
                  style={{
                    margin: 4,
                    fontSize: 18,
                    fontWeight: item.correctAns === 'A' ? 'bold' : 'normal',
                  }}>
                  A. {item.ansA}
                </Text>
                <Text
                  style={{
                    margin: 4,
                    fontSize: 18,
                    fontWeight: item.correctAns === 'B' ? 'bold' : 'normal',
                  }}>
                  B. {item.ansB}
                </Text>
                <Text
                  style={{
                    margin: 4,
                    fontSize: 18,
                    fontWeight: item.correctAns === 'C' ? 'bold' : 'normal',
                  }}>
                  C. {item.ansC}
                </Text>
                <Text
                  style={{
                    margin: 4,
                    fontSize: 18,
                    fontWeight: item.correctAns === 'D' ? 'bold' : 'normal',
                  }}>
                  D. {item.ansD}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
