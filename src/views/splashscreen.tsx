import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/button';

export const SplashScreen = ({ navigation }) => {
	return (
		<View>
			{/* <Image source={{ uri: '../assets/banner.jpeg' }} style={{width: 400, height: 400}}/> */}
			<Button label={'Login'} onPressed={() => navigation.navigate('Home')} color={'green'}/>
		</View>
	);
}