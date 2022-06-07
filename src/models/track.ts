/// A track is a song that can be played on the app
export default interface Track {
	/// Display name of the track
	title: string;
	/// Name of the artist of the track
	/// If undefined, then the track is an exercise
	artist?: string;
}