import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const CardHeader = ({ logo, title, time, id }) => (
	<View>
		<View style={styles.header}>
			<Image source={logo} style={styles.logo} />
			<Text style={styles.title}>{title}</Text>
		</View>
		<View style={styles.separator} />
		<View style={styles.details}>
			<Text style={styles.time}>{time}</Text>
			<Text style={styles.id}>ID: {id}</Text>
		</View>
	</View>
)

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
	},
	logo: {
		width: 30,
		height: 30,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
		marginLeft: 10,
	},

	details: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10,
	},
	time: {
		color: "#fff",
	},
	id: {
		color: "#fff",
	},
})

export default CardHeader
