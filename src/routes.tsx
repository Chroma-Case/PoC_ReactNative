import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "./views/home";
import { SplashScreen } from "./views/splashscreen";

const Stack = createNativeStackNavigator();

const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="SplashScreen"
				component={SplashScreen}
				options={{ title: 'Welcome', headerShown: false }}
			/>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
			/>
		</Stack.Navigator>
	</NavigationContainer>
 )

 export default Routes