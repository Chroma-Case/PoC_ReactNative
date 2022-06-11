import SearchBar from "react-native-dynamic-search-bar";
import React, { Component, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import TrackCard from "../components/track-card";
import { FlatGrid } from "react-native-super-grid";
const SearchScreen = () => {
	const [searched, setSearch] = useState(false);
	const [loading, setLoading] = useState(false);
	return (
		<SafeAreaView >
		<View style={{ paddingVertical: 20 }}>
			<SearchBar
				onChangeText={(_) => {
					setLoading(true);
					setTimeout(
						_ => {
							setLoading(false);
							setSearch(true);
						},
						2000
					);
				}}
				onClearPress={() => {setSearch(false)}}
			/>
			{
				loading ? <Text>Loading</Text>
				: searched ? <FlatGrid
					itemDimension={110}
					data={Array.from({ length: searched ? 20 : 0 })}
					renderItem={({ item: number }) => <TrackCard/>}
				/>
				: <></>

			}
		</View>
		</SafeAreaView>
	);
}

export default SearchScreen;