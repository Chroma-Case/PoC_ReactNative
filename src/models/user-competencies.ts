/// A record of a user's abilities, competencies, and their difficulties
/// Each value is a percentage, between 0 and 100
export interface UserCompetencies {
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
		pedal: Math.floor(Math.random()) % 100,
		leftHand: Math.floor(Math.random()) % 100,
		rightHand: Math.floor(Math.random()) % 100,
		precision: Math.floor(Math.random()) % 100,
		chord: Math.floor(Math.random()) % 100,
		arpeggio: Math.floor(Math.random()) % 100,
	};
}