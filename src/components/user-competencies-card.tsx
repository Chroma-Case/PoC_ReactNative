import { View, Text } from "react-native";
import type UserCompetencies from '../models/user-competencies';
import ProgressBar from 'react-native-progress/Bar';

const UserCompetenciesCard = (props: any) => {
	let userCompetencies: UserCompetencies = props.userCompetencies;
	let competenciesMap = new Map<string, number>([
		['Pedal', userCompetencies.pedal],
		['Left Hand', userCompetencies.leftHand],
		['Right Hand', userCompetencies.rightHand],
		['Precision', userCompetencies.precision],
		['Chord', userCompetencies.chord],
		['Arpeggio', userCompetencies.arpeggio],
	]);
	return (
		<View style={{ borderColor: 'grey', borderWidth: 0.5, borderRadius: 9, alignSelf: 'flex-start', padding: 20 }}>
			{Array.from(competenciesMap.keys()).map(key => (
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
					<View style={{ paddingRight: 10 }}>
						<Text>{key}</Text>
					</View>
					<View>
						<ProgressBar progress={competenciesMap.get(key) ?? 0 / 100} style={{ borderRadius: 10 }} color={'green'}/>
					</View>
				</View>
			))}
		</View>
	)
}

export default UserCompetenciesCard;