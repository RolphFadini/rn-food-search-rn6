import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import ResultsDetails from "../components/ResultsDetail";

const ResultsShowScreen = ({ route }) => {
	const [result, setResult] = useState(null);
	const id = route.params.id;

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.name}>
				{result.name} - {result.location.address1}
			</Text>

			<Text style={styles.details}>
				{result.categories
					? result.categories.map((category) => category.title).join(", ")
					: "No categories."}
			</Text>

			<FlatList
				style={styles.list}
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => (
					<Image
						style={styles.image}
						source={{ uri: item }}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
	},
	name: {
		marginTop: 15,

		fontSize: 18,
		fontWeight: "bold",
	},
	details: {
		marginBottom: 10,
	},
	image: {
		height: 200,
		width: 300,
		marginBottom: 10,
		borderRadius: 4,
	},
	list: {},
});

export default ResultsShowScreen;
