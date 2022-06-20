import { UserCompetencies } from "./user-competencies";

/// The identity the app user will be authentified as
export default class User {
	constructor(
		/// The display name of the user
		public name: string,
		/// The register name of the user, used to log into the app
		public login: string,
		/// count of notes correctly played over his course
		public goodNotes: number,
		/// record of the user's competencies
		public competencies?: UserCompetencies
	) {}
	
	get level() {
		return this.goodNotes / 10000;
	}
}