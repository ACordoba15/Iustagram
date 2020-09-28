//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MiStackGeneral from './MiStackGeneral';
import PerfilDrawer from './PerfilDrawer';

const Nuevo = () => {
	return (
		<View>
			<Text>Nuevo</Text>
		</View>
	);
};

const Tab = createBottomTabNavigator();

// create a component
const MiBottomTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				options={({ ...args }) => {
					if (args.route.state) {
						if (
							args.route.state.routes[args.route.state.routes.length - 1]
								.name === 'Comentarios'
						) {
							return { tabBarVisible: false };
						}
					}
					return { tabBarVisible: true };
				}}
				name="Inicio"
			>
				{(props) => <MiStackGeneral {...props} nombreRutaInicial="Inicio" />}
			</Tab.Screen>
			<Tab.Screen name="Busqueda">
				{(props) => <MiStackGeneral {...props} nombreRutaInicial="Busqueda" />}
			</Tab.Screen>
			<Tab.Screen name="Nuevo" component={Nuevo} />
			<Tab.Screen name="Seguidores" component={MiStackGeneral} />
			<Tab.Screen name="Perfil">
				{(props) => (
					<MiStackGeneral {...props} nombreRutaInicial="PerfilDrawer" />
				)}
			</Tab.Screen>
		</Tab.Navigator>
	);
};

//make this component available to the app
export default MiBottomTab;
