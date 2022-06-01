import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import { LoginScreen } from './Login';

export function SplashScreen() {

  return (
      <SafeAreaView>
        <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/title.jpeg")}></Image>
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
  button: {
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  image: {
    resizeMode: 'center',
    width: 300,
    height: 70,
    marginBottom: 200
  }
});
