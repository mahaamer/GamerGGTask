import React, { useEffect, useState } from "react"
import {
	ActivityIndicator,
	FlatList,
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"
import tournamentsData from "../constants/tournamentsData"

import CardHeader from "./CardHeader"
import Cardstats from "./Cardstats"
import PrizeSection from "./PrizeSection"
import TournamentModal from "./TournamentModal"

const getCardContentStyle = (tournamentTitle) => {
	switch (tournamentTitle) {
		case "SoloShowdown Free":
			return {
				...styles.cardContent,
				backgroundColor: "rgba(173, 216, 230, 0.5)",
				buttonColor: "#FFF",
				buttonHoverColor: "#87CEEB",
			}
		case "Arena Free":
			return {
				...styles.cardContent,
				backgroundColor: "rgba(184, 134, 11, 0.5)",
				buttonColor: "#FFF",
				buttonHoverColor: "#DAA520",
			}
		default:
			return {
				...styles.cardContent,
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				buttonColor: "#FFF",
				buttonHoverColor: "#9370DB",
			}
	}
}

const TournamentCard = ({ item }) => {
	const [modalVisible, setModalVisible] = useState(false)
	const [buttonStyle, setButtonStyle] = useState({
		borderColor: getCardContentStyle(item.title).buttonColor,
	})

	const [remainingTime, setRemainingTime] = useState(24 * 60 * 60) // 24 hours in seconds

	useEffect(() => {
		const timer = setInterval(() => {
			setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	const formatTime = (seconds) => {
		const hrs = Math.floor(seconds / 3600)
		const mins = Math.floor((seconds % 3600) / 60)
		const secs = seconds % 60
		return `${hrs.toString().padStart(2, "0")}:${mins
			.toString()
			.padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
	}
	const handlePressIn = () => {
		setButtonStyle({
			backgroundColor: getCardContentStyle(item.title).buttonHoverColor,
			borderColor: getCardContentStyle(item.title).buttonHoverColor,
		})
	}
	const handlePressOut = () => {
		setButtonStyle({
			backgroundColor: "transparent",
			borderColor: getCardContentStyle(item.title).buttonColor,
		})
	}
	return (
		<View key={item.id} style={styles.cardContainer}>
			<ImageBackground
				source={item.background}
				resizeMode="cover"
				style={styles.card}
				imageStyle={{ borderRadius: 20 }}
			>
				<View style={getCardContentStyle(item.title)}>
					<CardHeader
						logo={item.logo}
						title={item.title}
						time={item.time}
						id={item.id}
					/>
					<PrizeSection prize={item.prize} tournamentTitle={item.title} />
					<Cardstats
						scoring={item.scoring}
						bracket={item.bracket}
						duration={item.duration}
						tournamentDate={item.time}
					/>
					<View style={styles.joinContainer}>
						<TouchableOpacity
							style={[styles.joinButton, buttonStyle, { borderWidth: 2 }]}
							onPress={() => setModalVisible(true)}
							onPressIn={handlePressIn}
							onPressOut={handlePressOut}
						>
							<Text style={styles.joinButtonText}>Join Tournament</Text>
						</TouchableOpacity>
						<View style={styles.clockContainer}>
							<Image
								source={require("../assets/Images/clock.png")}
								style={[
									styles.statIcon,
									{ resizeMode: "contain", marginLeft: 70 },
								]}
								width={70}
								height={20}
							/>
							<Text style={styles.statText}>{formatTime(remainingTime)}</Text>
						</View>
					</View>
				</View>
			</ImageBackground>
			<TournamentModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</View>
	)
}

const TournamentList = () => {
	const [searchQuery, setSearchQuery] = useState("")
	const [tournaments, setTournaments] = useState(tournamentsData)
	const [loading, setLoading] = useState(false)

	const filterTournaments = (tournaments, query) => {
		if (!query) return tournaments
		return tournaments.filter((tournament) =>
			tournament.game.toLowerCase().includes(query.toLowerCase())
		)
	}

	const loadMoreTournaments = () => {
		if (loading) return

		setLoading(true)
		setTimeout(() => {
			setTournaments(tournamentsData)
			setLoading(false)
		}, 1500)
	}
	const filteredTournaments = filterTournaments(tournaments, searchQuery)

	return (
		<>
			<FlatList
				style={styles.container}
				ListHeaderComponent={
					<View style={styles.filterContainer}>
						<Text style={styles.filterText}>Filter by Game:</Text>
						<TextInput
							style={styles.searchInput}
							placeholder="Enter game name"
							value={searchQuery}
							onChangeText={setSearchQuery}
						/>
					</View>
				}
				data={filteredTournaments}
				renderItem={({ item }) => <TournamentCard item={item} />}
				keyExtractor={(item) => item.id.toString()}
				onEndReached={loadMoreTournaments}
				onEndReachedThreshold={0.5}
				ListFooterComponent={
					loading ? <ActivityIndicator size="large" color="#8A2BE2" /> : null
				}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	filterContainer: {
		padding: 10,
		backgroundColor: "#f1f1f1",
		borderBottomWidth: 1,
		borderColor: "#ddd",
		borderRadius: 5,
		marginBottom: 10,
	},
	filterText: {
		fontSize: 16,
		marginBottom: 5,
		fontWeight: "bold",
	},
	searchInput: {
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#ddd",
		color: "#333",
	},
	cardContainer: {
		marginBottom: 20,
	},
	card: {
		borderRadius: 20,
		padding: 20,
		justifyContent: "center",
	},
	cardContent: {
		borderRadius: 20,
		padding: 10,
	},
	joinButton: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		borderWidth: 2,
		padding: 10,
		borderRadius: 25,
		marginTop: 10,
		justifyContent: "center",
	},
	joinButtonText: {
		color: "#fff",
		fontSize: 16,
		marginRight: 5,
	},

	joinContainer: {
		flexDirection: "row",
	},
	clockContainer: {
		alignItems: "flex-end",
		justifyContent: "center",
	},
	statIcon: {
		width: 25,
		marginBottom: 5,
		marginRight: 10,
		height: 25,
	},
	statText: {
		color: "#fff",
		fontWeight: "bold",
		marginRight: 5,
	},
})

export default TournamentList
