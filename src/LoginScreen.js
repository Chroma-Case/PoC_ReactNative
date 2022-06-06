import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <TextInput style={styles.textinput} placeholder='Email'/>
        <TextInput style={styles.textinput} placeholder='Password' secureTextEntry={true}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    borderRadius: 20,
    padding: 30
  },
  form: {
    margin: 10,
    
  },
  textinput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
    backgroundColor: "rgb(0, 128, 0)",
  },
  button: {
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 0,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
});
