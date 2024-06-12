import React from "react"
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const ModalInfo = ({ closeModal, modalVisible }) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={closeModal}
		>
			<View style={styles.modalContainer}>
				<Text>Modal Content</Text>
				<TouchableOpacity onPress={closeModal}>
					<Text style={styles.closeButton}>Close</Text>
				</TouchableOpacity>
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
	closeButton: {
		fontSize: 18,
		color: "#fff",
		marginTop: 20,
	},
})

export default ModalInfo
