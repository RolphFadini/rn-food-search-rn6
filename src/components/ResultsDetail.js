import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetails = ({ result }) => {
	const { name, image_url, review_count, rating } = result;

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: image_url }}
			/>
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.details}>
				{rating} Stars, {review_count} Reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 15,
	},
	image: {
		width: 250,
		height: 120,
		borderRadius: 4,
		marginBottom: 5,
	},
	name: {
		fontWeight: "bold",
	},
});

export default ResultsDetails;
