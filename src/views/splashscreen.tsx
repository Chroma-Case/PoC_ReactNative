import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import Button from '../components/button';
import FitImage from 'react-native-fit-image';
import logo from '../../assets/banner.png';
import React from 'react';

export const SplashScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}> 
			<FitImage
				style={{ height: 200, width: 300 }}
				resizeMode='center'
				source={logo}
			/>
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Button label={'Login'} onPressed={() => navigation.push('Login')} color={'green'} />
			</View>
		</View>
	);
}