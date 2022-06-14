import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "./views/home";
import { LoginScreen } from "./views/login";
import { SplashScreen } from "./views/splashscreen";

const Stack = createNativeStackNavigator();

const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name="SplashScreen"
				component={SplashScreen}
				options={{ title: 'Welcome' }}
			/>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
			/>
			<Stack.Screen
			name="Login"
			component={LoginScreen}
			/>
		</Stack.Navigator>
	</NavigationContainer>
)

export default Routes