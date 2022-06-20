
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Button from '../components/button';

export const HomeScreen = ({route, navigation}) => {
    const {user} = route.params;
    const focusPocus = useIsFocused();

    React.useEffect(() => {
        if (focusPocus) {
            if (user.login == "") {
                navigation.navigate('SplashScreen');
            }
        }
    }, [focusPocus]);

    const logMeOut = () => {
        user.login = "";
        user.name = "";
        navigation.navigate('Login')
    }

    return (
        <View>
            <Text style={styles.title}>Welcome, {user.name}</Text>
            <View style={styles.container}>
                <Button label={'Logout'} onPressed={() => logMeOut()} color={'red'}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'center',
        width: 300,
        height: 70,
        marginBottom: 200
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 30
    },
})