import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../assets/title.jpeg")}></Image>
      <View style={styles.box}>
        <TextInput style={styles.textinput} placeholder='Email'/>
        <TextInput style={styles.textinput} placeholder='Password' secureTextEntry={true}/>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
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
  image: {
    resizeMode: 'center',
    width: 400,
    height: '20%',
    marginBottom: 75
  },
  box: {
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    borderRadius: 20,
    padding: 30
  },
  textinput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  forgotText: {
    textAlign: 'center',
    marginBottom: 1,
    color: 'gray',
  },
  button: {
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 0,
    backgroundColor: 'rgb(0, 128, 0)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    margin: 0,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
});
