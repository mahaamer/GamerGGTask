import React from "react"
import { Image, SafeAreaView, StyleSheet, View } from "react-native"

const Container = ({ children }) => {
	return (
		<SafeAreaView style={styles.safeContainer}>
			<View style={styles.headerContainer}>
				<Image
					source={require("../assets/Images/Logo.png")}
					style={styles.headerLogo}
				/>
			</View>
			<View style={styles.container}>{children}</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 30,
		backgroundColor: "#8A2BE2",
		borderBottomEndRadius: 20,
		borderBottomStartRadius: 20,
	},
	headerLogo: {
		width: 200,
		height: 80,
		resizeMode: "contain",
	},
	container: {
		flex: 1,
		padding: 10,
		margin: 40,
	},
})

export default Container
