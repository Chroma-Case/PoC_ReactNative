import { TouchableHighlight } from "react-native";
import Track from "../models/track";
import { Text, View, Image } from "react-native";
import art from '../../assets/template_art.png';

const TrackCard = () => (
	<View style={{ borderColor: 'grey', borderWidth: 0.5, borderRadius: 9, alignSelf: 'flex-start', padding: 12 }}>
		<>
			<Image source={art} style={{ width: 80, height: 80}}/>
			<Text style={{ paddingVertical: 10 }}>Track #1</Text>
			<Text style={{ fontWeight: 'bold' }}>Artist #1</Text>
		</>
	</View>
);

export default TrackCard;