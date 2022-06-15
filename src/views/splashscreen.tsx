import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/button';

export const SplashScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require("../../assets/banner.png")}></Image>
			<Button label={'Login'} onPressed={() => navigation.navigate('Login')} color={'green'}/>
		</View>
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
		width: 300,
		height: 70,
		marginBottom: 200
	}
})