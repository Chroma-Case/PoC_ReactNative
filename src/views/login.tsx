import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Button from '../components/button';

export const LoginScreen = ({navigation}) => {

    const logMe = () => {
        alert("you tried to log you in the app!");
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <Image style={styles.image} source={require("../assets/title.jpeg")}></Image> */}
                <View style={styles.box}>
                    <TextInput style={styles.textinput} placeholder='Email'/>
                    <TextInput style={styles.textinput} placeholder='Password' secureTextEntry={true}/>
                    <TouchableOpacity>
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
    },
});