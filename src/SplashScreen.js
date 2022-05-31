import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export function SplashScreen() {

  return (
      <SafeAreaView>
        <View style={styles.container}>
        <Text>--- ChromaCase Logo ---</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Connect</Text>
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
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
});
