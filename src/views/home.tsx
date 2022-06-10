import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/button';
import TrackCard from '../components/track-card';

export const HomeScreen = () => {
	return (
		<View>
			<Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20 }}>Welcome John</Text>
			<TrackCard/>
		</View>
	);
}