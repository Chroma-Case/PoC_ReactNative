import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/button';

export const ForgotPasswordScreen = ({navigation}) => {
    return (
        <SafeAreaView >
            <Text style={styles.title}>Reset Password</Text>

            <View style={styles.container}>
                <Text style={styles.info}>Enter the email address that you used to create your account and we'll send you an email with instructions to reset you password.</Text>

                <Text style={{textAlign: 'center', marginBottom: 1, color: 'gray'}}>Email here</Text>

                <TextInput style={styles.textinput}/>
                <br style={{margin: 50}}/>

                <Button label={'Send Email'} onPressed={() => navigation.navigate('Login')} color={'green'}/>
                <br style={{margin: 20}}/>

                <Button label={'Cancel'} onPressed={() => navigation.navigate('Login')} color={'red'}></Button>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },
    textinput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 5,
        marginBottom: 20
    },
    info: {
        maxWidth: '40%',
        margin: 40
    },
});
