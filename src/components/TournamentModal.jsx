import React from "react"
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const TournamentModal = ({ modalVisible, setModalVisible }) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => setModalVisible(false)}
		>
			<View style={styles.modalContainer}>
				<View style={styles.modalContent}>
					<Text style={styles.modalText}>Tournament Details</Text>
					<TouchableOpacity
						style={styles.closeButton}
						onPress={() => setModalVisible(false)}
					>
						<Text style={styles.closeButtonText}>Close</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		width: 300,
		padding: 20,
		backgroundColor: "#fff",
		borderRadius: 10,
		alignItems: "center",
	},
	modalText: {
		fontSize: 20,
		marginBottom: 20,
	},
	closeButton: {
		backgroundColor: "#8A2BE2",
		padding: 10,
		borderRadius: 5,
	},
	closeButtonText: {
		color: "#fff",
	},
})

export default TournamentModal
