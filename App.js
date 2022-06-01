import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { SplashScreen } from './src/SplashScreen';

export default function App() {
  const nav = createStackNavigator();

  return (
    <NavigationContainer>
      <nav.Navigator>
        <nav.Screen options={{headerShown: false}} name='SplashScreen' component={SplashScreen}/>
      </nav.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <SplashScreen></SplashScreen>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
