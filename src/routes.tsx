import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import User from "./models/user";
import { ForgotPasswordScreen } from "./views/forgotPwd";
import { HomeScreen } from "./views/home";
import { LoginScreen } from "./views/login";
import { SplashScreen } from "./views/splashscreen";
import SearchScreen from "./views/search";

// global user informations
const user = new User("", "", 0, undefined);

const Stack = createNativeStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'ChromaCase | Home' }}
                initialParams={{user: user}}
            />
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ title: 'ChromaCase | Welcome', headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'ChromaCase | Login', headerShown: false }}
                initialParams={{user: user}}
            />
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{ title: 'ChromaCase | Search' }}
                initialParams={{user: user}}
            />
            
        </Stack.Navigator>
    </NavigationContainer>
)
export default Routes