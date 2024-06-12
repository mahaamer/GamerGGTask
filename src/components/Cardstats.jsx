import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
const Cardstats = ({ scoring, bracket, duration }) => {
	// const [remainingTime, setRemainingTime] = useState("")

	// useEffect(() => {
	// 	if (tournamentDate) {
	// 		const months = {
	// 			Jan: 0,
	// 			Feb: 1,
	// 			Mar: 2,
	// 			Apr: 3,
	// 			May: 4,
	// 			Jun: 5,
	// 			Jul: 6,
	// 			Aug: 7,
	// 			Sep: 8,
	// 			Oct: 9,
	// 			Nov: 10,
	// 			Dec: 11,
	// 		}

	// 		const dateParts = tournamentDate[1].time.split(/[\s,]+/)
	// 		console.log(`dataaaaaaaaaaa : ${tournamentDate.time.split(/[\s,]+/)}`)
	// 		const month = months[dateParts[1]]
	// 		const day = parseInt(dateParts[2])
	// 		const year = parseInt(dateParts[3])
	// 		const timeParts = dateParts[4].split(":")
	// 		let hours = parseInt(timeParts[0])
	// 		const minutes = parseInt(timeParts[1].substring(0, 2))
	// 		const ampm = dateParts[5]

	// 		if (ampm === "PM" && hours !== 12) {
	// 			hours += 12
	// 		}

	// 		const endDate = new Date(year, month, day, hours, minutes)

	// 		const interval = setInterval(() => {
	// 			const now = new Date()

	// 			const difference = endDate - now

	// 			if (difference <= 0) {
	// 				clearInterval(interval)
	// 				setRemainingTime("Tournament has ended")
	// 			} else {
	// 				const days = Math.floor(difference / (1000 * 60 * 60 * 24))
	// 				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
	// 				const minutes = Math.floor((difference / 1000 / 60) % 60)
	// 				const seconds = Math.floor((difference / 1000) % 60)

	// 				setRemainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`)
	// 			}
	// 		}, 1000)

	// 		return () => clearInterval(interval)
	// 	}
	// }, [tournamentDate])

	return (
		<View style={styles.stats}>
			<View>
				<View style={[styles.statItem, { width: 150 }]}>
					<Image
						source={require("../assets/Images/game.png")}
						style={[styles.statIcon, { resizeMode: "contain" }]}
					/>
					<Text style={styles.statText}>{scoring}</Text>
				</View>
				<View style={[styles.statItem, { width: 75 }]}>
					<Image
						source={require("../assets/Images/users.png")}
						style={[styles.statIcon, { resizeMode: "contain" }]}
					/>
					<Text style={styles.statText}>{bracket}</Text>
				</View>
			</View>
			<View>
				<View style={[styles.statItem, { width: 90 }]}>
					<Image
						source={require("../assets/Images/duration.png")}
						style={[styles.statIcon, { resizeMode: "contain" }]}
					/>
					<Text style={styles.statText}>{duration}</Text>
				</View>
			</View>
			<View style={styles.separator} />
		</View>
	)
}

const styles = StyleSheet.create({
	stats: {
		flexDirection: "column",
		justifyContent: "space-around",
		marginTop: 10,
	},
	statItem: {
		marginBottom: 8,
		borderRadius: 15,
		backgroundColor: "rgba(1, 1,1, 0.5)",
		borderColor: "#fff",
		borderWidth: 1,
		width: 130,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 13,
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
	clockContainer: {
		alignItems: "flex-end",
		justifyContent: "center",
	},
	separator: {
		height: 1,
		backgroundColor: "#fff",
		marginVertical: 10,
		width: "80%",
		alignSelf: "center",
	},
})

export default Cardstats
