//import libraries
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const Perfil = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Perfil</Text>
			<Button
				title="Publicacion"
				onPress={() => {
					// push agrega una nueva ventana al stack
					// navigate si la ventana existe, lo envía a esa
					navigation.push('Publicacion');
				}}
			/>
			<Button
				title="Comentarios"
				onPress={() => {
					navigation.push('Comentarios');
				}}
			/>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50',
	},
});

//make this component available to the app
export default Perfil;
