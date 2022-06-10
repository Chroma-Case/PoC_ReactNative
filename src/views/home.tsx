import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
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
		<ScrollView>
			<Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20 }}>Bienvenue, John!</Text>
			<Text style={styles.trackGroupHeader}>Passez à l'étape supérieure</Text>
			<ScrollView style={{ paddingVertical: 7 }} horizontal={true} contentContainerStyle={{}}>
				{Array.from({ length: 10 }, (_, i) =>
				<View style={{ paddingHorizontal: 8 }}>
					<TrackCard key={i} />
				</View>)}
			</ScrollView>
			<View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
				<Button label='Rechercher' color={'darkturquoise'} onPressed={() => { }} />
			</View>
			<Text style={styles.trackGroupHeader}>Dernières recherches</Text>
			<FlatGrid itemDimension={110}
				data={Array.from({ length: 7 })}
				renderItem={({ item: number }) => <TrackCard/>}
			/>
		</ScrollView>
	);
}