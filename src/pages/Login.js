import React, {useState} from 'react';
import { 
    View,
    Text, 
    Image, 
    StyleSheet,
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Platform,
    AsyncStorage
} from 'react-native';
import logo from '../assets/logo.png'
import api from '../services/api'

const Login = ({ navigation }) => {
    [email, setEmail] = React.useState();
    [tecnologias, setTecnologias] = React.useState();

    React.useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('List');
            }
        })
    }, []);


    async function handleSubmit(){
        const response = await api.post('/sessions', {
            email
        })

        const { _id } = response.data;
        console.log(_id);

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', tecnologias);
        
        navigation.navigate('List');

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container} enabled={Platform.OS === 'ios'}>
            <Image source={logo} ></Image>
            <View style={styles.form}>
                <Text style={styles.label}>SEU EMAIL *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>TECNOLOGIAS</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    onChangeText={setTecnologias}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Encontrar spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})