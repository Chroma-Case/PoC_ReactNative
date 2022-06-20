import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import User from "./models/user";
import { ForgotPasswordScreen } from "./views/forgotPwd";
import { HomeScreen } from "./views/home";
import { LoginScreen } from "./views/login";
import { SplashScreen } from "./views/splashscreen";

// global user informations
const user = new User("", "", 0, undefined);

const Stack = createNativeStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'ChromaCase | Home', headerShown: false }}
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
                name="Forgot"
                component={ForgotPasswordScreen}
                options={{ title: 'ChromaCase | Reset Password', headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes