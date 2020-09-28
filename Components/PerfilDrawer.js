//import liraries
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const InicioDrawer = (props) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Inicio Drawer</Text>
			<Button
				title="Publicación"
				onPress={() => {
					props.navigation.navigate('Publicacion');
				}}
			/>
		</View>
	);
};

const BusquedaDrawer = (props) => {
	return (
		<View>
			<Text>Busqueda Drawer</Text>
		</View>
	);
};

// create a component
const PerfilDrawer = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="InicioDrawer" component={InicioDrawer} />
			<Drawer.Screen name="BusquedaDrawer" component={BusquedaDrawer} />
		</Drawer.Navigator>
	);
};

//make this component available to the app
export default PerfilDrawer;
