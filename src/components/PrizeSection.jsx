import React, { useState } from "react"
import {
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import ModalInfo from "./ModalInfo"

const PrizeSection = ({ prize, tournamentTitle }) => {
	const [modalVisible, setModalVisible] = useState(false)

	let backgroundColor

	switch (tournamentTitle) {
		case "SoloShowdown Free":
			backgroundColor = "rgba(135, 206, 250, 0.8)"
			break
		case "Arena Free":
			backgroundColor = "rgba(255, 204, 0, 0.8)"
			break
		default:
			backgroundColor = "rgba(128, 0, 128, 0.6)"
			break
	}

	return (
		<View style={[styles.prizeSection, { backgroundColor }]}>
			<View style={styles.imageContainer}>
				<TouchableOpacity onPress={() => setModalVisible(true)}>
					<Image
						source={require("../assets/Images/info.png")}
						style={styles.infoIcon}
					/>
				</TouchableOpacity>
			</View>
			<Text style={styles.prize}>{prize}</Text>
			<View>
				<Text style={styles.prizeText}>PRIZE</Text>
				<Text style={styles.prizeSubText}>Per Bracket</Text>
			</View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<ModalInfo closeModal={() => setModalVisible(false)} />
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	prizeSection: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 10,
		backgroundColor: "rgba(128, 0, 128, 0.6)",
		padding: 5,
		borderRadius: 5,
	},
	imageContainer: {
		height: 60,
	},
	infoIcon: {
		width: 20,
		height: 20,
		marginRight: 5,
	},
	prize: {
		fontSize: 40,
		fontWeight: "bold",
		color: "#fff",
	},
	prizeText: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#fff",
		marginLeft: 5,
	},
	prizeSubText: {
		fontWeight: "bold",
		fontSize: 10,
		color: "#fff",
		marginLeft: 5,
	},
})

export default PrizeSection
