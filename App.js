import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [score, setScore] = useState('0');
  const [message, setMessage] = useState('Guess a number between 1 - 100');

  const buttonPressed= () => {

    if (input < Math.floor(Math.random() * 100) + 1) {
        setMessage('Your guess ' + input + ' is too low.');
        setScore(parseInt(score) + 1);
    } else if (input > Math.floor(Math.random() * 100) + 1) {
        setMessage('Your guess ' + input + ' is too high.');
        setScore(parseInt(score) + 1);
    } else {
       Alert.alert('You guessed the number in ' + score + ' guesses');
  }
};

  return (
    <View style={styles.container}>
      <Text> {message} </Text>
      <TextInput
      style={styles.input} 
      keyboardType= 'numeric'
      onChangeText={(input) => setInput(input)}
      value={input}
    />
    <Button onPress= {buttonPressed} title='MAKE GUESS' />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '30%',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white'
  }

});
