import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Button from '../components/button';

export const LoginScreen = ({route, navigation}) => {
    const {user} = route.params;
    const [passwd, setPasswd] = React.useState("");
    const [emiel, setEmail] = React.useState("");
    const [hidden, setHidden] = React.useState(true);

    const logMe = () => {
        if (emiel == "amaury.dc@free.fr" && passwd == "password") {
            //api will send use informatiosn about customer, for now its hard coded
            user.login = emiel;
            user.name = "Amaury"
            //it's all good sir, go ahead and enjoy piano
            navigation.navigate('Home');
        } else {
            //notify that the credentials are not correct and reset password
            alert("wrong login, try again.");
            setPasswd("");
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <Image style={styles.image} source={require("../../assets/banner.png")}></Image>

                <View style={styles.box}>
                    <TextInput style={styles.textinput} placeholder='Email' autoComplete='email' 
                    value={emiel} onChangeText={setEmail} autoCorrect={false} autoCapitalize='none' />

                    <TextInput style={styles.textinput} placeholder='Password' autoCapitalize='none' 
                    value={passwd} onChangeText={setPasswd} secureTextEntry={true} editable={true} />

                    <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                        <Text style={styles.forgotText}>Forgot password?</Text>
                    </TouchableOpacity>

                    <Button label={'Login'} onPressed={() =>logMe()} color={'green'}/>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'center',
        width: 400,
        height: '20%',
        marginBottom: 75
    },
    box: {
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 10,
        borderRadius: 20,
        padding: 30
    },
    textinput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 5,
        margin: 10,
    },
    forgotText: {
        textAlign: 'center',
        marginBottom: 1,
        color: 'gray',
    }
});