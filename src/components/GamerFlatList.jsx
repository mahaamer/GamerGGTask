import { FontAwesome5 } from "@expo/vector-icons"
import React, { useState } from "react"
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native"
import TournamentCard from "./TournamentCard" // Adjust the import path as necessary

const GamerFlatList = ({ filteredTournaments }) => {
	const [loading, setLoading] = useState(false)

	const loadMoreTournaments = () => {
		if (loading) return
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}

	const renderIndicator = () => (
		<View style={styles.indicatorContainer}>
			<ActivityIndicator size="large" color="#8A2BE2" />
			<FontAwesome5 name="dot-circle" size={24} color="#8A2BE2" />
		</View>
	)

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				data={filteredTournaments}
				renderItem={({ item }) => (
					<TournamentCard tournament={item} onPressJoin={() => {}} />
				)}
				keyExtractor={(item) => item.id.toString()}
				onEndReached={loadMoreTournaments}
				onEndReachedThreshold={0.4}
				ListFooterComponent={loading && renderIndicator()}
				alwaysBounceVertical={true}
				bounces={true}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	list: {
		flex: 1,
	},
	indicatorContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 20,
	},
})

export default GamerFlatList
