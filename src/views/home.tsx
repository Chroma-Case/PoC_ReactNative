import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Button from '../components/button';
import TrackCard from '../components/track-card';

const styles = StyleSheet.create({
	trackGroupHeader: {
		fontWeight: 'bold',
		padding: 20
	}
})

export const HomeScreen = () => {
	return (
		<View>
			<Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20 }}>Bienvenue, John!</Text>
			<Text style={styles.trackGroupHeader}>Passer à l'étape supérieure</Text>
			<ScrollView style={{ paddingVertical: 10 }} horizontal={true} contentContainerStyle={{  }}>
				{Array.from({ length: 10 }, (_, i) => 
				<View style={{paddingHorizontal: 10}}>
					<TrackCard key={i}/>
				</View>)}
			</ScrollView>
			
		</View>
	);
}