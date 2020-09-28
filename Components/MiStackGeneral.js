//import liraries
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Publicacion from './Publicacion';
import Perfil from './Perfil';
import Comentarios from './Comentarios';
import PerfilDrawer from './PerfilDrawer';

const Stack = createStackNavigator();

const Inicio = ({ navigation, route }) => {
	return (
		<View>
			<Text>Inicio</Text>
			<Button
				title="Publicación"
				onPress={() => {
					navigation.push('Publicacion');
				}}
			/>
		</View>
	);
};

const Busqueda = ({ navigation, route }) => {
	return (
		<View>
			<Text>Busqueda</Text>
			<Button
				title="Publicación"
				onPress={() => {
					navigation.push('Publicacion');
				}}
			/>
		</View>
	);
};

// create a component
const MiStackGeneral = ({ nombreRutaInicial }) => {
	return (
		<Stack.Navigator initialRouteName={nombreRutaInicial} headerMode="float">
			{/* Ventanas para la navegación */}
			<Stack.Screen name="Publicacion" component={Publicacion} />
			<Stack.Screen name="Perfil" component={Perfil} />
			<Stack.Screen name="Comentarios" component={Comentarios} />
			<Stack.Screen name="Inicio" component={Inicio} />
			<Stack.Screen name="Busqueda" component={Busqueda} />
			<Stack.Screen name="PerfilDrawer" component={PerfilDrawer} />
		</Stack.Navigator>
	);
};

//make this component available to the app
export default MiStackGeneral;
