import React from "react"
import { StyleSheet, View } from "react-native"
import TournamentScreen from "./src/screens/Tournament"

export default function App() {
	return (
		<View style={styles.container}>
			<TournamentScreen />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
