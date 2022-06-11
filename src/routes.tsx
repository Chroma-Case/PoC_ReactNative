import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "./views/home";
import { SplashScreen } from "./views/splashscreen";
import SearchScreen from "./views/search";

const Stack = createNativeStackNavigator();

const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="SplashScreen">
			<Stack.Screen
				name="SplashScreen"
				component={SplashScreen}
				options={{ title: 'Welcome', headerShown: false }}
			/>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
			/>
			<Stack.Screen
				name="Search"
				component={SearchScreen}
			/>
		</Stack.Navigator>
	</NavigationContainer>
 )

 export default Routes