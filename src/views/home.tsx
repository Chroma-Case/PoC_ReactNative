import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Button from '../components/button';
import TrackCard from '../components/track-card';
import UserCompetenciesCard from '../components/user-competencies-card';
import { RandomUserCompetencies } from '../models/user-competencies';

const styles = StyleSheet.create({
	trackGroupHeader: {
		fontWeight: 'bold',
		padding: 20
	}
})

export const HomeScreen = () => {
	return (
		<ScrollView>
			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
				<View>
					<Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20 }}>Bienvenue, John!</Text>
					<Text style={styles.trackGroupHeader}>Passez à l'étape supérieure</Text>
					<FlatGrid itemDimension={110}
						scrollEnabled={false}
						data={Array.from({ length: 3 })}
						renderItem={({ item: number }) => <TrackCard/>}
					/>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
						<View>
							<Text style={styles.trackGroupHeader}>Mes compétences à améliorer</Text>
							<UserCompetenciesCard userCompetencies={RandomUserCompetencies()}/>
						</View>
						<View>
							<Text style={styles.trackGroupHeader}>Récemment joués</Text>
							<FlatGrid
								itemDimension={117}
								scrollEnabled={false}
								fixed
								data={Array.from({ length: 4 })}
								renderItem={({ item: number }) => <TrackCard/>}
							/>
						</View>
					</View>
				</View>
				<View>
					<View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
						<Button label='Rechercher' color={'darkturquoise'} onPressed={() => { }} />
					</View>
					<Text style={styles.trackGroupHeader}>Dernières recherches</Text>
					<FlatGrid itemDimension={110}
						scrollEnabled={false}
						data={Array.from({ length: 7 })}
						renderItem={({ item: number }) => <TrackCard/>}
					/>
				</View>
			</View>
		</ScrollView>
	);
}