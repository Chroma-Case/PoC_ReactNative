/// A record of a user's abilities, competencies, and their difficulties
/// Each value is a percentage, between 0 and 100
export default interface UserCompetencies {
	pedal: number;
	leftHand: number;
	rightHand: number;
	precision: number;
	chord: number;
	arpeggio: number;
}

/// Creates a random record of competencies
export function RandomUserCompetencies(): UserCompetencies {
	return {
		pedal: Math.round(Math.random() * 100),
		leftHand: Math.round(Math.random() * 100),
		rightHand: Math.round(Math.random() * 100),
		precision: Math.round(Math.random() * 100),
		chord: Math.round(Math.random() * 100),
		arpeggio: Math.round(Math.random() * 100),
	};
}